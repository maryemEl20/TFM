import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import { HashLink } from 'react-router-hash-link';

import DrawerComp from "./DrawerComp";
import '../App.css'
import { useNavigate } from "react-router-dom";
import logo from '../img/Logo.svg'

const Header = () => {
  const [value, setValue] = useState('');
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  /* \/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/**\/ */
  const onButtonClick = () => {
    fetch('plaquetteTfmCompressed.pdf').then(response => {
        response.blob().then(blob => {
         
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'plaquetteTfmCompressed.pdf';
            alink.click();
        })
    })
}


  return (
    <React.Fragment>
    <AppBar sx={{ background: "#C4FFE5" }}>

      <Toolbar sx={{color:'#333'}} > 
        <a href="/" className="logo">
        <img src={logo} alt="logo" width='70px' ></img>
        </a>

        {isMatch ? (
          <>
             <DrawerComp/>
          </>
        ) : (
          <>
             <Navbar className='nav' />
       <nav>
      <ul className="menus">
        <li className="menu-items">  
           <button type="button" className='btn-nav'>
            <HashLink to="/#Pourquoi-nous-choisir">Pourquoi nous choisir</HashLink>  
            </button>
        </li>
      </ul>
       </nav>
           <Button  onClick={onButtonClick} sx={{ marginLeft: "auto",background:'#10182F',color:'#fff', fontWeight:'500' , boxShadow:'none',border:'1px solid #C4FFE5   ', '&:hover':{  background:'#0B7F76',color:'#fff' }}} 
              variant="contained" >
                 Plaquette TFM
            </Button>
          </>
        )}
         
      </Toolbar>
    
    </AppBar>
  </React.Fragment>


  );
};

export default Header;