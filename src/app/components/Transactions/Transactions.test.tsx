import { screen } from '@testing-library/react';
import Transactions from './Transactions';
import { renderWithQueryClient } from '../../../utils/test';

test('renders response from query', async () => {
  renderWithQueryClient(<Transactions />);

  const transactionTitles = await screen.findAllByRole('heading', {
    name: /token:transfer|dpos:voteDelegate|dpos:unlockToken/i
  });

  expect(transactionTitles).toHaveLength(10);
});
