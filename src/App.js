import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import NoMatch from './components/NoMatch/NoMatch';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import ProductDetails from './components/ProductDetais/ProductDetails';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/Shop" element={< Product/>} />
        <Route path="/Order" element={<OrderReview />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/" element={< Product/>} />
        <Route path="/product/:productkey" element={< ProductDetails/>} />
        <Route path="/OrderReview" element={< OrderReview/>} />
        <Route path="*" element={< NoMatch/>} />
      </Routes>
    </BrowserRouter>
    
      

    </div>
  );
}

export default App;
