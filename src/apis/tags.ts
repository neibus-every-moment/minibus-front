import axios from 'axios';

import { baseUrl } from './baseUrl';

export async function getTransportationsApi() {
  try {
    const { data: { data } } =
        await axios.get(`${baseUrl}/transportations`);

    return data;
  } catch (e) {
    console.error(e);
    location.href = '/error';
  }
}

export async function getRegionsApi() {
  try {
    const { data: { data } } =
        await axios.get(`${baseUrl}/regions`);

    return data;
  } catch (e) {
    console.error(e);
    location.href = '/error';
  }
}
