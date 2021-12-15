import { Route, Routes } from 'react-router-dom'

import Login from './view/login/Login'
import Home from './view/Home/Home'
import Category from './view/Category/Category'
import Product from './view/Product'
import ProductCreate from './view/Product/create'
import ProductEdit from './view/Product/edit'

import Navigation from './view/Components/Navigation/navigation'
// import Products from './view/Products'
// import ProductDetail from './view/ProductDetail'
// import MainHeader from './components/MainHeader'

function App() {
  return (
    <div className="app">
      <Navigation />

      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/create' element={<ProductCreate />} />
          <Route path='/product/edit/:id' element={<ProductEdit />} />
          {/* <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} /> */}
        </Routes>
      </main>

    </div>
  );
}

export default App
