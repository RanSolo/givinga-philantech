import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  // Describe the requests to mock.
  rest.get('/api', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'Cool Charity',
      })
    );
  })
);

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});

test('renders a book data', () => {
  // Render components, perform requests, API communication is covered.
});
