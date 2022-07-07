import { useQuery } from 'react-query';
import { fetchData } from '../../../api/api';
import { ITranscation } from '../types/transaction';

const url =
  'https://testnet-service.lisk.io/api/v2/transactions?address=lskbgyrx3v76jxowgkgthu9yaf3dr29wqxbtxz8yp';

export function useTransaction() {
  return useQuery<ITranscation, Error>(['transaction'], () => fetchData(url), {
    refetchOnWindowFocus: false
  });
}
