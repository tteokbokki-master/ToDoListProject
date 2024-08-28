import Home from './Pages/Home';
import Trash from './Pages/Trash';
import BaseLayout from './BaseLayout';

import { Route, Routes } from 'react-router';
function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/trash" element={<Trash />} />
      </Route>
    </Routes>
  );
}

export default App;
