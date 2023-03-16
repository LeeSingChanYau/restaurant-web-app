import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Menu from './Menu/Menu';
import Info from './Info/Info';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Contacto from './Contacto/Contacto';
import Checkout from './Checkout/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51MlncVHw8fIJEUqvnmi1Bojn84giJRXd9kFNbOiBDAIZZkGK9VwrvIYVygD4i8MIwccPaLlsTuAf3zhK1YQSKNYZ00kJoTC2OR');

export default function App() {
  const [numItems, setNumItems] = useState(0);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home numItems={numItems} 
        setNumItems={setNumItems} items={items} setItems={setItems} total={total} setTotal={setTotal}/>}>
          <Route index element={<Menu numItems={numItems} setNumItems={setNumItems} 
          items={items} setItems={setItems} total={total} setTotal={setTotal}/>} />
          <Route path="Menu" element={<Menu numItems={numItems} setNumItems={setNumItems} items={items} 
          setItems={setItems} total={total} setTotal={setTotal}/> } />
          <Route path="Info" element={<Info />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Checkout" element={<Checkout items={items} setItems={setItems} total={total}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Elements stripe={stripePromise}>
      <App />
    </Elements>);

