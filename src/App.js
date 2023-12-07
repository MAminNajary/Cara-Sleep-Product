import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import SleepProducts from './components/Products/SleepProducts';
import Mattress from './components/Products/Mattress';
import Cloths from './components/Products/Cloths';
import Etc from './components/Products/Etc';
import ProductDetails from './components/Shared/ProductDetails';

import ProductContextProvider from './components/context/ProductContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <Routes>
          <Route path='/Home' element={<Home />} />


          <Route path='/Store/SleepProducts' element={<SleepProducts />} />
          <Route path='/Store/Mattress' element={<Mattress />} />
          <Route path='/Store/Cloths' element={<Cloths />} />
          <Route path='/Store/Etc' element={<Etc />} />
          <Route path='/' element={<Navigate to='/Home'/>}/>

          <Route path='/Store/details/:id' element={<ProductDetails />} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
