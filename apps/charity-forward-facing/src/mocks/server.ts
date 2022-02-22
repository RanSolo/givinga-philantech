import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
  // Describe the requests to mock.
  rest.get('/api', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        branding: {
          name: 'Cool Charity',
        },
      })
    );
  })
);
