import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/products" element={<div>Products will load here</div>} />
          <Route path="/cart" element={<div>Cart will load here</div>} />
        </Routes>
      </main>
      <footer>Microverse E-commerce</footer>
    </BrowserRouter>
  );
}

export default App