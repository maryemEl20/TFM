// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Card, Link, Stack, Button, Divider, Container, Typography, ListItem, Paper } from '@mui/material';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Input from '@mui/material/Input';
import logo from '../../img/methodes/logoTfm.svg'
import './css/Footer.css'
// ----------------------------------------------------------------------
import { HashLink } from 'react-router-hash-link';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  boxShadow:'none',
  paddingTop:'25px',
  background:'none',
  fontSize:'14px',
  textAlign:'center',
  color:'#fff'
}));


const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  boxShadow:'none',
  paddingTop:'60px',
  background:'none',
  textAlign:'center',
  color:'#fff'
}));




function Footer() {
  return (
    <div className='footer-header'>
         <img src={logo} alt="logo"></img>
  <RootStyle >

  <Grid container spacing={5}>
    <Grid  item xs={6} md={3} >
      <Box sx={{ fontSize:'16px' ,color:'#fff' , fontWeight:'100', textTransform:'uppercase'}} >Services</Box>
   
        <Box sx={{marginTop :'20px'}} >
        <HashLink className='HashLink-footer' to="/Service/#Accompagnement">Accompagnement</HashLink>
         </Box>
         <Box >
        <HashLink className='HashLink-footer' to="/Service/#Ingénierie de formation">Ingénierie de formation</HashLink>
         </Box>
         <Box>
        <HashLink className='HashLink-footer' to="/Service/#Formation">Formation</HashLink>
         </Box>
         <Box>
        <HashLink className='HashLink-footer' to="/Service/#Audit">Audit</HashLink>
         </Box>
    </Grid>

    <Grid  item xs={6} md={3} >
    <Box sx={{marginTop :'20px'}} >
        <HashLink className='HashLink-footer'to="/Service/#Diagnostic stratégique"> Diagnostic stratégique</HashLink>
    </Box>
    <Box>
        <HashLink className='HashLink-footer'  to="/Service/#Sourcing">Sourcing</HashLink>
    </Box>
    <Box>
        <HashLink className='HashLink-footer' to="/Service/#Communication digitale"> Communication digitale</HashLink>
    </Box>
    </Grid>

    <Grid  item xs={6} md={3} >
      <Box sx={{ fontSize:'16px' ,color:'#fff' , fontWeight:'100', textTransform:'uppercase'}} >contact</Box>
   
        <Box sx={{color:'#fff', fontSize:'14px',marginTop:'15px', fontWeight:'100'}} >Tel: +212 761-513325</Box>
        <Box sx={{color:'#fff', fontSize:'14px',marginTop:'5px', fontWeight:'100'}}>Fix: +212 528-227813</Box>
        <Box sx={{color:'#fff', fontSize:'14px',marginTop:'5px', fontWeight:'100'}}>Contact@tfmconsulting.ma</Box>
        <Box sx={{color:'#fff', fontSize:'14px' ,marginTop:'5px', fontWeight:'100'}} >NR 8 Rue Nissrine Cité Riad Salam - Agadir</Box>
    </Grid>

    <Grid  item xs={6} md={3} >
      <Box sx={{ fontSize:'20px' ,color:'#fff' , fontWeight:'500',}} >Notre Newsletter</Box>
      <Box sx={{ fontSize:'12px' ,color:'#fff' , fontWeight:'100'}} >Nous vous invitons à vous inscrire à notre Newsletter afin de recevoir les mises à jour de TFM. </Box>
      <div className='footer-input'>
              <div className="input-group-contact">
                <form className='form'>
                   <input className='input' placeholder='  Entrer votre email' />
                  <button className='btn' >Abonner</button>
                </form>
              </div>
          </div>  
    </Grid>

  </Grid>

  <br/><br/>
  <hr/>

  <Box sx={{ marginTop:'10px' }}>
    <Grid container spacing = {5} >
    
      <Grid item xs={12} md= {2}>
        <Item >Conditions d'utilisation</Item>
      </Grid>
      <Grid item xs={12} md= {3}>
        <Item>Politique de confidentialité</Item>
      </Grid>
      <Grid  xs={12} md= {5}>
        <Item2 >
            <FacebookTwoToneIcon  sx ={{ borderRadius:'50%' , cursor:'pointer'}}  />
              <LinkedInIcon   sx ={{marginLeft:'10px' , cursor:'pointer'}}  />
              <YouTubeIcon    sx ={{marginLeft:'10px' , cursor:'pointer'}}  />
              <InstagramIcon  sx ={{marginLeft:'10px' , cursor:'pointer'}}  />
        </Item2>
      </Grid>

      <Grid item xs={12} md= {2}>
        <Item>©2023 TFM consulting</Item>
      </Grid>

    </Grid>
  </Box>

    </RootStyle>
         
    </div>
  )
}

export default Footer