import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img1 from '../../img/partenaire/CRI-LOGO-VFFinalFinalFINAL.png'
import img2 from '../../img/partenaire/5.png'
import img3 from '../../img/partenaire/ea85332b9057bbb8-4cf18-removebg-preview.png'
import img4 from '../../img/partenaire/logo-maroc-PMeE.png'
import img5 from '../../img/partenaire/LOGO_CGEM.png'
import img6 from '../../img/partenaire/ministre-economie-marocemploicc.png'
import img7 from '../../img/partenaire/ofppt-logo-ACD755B3D2-seeklogo.com.png'
import img8 from '../../img/partenaire/technopark-casablanca-logo-99DC554EBB-seeklogo.com.png'
import './css/Methodes.css'

const Item = styled(Paper)(({ theme }) => ({
  boxShadow:'none',
  background:'none',
 textAlign: 'center',
 color:'#888888',
  textTransform:'uppercase',
  fontSize:'15px',
  marginBottom:'12px'

}));



function Partenaires() {

  return (
    <>
    <div className='contenttop'>
      <Item>
      nos partenaires
      </Item>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} md={1.5}>
        <Item> <img src={img1} alt="logo" width='140px' ></img></Item>
        </Grid>
        <Grid item xs={6} md={1.5}>
        <Item> <img src={img2} alt="logo"className='Partenaire1'></img></Item>
        </Grid>
        <Grid item xs={6}md={1.5}>
        <Item> <img src={img3} alt="logo"className='Partenaire'></img></Item>
        </Grid>
        <Grid item xs={6}md={1.5}>
        <Item> <img src={img4} alt="logo"className='Partenaire'></img></Item>
        </Grid>
        <Grid item xs={6}md={1.5}>
        <Item> <img src={img5} alt="logo"className='Partenaire1'></img></Item>
        </Grid>
        <Grid item xs={6}md={1.5}>
        <Item> <img src={img6} alt="logo"className='Partenaire1'></img></Item>
        </Grid>
        <Grid item xs={6}md={1.5}>
        <Item>  <img src={img7} alt="logo"className='Partenaire1'></img></Item>
        </Grid>
        <Grid item xs={6}md={1.5}>
        <Item> <img src={img8} alt="logo"className='Partenaire1'></img></Item>
        </Grid>
   </Grid>
    </div>

    
    </>
  )
}

export default Partenaires