import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Final } from './pages/Final';
import { FirstPage } from './pages/First';
import { SecondPage } from './pages/Second';
import { Start } from './pages/Start';
import { Tickets } from './pages/Tickets';

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Final />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </HashRouter>
  );
}
