import './App.css';
import NavBar from './NavBar/NavBar';
import { Outlet } from "react-router-dom";
import {ReactComponent as Whatsapp} from './images/WhatsApp.svg';



function Home(props) {
  return (
    <div className='App'>
      <NavBar numItems={props.numItems} items={props.items}/>
      <Outlet items={props.items} setItems={props.setItems}/>
      <a href="https://wa.link/da9ua9" target="_blank" rel="noreferrer">
      <Whatsapp className='whatsapp'/>
      </a>
    </div>
    
  );
}

export default Home;
