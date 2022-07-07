import App from './App';
import { renderWithQueryClient } from '../utils/test';

test('renders App component', () => {
  renderWithQueryClient(<App />);
});
