import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Menu from './Menu/Menu';
import Info from './Info/Info';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Contacto from './Contacto/Contacto';


export default function App() {
  const [numItems, setNumItems] = useState(0);
  const [items, setItems] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home numItems={numItems} 
        setNumItems={setNumItems} items={items} setItems={setItems}/>}>
          <Route index element={<Menu numItems={numItems} setNumItems={setNumItems} 
          items={items} setItems={setItems}/>} />
          <Route path="Menu" element={<Menu numItems={numItems} setNumItems={setNumItems}/>} />
          <Route path="Info" element={<Info />} />
          <Route path="Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

