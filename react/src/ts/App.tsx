import React from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HashRouter as BrowserRouter, Routes, Route} from 'react-router-dom'; // Навигация по хэш
import Navbar from '../components/Navbar';
import About from '../pages/About';
import SwitchTheme from '../components/SwitchTheme';
import MainContainer from '../containers/MainContainer';

const NotFound = () => <h2>404: Страница не найдена</h2>;

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <SwitchTheme/>
      <Routes>
        <Route path="/" element={<MainContainer/>} />
        <Route path="/about" element={<About/>} />
        {/* Обработка несуществующего маршрута */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;