import axios from 'axios';

interface reportApiBody {
    postId: string,
    reportReason: string,
    detail?: string
}

export async function getReportReasonsApi() {
  try {
    const { data: { data } }
        = await axios.get('http://3.37.182.59:8080/api/reasons');

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
        'http://3.37.182.59:8080/api/report',
        {
          postId: parseInt(postId),
          reportReason,
        }
      );

      return data;
    }

    if (reportReason === '기타' && detail) {
      const { data } = await axios.post(
        'http://3.37.182.59:8080/api/report',
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
