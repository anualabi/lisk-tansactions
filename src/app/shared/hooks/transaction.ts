import { useInfiniteQuery } from 'react-query';
import { fetchData } from '../../../api/api';
import { APIResponse } from '../types/transaction';

const url =
  'https://testnet-service.lisk.io/api/v2/transactions?address=lskbgyrx3v76jxowgkgthu9yaf3dr29wqxbtxz8yp';

export function useTransaction() {
  const { status, data, error, isFetching, fetchNextPage } = useInfiniteQuery<APIResponse, Error>(
    'transactions',
    ({ pageParam = 0 }) => fetchData(`${url}&offset=${pageParam}`),
    {
      getNextPageParam: (lastPage) =>
        lastPage.meta ? lastPage.meta.count + lastPage.meta.offset : undefined,
      refetchOnWindowFocus: false
    }
  );

  return {
    status,
    data,
    error,
    isFetching,
    fetchNextPage
  };
}
