import axios from 'axios';

export async function getReportReasonsApi() {
  try {
    const { data: { data } }
        = await axios.get('http://3.37.182.59:8080/api/reasons');

    return data;
  } catch (e) {
    console.error(e);
  }
}
