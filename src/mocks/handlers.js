import { rest } from 'msw';
import { mockTransactions } from './mockData';

export const handlers = [
  rest.get('http://localhost:3030/transactions', (req, res, ctx) => {
    return res(ctx.json(mockTransactions));
  })
];
