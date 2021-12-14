import { Route, Routes } from 'react-router-dom'

import Login from './view/login/Login'
import Home from './view/Home/Home'
// import Products from './view/Products'
// import ProductDetail from './view/ProductDetail'
// import MainHeader from './components/MainHeader'

function App() {
  return (
    <div>
      {/* <MainHeader /> */}
      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App
