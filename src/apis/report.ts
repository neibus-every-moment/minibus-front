import axios from 'axios';

import { baseUrl } from './baseUrl';

interface reportApiBody {
    postId: string,
    reportReason: string,
    detail?: string
}

export async function getReportReasonsApi() {
  try {
    const { data: { data } }
        = await axios.get(`${baseUrl}/api/reasons`);

    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function postReportApi({
  postId,
  reportReason,
  detail,
}:reportApiBody) {
  try {
    console.log(postId, reportReason, detail);
    if (reportReason !== '기타') {
      const { data } = await axios.post(
        `${baseUrl}/report`,
        {
          postId: parseInt(postId),
          reportReason,
        }
      );

      return data;
    }

    if (reportReason === '기타' && detail) {
      const { data } = await axios.post(
        `${baseUrl}/report`,
        {
          postId: parseInt(postId),
          reportReason,
          detail,
        }
      );

      return data;
    }
  } catch (e) {
    console.error(e);
  }
}
