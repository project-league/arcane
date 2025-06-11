import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Final } from './pages/Final';

const router = createBrowserRouter([
  {
    path: '/arcane',
    element: <Final />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
