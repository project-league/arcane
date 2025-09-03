import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Final } from './pages/Final';
import { Start } from './pages/Start';

const router = createBrowserRouter([
  {
    path: '/arcane/',
    element: <Final />,
  },
  {
    path: '/arcane/start/',
    element: <Start />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
