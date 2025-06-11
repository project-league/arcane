import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FirstPage } from './pages/First';

const router = createBrowserRouter([
  {
    path: '/arcane',
    element: <FirstPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
