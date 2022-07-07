import axios from 'axios';
import { APIResponse } from '../app/shared/types/transaction';

export const fetchData = async (url: string): Promise<APIResponse> => {
  const { data } = await axios.get(url);
  return data as APIResponse;
};
