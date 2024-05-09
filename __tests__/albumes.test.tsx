import { render } from '@testing-library/react';

import { wrapper } from './queryClient.test';
import Albumes from '@/app/user/[userId]/albums/page';

jest.mock('next/navigation', () => ({
  __esModule: true,
  ...jest.requireActual('next/navigation'),
  useParams: jest.fn(() => ({ userId: 1 })),
}));

it('should renders the albumes page', async () => {
  const page = <Albumes />;
  render(wrapper({ children: page }));
});
