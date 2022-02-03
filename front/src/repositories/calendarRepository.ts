import { createAxios } from '@/repositories/repository';
import { AxiosResponse } from 'axios';
const resource = '/calendars';

export default {
  getAllDocId() {
    return createAxios
      .get(`${resource}`)
      .then((response: AxiosResponse<string[]>) => {
        return response;
      });
  },
};
