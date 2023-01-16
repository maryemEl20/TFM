import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
  Grid
} from "@mui/material";
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
  // const pages = ["Accueil", "Solutions", "Produits", "Secteurs","A propos de nous"];

  import { HashLink } from 'react-router-hash-link';

  const DrawerComp = () => {

  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  let navigate = useNavigate(); 

  let navigate1 = useNavigate(); 
  const Accueil = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  
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
     
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { width: "60%" },
        }}  >
          
    <List>
      <ListItemText>
          <Button  sx={{ background:'none', boxShadow:'none', border:'none',marginLeft:'20px' , '&:hover':{  background:'none',color:'#3aaa35', border:'none',boxShadow:'none'}}} >
              <HashLink className="HashLink-media" to="/">Accueil</HashLink>  
          </Button>
          <br/><br/>
          <Button  sx={{ background:'none', color:'#1E1E1E', boxShadow:'none', border:'none',marginLeft:'20px' ,'&:hover':{  background:'none',color:'#3aaa35', border:'none',boxShadow:'none'}}} >
             <HashLink className="HashLink-media" to="/Service">Services</HashLink>  
          </Button>
          <br/><br/>
          <Button  sx={{ background:'none', color:'#1E1E1E', boxShadow:'none', border:'none',marginLeft:'20px' ,'&:hover':{  background:'none',color:'#3aaa35', border:'none',boxShadow:'none'}}} >
             <HashLink className="HashLink-media" to="/#Pourquoi-nous-choisir">Pourquoi nous choisir</HashLink>  
          </Button>
          <br/><br/>
          <Button  sx={{ background:'none', color:'#1E1E1E', boxShadow:'none', border:'none',marginLeft:'20px' ,'&:hover':{  background:'none',color:'#3aaa35', border:'none',boxShadow:'none'}}} >
             <HashLink to="/Rendez-Vous" className="HashLink-media"   >Rendez-Vous</HashLink>  
          </Button>
          <br/><br/>
          <Button  sx={{ background:'none', color:'#1E1E1E', boxShadow:'none', border:'none',marginLeft:'20px' ,'&:hover':{  background:'none',color:'#3aaa35', border:'none',boxShadow:'none'}}} >
             <HashLink  className="HashLink-media" to="/Contactez-Nous">Contactez-Nous </HashLink>  
          </Button>
      </ListItemText>
    </List>
        
            <Button  onClick={onButtonClick}
            sx={{
              marginLeft: "center",background:'none',color:'#fff', 
              borderRadius:'0px',
              fontWeight:'500',
              background:'#10182F',
              height:'50px',
              '&:hover':{
                background:'#0B7F76',color:'#fff' }}} 
                variant="contained">
                 Plaquette TFM
            </Button>
  
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto", }}
        onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{color:'#1E1E1E'}} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;