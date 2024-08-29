import Home from './Pages/Home';
import Trash from './Pages/Trash';
import BaseLayout from './BaseLayout';
import { useState } from 'react';

import { Route, Routes } from 'react-router';

function App() {
  const [language, setLanguage] = useState('ko');

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home language={language} setLanguage={setLanguage} />} />
        <Route path="/trash" element={<Trash />} />
      </Route>
    </Routes>
  );
}

export default App;
