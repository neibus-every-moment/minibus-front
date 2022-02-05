import axios from 'axios';

import getNameArray from '../utils/getNameArray';

export async function getTransportationNameArray() {
  try {
    const { data: { data } } =
        await axios.get('http://3.37.182.59:8080/api/transportations');
    return getNameArray(data);
  } catch (e) {
    console.error(e);
  }

}

export async function getRegionNameArray() {
  try {
    const { data: { data } } =
        await axios.get('http://3.37.182.59:8080/api/regions');

    return getNameArray(data);
  } catch (e) {
    console.error(e);
  }
}
