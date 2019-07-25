import axios from 'axios';

export const axiosWithHeaders = (apiHost, apiKey) => {
  console.log('axios headers');
  return axios.create({
    headers: {
      "X-RapidAPI-Host": apiHost,
      "X-RapidAPI-Key":  apiKey
    }
  });
}