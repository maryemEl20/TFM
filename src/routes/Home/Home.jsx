
import './css/Home.css'
import Social from './Social';
import './css/social.css'
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Card, Link, Stack, Button, Divider, Container, Typography, ListItem, Paper } from '@mui/material';
//----------------------------------------------
import img1 from '../../img/Calque 160.svg'
import img2 from '../../img/1img5.svg'
import img3 from '../../img/imageClients/0000.png'
import img4 from '../../img/1img7.svg'
import img5 from '../../img/tppp.svg'
import img6 from '../../img/img4.svg'
import img7 from '../../img/img8.svg'
import img9 from '../../img/imageClients/1038292_logo_1564042336_n-removebg-preview.png'
import img10 from '../../img/imageClients/lg_afriquia.png'
import img11 from '../../img/imageClients/lg_cibel.jpg'
import img12 from '../../img/imageClients/lg_damsa.png'
import img13 from '../../img/imageClients/lg_driscolls.png'
import img14 from '../../img/imageClients/lg_fouzana.png'
import img15 from '../../img/imageClients/lg_fromital.png'
import img16 from '../../img/imageClients/lg_kingpelag.png'
import img17 from '../../img/imageClients/lg_lesdomainesagr.png'
import img18 from '../../img/imageClients/lg_olvea.png'
import img19 from '../../img/imageClients/lg_pprime.png'
import img20 from '../../img/imageClients/lg_qualitybean.png'
import img21 from '../../img/imageClients/lg_rosa.png'
import img22 from '../../img/imageClients/lg_setraged.png'
import img23 from '../../img/imageClients/lg_soglama.jpg'
import img24 from '../../img/imageClients/lg_ssmt.png'
import img25 from '../../img/imageClients/lg_tigri.png'
import img26 from '../../img/imageClients/lg_uema.png'
import img27 from '../../img/imageClients/lg_ventecool.png'
import imgmeth from '../../img/sliders/imgmeth.svg'

import { HashLink } from 'react-router-hash-link';
import './css/partenaires.css'
import Blog from './Blog';
import Services from './Services';
import Methodes from './Methodes'
import Contact from './Contact';
import RendezVous from './RendezVous';
import Partenaires from './Partenaires'
import Footer from './Footer';
import Service from '../Services/Service';
import FooterBack from '../Home/FooterBack'

import Slider from "react-slick";
import { FoodBank } from '@mui/icons-material';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';



  const Item = styled(Paper)(({ theme }) => ({
  boxShadow:'none',
  textAlign: 'center',
 

}));
  const Image = styled(Paper)(({ theme }) => ({
  boxShadow:'none',
  textAlign: 'center',
  marginLeft:'40px'

}));
  const Item3 = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  paddingTop:' 40px',
  color: '#545D7A',
  fontSize: '20px',
  textTransform: 'uppercase',
  letterSpacing: '.5rem',
  fontWeight:'200',
  boxShadow:'none',
  marginTop:'200px',
  }));
  
  const Item2 = styled(Paper)(({ theme }) => ({
textAlign: 'center',
color: '#10182F',
fontSize: '40px',
fontFamily:'zabal demo extrabold',
boxShadow:'none',
}))

  const settings = {
  infinite: true,
  slidesToShow: 8,
  swipeToSlide: true,

  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
}

function Home() {

  return (
    <>
  <div id="container"></div>

    <div className='header'>
      <div className="title-header">
            <div className='home-content'>
            Nous sommes un cabinet de conseil pluridisciplinaire basé à Agadir et opérant sur l’ensemble du territoire marocain. Notre mission est d’accompagner tout type de structure dans la transformation souhaitée avec expertise, neutralité, confidentialité, objectivité et fidélité.
            </div>
            <div>
            <HashLink to="/Contactez-Nous"  className="href-style">
                <Button sx={{background:'#000928',color:'#fff', fontWeight:'500' ,border:'1px solid none',padding :'10px 15px',borderRadius:'20px', '&:hover':{  background:'#0B7F76',color:'#fff' }}} 
                    variant="contained" >
                      contactez-nous
                </Button>
              </HashLink>
            
            </div>
        </div>
        <div className="social-header">
            <Social/>
        </div>
    
    
    </div>

  {/* Clients */ }
  {/* <div className='wrapper'>
    <div className="slider">
      <div className="slide-track">
          <div className="slide">
            <img src={img1} alt="logo"></img>
          </div>
          <div className="slide">
            <img src={img2} alt="logo"></img>
          </div>
          <div className="slide">
            <img src={img4} alt="logo"></img>
          </div>
          <div className="slide">
            <img src={img5} alt="logo"></img>
          </div>
          <div className="slide">
            <img src={img6} alt="logo"></img>
          </div>
          <div className="slide">
            <img src={img7} alt="logo"></img>
          </div>
          <div className="slide">
            <img src={img8} alt="logo"></img>
            
          </div>
          <div className="slide">
            <img src={img9} alt="logo"  className='image-slide'></img>
          </div>
          <div className="slide">
            <img src={img10} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
            <img src={img11} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
          <img src={img12} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
            <img src={img13} alt="logo"  className='image-slide'></img>
          </div>
          <div className="slide">
            <img src={img3} alt="logo"  className='image-slide'></img>
          </div>
          <div className="slide">
          <img src={img14} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
          <img src={img15} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
          <img src={img16} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
          <img src={img17} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
          <img src={img18} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
          <img src={img19} alt="logo" className='image-slide1'></img>
          </div>
          <div className="slide">
          <img src={img20} alt="logo" className='image-slide1'></img>
          </div>


      </div>
    </div>
  </div> */}

  

    <div className='wrapper'>
    <div className="slider">
      <div className="slide-track">

        <Image id='Pourquoi-nous-choisir'>
          <img src={img1} alt="logo"></img>
        </Image>
        <Image>
        <img src={img2} alt="logo"></img>

        </Image>
        <Image>
        <img src={img4} alt="logo"></img>
        </Image>
        <Image>
        <img src={img5} alt="logo"></img>
        </Image>
        <Image>
        <img src={img6} alt="logo"></img>
        </Image>
        <Image>
        <img src={img7} alt="logo"></img>
        </Image>
        {/* <Image>
        <img src={img8} alt="logo"></img>
        </Image> */}

        <Image>
        <img src={img9} alt="logo"  className='image-slide'></img>
        </Image>
        <Image>
        <img src={img10} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img11} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img12} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img13} alt="logo" className='image-slide'></img>
        </Image>

        <Image>
        <img src={img14} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img15} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img16} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img17} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img18} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img19} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img20} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img21} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img22} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img23} alt="logo" className='image-slide1'></img>
        </Image>        
        <Image>
        <img src={img24} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img25} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img26} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img27} alt="logo" className='image-slide1'></img>
        </Image>
        <Image>
        <img src={img3} alt="logo" className='image-slide'></img>
        </Image>

    </div>
    </div>
    </div>
    

      <div className="content">
        <Blog/>     
      <Services/>  
      </div>

      <div className="partenaire-back">
      <Partenaires/>
      </div>
   

      <Item3 id ='methodes'>methodes</Item3>
      <Item2 >Notre Methode de Travail</Item2> 
            
      <div className="contenttop">
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
            <img src={imgmeth} alt="logo" className='imgmeth' ></img>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}  >
            <h1 className="title-meth-top">Disoriented</h1>
            <h1 className="title-meth-top-2">no worries</h1>
            <h1 className="title-meth-top-2"><span> tfm </span> got your<span> back</span></h1>
          </Grid>
          </Grid>
      </div> 
  

      <div className='content-meth' >  
            <Methodes/>
          <FooterBack/>
        <div className='Footer-service'>
          <div className='contenttop' >
          <Footer/>
          </div>
        </div> 
      </div>
  



    </>
  )
}

export default Home