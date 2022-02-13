import axios from 'axios';

import { baseUrl } from './baseUrl';

interface reportApiBody {
    id: string,
    reportReason: string,
    detail?: string
}

export async function getReportReasonsApi() {
  try {
    const { data: { data } }
        = await axios.get(`${baseUrl}/reasons`);

    return data;
  } catch (e) {
    console.error(e);
    location.href = '/error';
  }
}

export async function reportPostApi({
  id,
  reportReason,
  detail,
}:reportApiBody) {
  try {
    if (reportReason === '기타' && detail) {
      const { data } = await axios.post(
        `${baseUrl}/report`,
        {
          postId: parseInt(id),
          reportReason,
          detail,
        }
      );

      return data;
    }
    if (reportReason !== '기타') {
      const { data } = await axios.post(
        `${baseUrl}/report`,
        {
          postId: parseInt(id),
          reportReason,
        }
      );

      return data;
    }
  } catch (e) {
    console.error(e);
    location.href = '/error';
  }
}

export async function reportCommentApi({
  id,
  reportReason,
  detail,
}:reportApiBody) {
  try {
    if (reportReason === '기타' && detail) {
      const { data } = await axios.post(
        `${baseUrl}/comment/report`,
        {
          commentId: parseInt(id),
          reportReason,
          detail,
        }
      );

      return data;
    }

    if (reportReason !== '기타') {
      const { data } = await axios.post(
        `${baseUrl}/comment/report`,
        {
          commentId: parseInt(id),
          reportReason,
        }
      );

      return data;
    }
  } catch (e) {
    console.error(e);
    location.href = '/error';
  }
}
