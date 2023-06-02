import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/layout/SharedLayout';
import SomePage from './components/pages/SomePage';
import SomeOtherPage from './components/pages/SomeOtherPage';
import Home from './components/pages/Home';
import './styles/defaults.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="somepage" element={<SomePage />}></Route>
          <Route path="someotherpage" element={<SomeOtherPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
