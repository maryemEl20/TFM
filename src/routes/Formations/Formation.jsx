import React from 'react'
import './formation.css'
import { hexToRgb, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import Partenaires from '../Home/Partenaires'
import Footer from '../Home/Footer';
import { HashLink } from 'react-router-hash-link';

import img1 from '../../img/icons/Group 172.svg'
import img2 from '../../img/icons/Group 173.svg'
import img3 from '../../img/icons/Group 174.svg'
import img4 from '../../img/icons/Group 175.svg'
import img5 from '../../img/icons/Group 176.svg'
import img6 from '../../img/icons/Group 177.svg'
import img7 from '../../img/icons/Group 178.svg'
import img8 from '../../img/icons/Group 179.svg'
import img9 from '../../img/icons/Group 180.svg'
import img10 from '../../img/icons/Group 181.svg'
import img11 from '../../img/icons/Group 182.svg'
import img12 from '../../img/icons/Group 183.svg'

function Formation() {

  
const Item = styled(Paper)(({ theme }) => ({  
  textAlign: 'center',
  boxShadow:'none',
  color:'#000',
  fontSize:'40px',
}));
const Text1 = styled(Paper)(({ theme }) => ({  
  textAlign: 'center',
  boxShadow:'none',
  color:'#fff',
  background:'none',
  fontSize:'40px',
}));

const Text2 = styled(Paper)(({ theme }) => ({  
  textAlign: 'center',
  boxShadow:'none',
  background:'none',
  color:'#fff',
  fontWeight:'100'

}));


const Item2 = styled(Paper)(({ theme }) => ({  
  textAlign: 'center',
  boxShadow:'none',
  fontSize:'15px',
  color:'#000',
  height:'100px'

}));

  
const Item3 = styled(Paper)(({ theme }) => ({  
  textAlign: 'center',
  boxShadow:'none',

}));

  return (
      <>
       <div className='content'>
    <Box sx={{ flexGrow: 1 , marginTop:'150px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} >
          <Item>Nos services De Formation</Item>
        </Grid>
        <Grid item xs={12} md={6} >
          <Item2>Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.</Item2>
        </Grid>
      </Grid>
    </Box>

    <Grid container rowSpacing={1} >
      <Grid item xs={6} md={3}>
         <Item3><img src={img1} alt="logo" className='icon'></img></Item3>
         <Item2>Management & RH industrielle</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img2} alt="logo" className='icon' ></img></Item3>
      <Item2>Eléctricité & Eléctronique</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img3} alt="logo" className='icon' ></img></Item3>
      <Item2>Compétitivité et Performance</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img4} alt="logo" className='icon' ></img></Item3>
      <Item2>Nouvelles-Tech & Design Thinking</Item2>
      </Grid>
    </Grid>

    <Grid container rowSpacing={1} >
      <Grid item xs={6} md={3}>
         <Item3><img src={img5} alt="logo" className='icon' ></img></Item3>
         <Item2>Hygiène & Securité de l’environnement</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img6} alt="logo" className='icon' ></img></Item3>
      <Item2>Qualité</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img7} alt="logo" className='icon' ></img></Item3>
      <Item2>Management & RH</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img8} alt="logo" className='icon' ></img></Item3>
      <Item2>Mécanique, CAO & DAO</Item2>
      </Grid>
    </Grid>

    <Grid container rowSpacing={1} >
      <Grid item xs={6} md={3}>
         <Item3><img src={img9} alt="logo" className='icon' ></img></Item3>
         <Item2>Audit & Certification</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img10} alt="logo" className='icon' ></img></Item3>
      <Item2>Formation Sur Mesure</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img11} alt="logo" className='icon' ></img></Item3>
      <Item2>Soft Skills</Item2>
      </Grid>
      <Grid item xs={6} md={3}>
      <Item3><img src={img12} alt="logo" className='icon' ></img></Item3>
      <Item2>Finance</Item2>
      </Grid>
    </Grid>
    </div>

    <div className='Formaion'>
    <div className='contenttop' >
    <Grid container rowSpacing={1} >
      <Grid item xs={12} md={12}>
         <Text1>Formation sur mesure</Text1>
      </Grid>

      <Grid item xs={12} md={12}>
      <Text2>Un programme de formation sur-mesure est conçu spécifiquement pour une entreprise. 
        Il ne pourra pas être dupliqué en tant que tel à d'autres entreprises, 
        et devra être en grande partie crée et adapté aux besoins exprimés par l'entreprise et ses enjeux.</Text2>
      </Grid>

      <Grid item xs={12} md={12}>
        <Text1>
     
             <Button variant="contained" sx={{marginTop:'15px' , background:'#000928' , padding:'10px 30px' , fontWeight:'100', '&:hover':{  background:'#0101',color:'#fff' } }}>
             <HashLink  to="/#contact" className='contact-hashLink'>
              Contactez-Nous
              </HashLink>
              </Button>       
        </Text1>
      </Grid>

    </Grid>
    </div>
    </div>

    <div className="content">
    <Partenaires/>
    </div>

    <div className='Footer'>
    <div className='contenttop' >
      <Footer/>
    </div>
    </div>
      </>
  )
}

export default Formation