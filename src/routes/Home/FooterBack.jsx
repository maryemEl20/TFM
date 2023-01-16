import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './css/partenaires.css'
import Button from '@mui/material/Button';
import { HashLink } from 'react-router-hash-link';


function FooterBack() {
 
  const Item2 = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    boxShadow:'none',
    background:'none',
    marginTop:'40px'
  }))

  return (
    <div className ='content-back'>
    <div className='partenaire'>  
      <h1 className='title-partenaire'>What are you waiting for, <br/>join us today</h1>
      <p className='p-partenaire'>Ready to improve your business start with our great services and our great team of experts <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nam.</p>
    
    <Item2>
    <HashLink to="/Contactez-Nous"  className="href-style">
    <Button variant="contained" sx={{borderRadius:'20px', marginTop:'15px' , background:'#000928' , padding:'10px 30px' , fontWeight:'100', }}>
       Contactez-Nous 
     </Button> 
     </HashLink>
    </Item2>
    </div>


</div>
  )
}

export default FooterBack