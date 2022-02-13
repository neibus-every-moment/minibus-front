import axios from 'axios';
import { useNavigate } from 'react-router';

import { baseUrl } from './baseUrl';

interface reportApiBody {
    id: string,
    reportReason: string,
    detail?: string
}

export async function getReportReasonsApi() {
  const navigate = useNavigate();
  try {
    const { data: { data } }
        = await axios.get(`${baseUrl}/reasons`);

    return data;
  } catch (e) {
    console.error(e);
    navigate('/error');
  }
}

export async function reportPostApi({
  id,
  reportReason,
  detail,
}:reportApiBody) {
  const navigate = useNavigate();
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
    navigate('/error');
  }
}

export async function reportCommentApi({
  id,
  reportReason,
  detail,
}:reportApiBody) {
  const navigate = useNavigate();
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
    navigate('/error');
  }
}
