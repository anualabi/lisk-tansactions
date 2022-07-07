import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';

const generateQueryClient = () => new QueryClient();

export const renderWithQueryClient = (ui: ReactElement, client?: QueryClient): RenderResult => {
  const queryClient = client ?? generateQueryClient();

  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
};
