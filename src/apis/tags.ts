import axios from 'axios';

export async function getTransportationTagArray() {
  try {
    const { data: { data } } =
        await axios.get('http://3.37.182.59:8080/api/transportations');

    return data;
  } catch (e) {
    console.error(e);
  }

}

export async function getRegionTagArray() {
  try {
    const { data: { data } } =
        await axios.get('http://3.37.182.59:8080/api/regions');

    return data;
  } catch (e) {
    console.error(e);
  }
}
