import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCustomHook } from '../hooks/useCustomHook';
import '@testing-library/jest-dom';

const queryClient = new QueryClient();
export const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const { result } = renderHook(() => useCustomHook(), { wrapper });

test('useCustomHook', async () => {
  await waitFor(() => {
    expect(result.current.data).toBe('Hello');
  });
});
