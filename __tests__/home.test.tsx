import { render, screen, waitFor } from '@testing-library/react';

import Home from '@/app/page';
import { wrapper } from './queryClient.test';

it('should renders the home page', async () => {
  const page = <Home />;
  render(wrapper({ children: page }));

  await waitFor(() => {
    expect(screen.getByText('Bienvenido a Post Graph')).toBeInTheDocument();
    expect(screen.getByText('Lista de usuarios con API básica de posteos')).toBeInTheDocument();
  });
});
