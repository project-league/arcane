import {
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import { Final } from './pages/Final';
import { Start } from './pages/Start';

// const router = createBrowserRouter([
//   {
//     path: '/arcane/',
//     element: <Final />,
//   },
//   {
//     path: '/arcane/start/',
//     element: <Start />,
//   },
// ]);

// const router = createHashRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Final />}>
//       {/* <Route path="/arcane/" element={<Final />} /> */}
//       <Route path="/start/" element={<Start />} />
//     </Route>
//   )
// );

export function Router() {
  return (
    <BrowserRouter basename="/arcane">
      <Routes>
        <Route path="/" element={<Final />} />
        <Route path="/start/" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
}
