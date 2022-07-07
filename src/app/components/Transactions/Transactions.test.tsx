import { render, screen } from '@testing-library/react';
import Transactions from './Transactions';

test('renders NavBar component', () => {
  render(<Transactions />);

  expect(screen.getByText('Transactions')).toBeInTheDocument();
});
