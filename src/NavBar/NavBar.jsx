import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
import { Grid } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import {
  ListItem,
  ListItemIcon,
  ListItemText} from '@mui/material';
import {
  ShoppingCart,
  MenuBook,
  Info,
  Phone
} from '@mui/icons-material/';
import './NavBar.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Popover, Button, Divider } from '@mui/material';

const data = [
  { name: "Menu", icon: <MenuBook />, link:"/Menu" },
  { name: "Información", icon: <Info />, link:"/Info" },
  { name: "Contacto", icon: <Phone />, link:"/Contacto" },
];


export default function NavBar({numItems, items}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem className='list-item' key={index}>
          <Link to={item.link} style={{ textDecoration: 'none' }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </Link>
        </ListItem>
      ))}
    </div>
  );

  const getItems = () => (
    <div style={{ width: 250, textAlign: 'center' }} onClick={() => setOpen(false)}>
      {items.length === 0 ? 
        <h3>No items in your cart</h3>
        :
        <div>
          {items.map((item, index) => (
            <>
            <ListItem className='product-item' key={index}>
              <p>{item.name} x {item.count}</p>
              <p>$ {item.price * item.count}</p>
            </ListItem>
            <Divider style={{ background: 'black' }}/>
            </>
          ))}
          <Button>Checkout</Button>
        </div>
      }
    </div>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer />
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            {getList()}
          </Drawer>
          <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: 1}}
          >
            <img src={logo} alt="logo" className='logo'/>
            <Typography variant="h6" component="div" >
            Restaurant La Ciudad Nueva
          </Typography>
          </Grid>
          <ShoppingCart className='shopping-cart' onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
          onClick={(event) => setAnchorEl(event.currentTarget)}/>
          <span className="dot">{numItems}</span>
          <Popover open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          >
            {getItems()}
          </Popover>
        </Toolbar>
      </AppBar>
    </Box>
  );
}