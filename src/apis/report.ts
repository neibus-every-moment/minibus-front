import axios from 'axios';

interface reportApiBody {
    postId: number,
    reportReasonId: number,
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

export async function postReportApi(body:reportApiBody) {
  try {
    const { data } = await axios.post(
      'http://3.37.182.59:8080/api/report',
      body
    );

    if (data === true) {
      alert('신고가 접수되었습니다!');
      return;
    }

    alert('다시 시도해주세요');
    return;

  } catch (e) {
    alert('다시 시도해주세요');
    console.error(e);
  }
}
