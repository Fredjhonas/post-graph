import { render } from '@testing-library/react';

import { wrapper } from './queryClient.test';
import Photos from '@/app/user/[userId]/album/[albumId]/photos/page';

jest.mock('next/navigation', () => ({
  __esModule: true,
  ...jest.requireActual('next/navigation'),
  useParams: jest.fn(() => ({ userId: 1, albumId: 1 })),
}));

it('should renders the photos page', async () => {
  const page = <Photos />;
  render(wrapper({ children: page }));
});
