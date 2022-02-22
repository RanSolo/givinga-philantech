import { render, screen } from '@givinga-philantech/test-utils';
import { server } from '../mocks/server';
import App from './app';

describe('App', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
  it('should render with server data successfully', async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
    await screen.findByText(/cool charity/i);
  });
});
