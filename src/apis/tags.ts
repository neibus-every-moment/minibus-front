import axios from 'axios';
import { useNavigate } from 'react-router';

import { baseUrl } from './baseUrl';

export async function getTransportationsApi() {
  const navigate = useNavigate();
  try {
    const { data: { data } } =
        await axios.get(`${baseUrl}/transportations`);

    return data;
  } catch (e) {
    console.error(e);
    navigate('/error');
  }
}

export async function getRegionsApi() {
  const navigate = useNavigate();
  try {
    const { data: { data } } =
        await axios.get(`${baseUrl}/regions`);

    return data;
  } catch (e) {
    console.error(e);
    navigate('/error');
  }
}
