import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/home';
import Cart from './pages/Cart';
import About from './pages/About';
import Details from './pages/Details';
import { Product } from './Product';
import './App.css';
import LocationShop from "./pages/LocationShop";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [addedProducts, setAddedProducts] = useState<Product[]>([]); // Estado global del carrito

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const addProductToCart = (product: Product) => {
    if (!addedProducts.some(p => p.id === product.id)) {
      setAddedProducts(prevProducts => [...prevProducts, product]);
    }
  };

  const removeProductFromCart = (productId: number) => {
    setAddedProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
  };

  return (
    <>
      <Header 
        value={searchValue} 
        onChange={handleSearchChange} 
        cartCount={addedProducts.length} // Pasa la cantidad de productos
      />

      <Routes>
        <Route 
          path="/" 
          element={<Home 
            searchValue={searchValue} 
            addedProducts={addedProducts} 
            addProductToCart={addProductToCart} 
            removeProductFromCart={removeProductFromCart}
          />} 
        />
        <Route 
          path="/carrito" 
          element={<Cart 
            addedProducts={addedProducts} 
            removeProductFromCart={removeProductFromCart} 
          />} 
        />
        <Route path="/nosotros" element={<About />} />
        <Route 
          path="/detalles/:id" 
          element={<Details 
            addedProducts={addedProducts}
            addProductToCart={addProductToCart} 
            removeProductFromCart={removeProductFromCart}
          />} 
        />
        <Route path="/encuentranos" element={<LocationShop />} />
      </Routes>


    </>
  );
}

export default App;
