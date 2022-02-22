import { act, renderHook } from '@testing-library/react-hooks';
import { QueryClientProvider, QueryClient } from 'react-query';
import useCharity from './use-charity';

describe('useCharity', () => {
  const queryClient = new QueryClient();
  it('should render successfully', () => {
    const { result } = renderHook(() => useCharity());
    console.log('res', result.current);
    // expect(result.current.props).toBe(0);

    act(() => {
      // result.current.increment();
    });

    // expect(result.current.count).toBe(1);
  });
});
