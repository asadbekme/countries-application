import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Country, Footer, Header, Main } from './components';

const App = () => {
  return (
    <div className='w-full overflow-hidden bg-lightModeBg text-veryDarkBlue dark:bg-darkModeBg dark:text-white'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:slug" element={<Country />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;