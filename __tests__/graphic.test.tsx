import { render } from '@testing-library/react';

import { wrapper } from './queryClient.test';
import Graphic from '@/app/graphic/page';

jest.mock('react-apexcharts', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

it('should renders the graphic page', async () => {
  const page = <Graphic />;
  render(wrapper({ children: page }));
});
