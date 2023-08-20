import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import SleepProducts from './components/Products/SleepProducts';
import Mattress from './components/Products/Mattress';
import Cloths from './components/Products/Cloths';
import Etc from './components/Products/Etc';

function App() {
  return (
    <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/SleepProducts' element={<SleepProducts />} />
        <Route path='/Mattress' element={<Mattress />} />
        <Route path='/Cloths' element={<Cloths />} />
        <Route path='/Etc' element={<Etc />} />
        <Route path='/' element={<Navigate to='/Home'/>}/>
    </Routes>
  );
}

export default App;
