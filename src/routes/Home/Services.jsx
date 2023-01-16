
import React, { Component } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography,Button } from '@mui/material';
import Slider from "react-slick";
import slide1 from'../../img/sliders/01.png'
import slide2 from '../../img/sliders/image02.png'
import slide3 from '../../img/sliders/image03.png'
import slide4 from '../../img/sliders/image04.png'
import slide5 from '../../img/sliders/image05.png'
import slide6 from '../../img/sliders/image06.png'
import slide7 from '../../img/sliders/image07.png'
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import './css/services.css'

export default function Services() {
  
    const navigate = useNavigate(); 
    //   const Service = () =>{ 
    //   let path = `service`; 
    //   navigate(path);
    // }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const Item = styled(Paper)(({ theme }) => ({
      textAlign: 'center',
      paddingTop:' 180px',
      color: '#545D7A',
      fontSize: '20px',
      textTransform: 'uppercase',
      letterSpacing: '.5rem',
      fontWeight:'200',
      boxShadow:'none'
      }));
      
    const Item2 = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: '#10182F',
    fontSize: '40px',
    fontFamily:'zabal demo extrabold',
    boxShadow:'none',
    }))
    
   
    return (
    <div >
    <Item >SERVICES</Item>
    <Item2 >Nos Services</Item2> 
    
    <div className="content-slide-image">
      <Grid sx={{textAlign:'center' }}>
        <Slider {...settings}>
              <Grid>
                <HashLink to="/Service/#Accompagnement"> 
                  <img src={slide1} alt="logo" className="slide"></img> 
                </HashLink>
                
              <Typography sx={{color:'#10182F', fontSize:'120%', fontWeight:'800'}} >Accompagnement</Typography>
              </Grid>
              <Grid>
                <HashLink to="/Service/#Ingénierie de formation"> 
                  <img src={slide2} alt="logo" className="slide"></img>
                </HashLink>
                <Typography sx={{color:'#10182F' , fontSize:'120%', fontWeight:'800'}}>Ingénierie de formation</Typography>
              </Grid>
              <Grid >
                  <HashLink to="/Service/#Formation"> 
                  <img src={slide3} alt="logo" className="slide"></img>
                  </HashLink>
                <Typography sx={{color:'#10182F' , fontSize:'120%', fontWeight:'800'}}>Formation</Typography>
              </Grid>
              <Grid >
                  <HashLink to="/Service/#Audit"> 
                    <img src={slide4} alt="logo" className="slide"></img>
                  </HashLink>
                <Typography sx={{color:'#10182F' ,fontSize:'120%', fontWeight:'800'}}>Audit</Typography>
              </Grid>
              <Grid >
              <HashLink to="/Service/#Diagnostic stratégique"> 
              <img src={slide5} alt="logo" className="slide"></img>
              </HashLink>

              <Typography sx={{color:'#10182F' ,fontSize:'120%', fontWeight:'800'}}>Diagnostic stratégique</Typography>
              </Grid>
              <Grid >
                
                <HashLink to="/Service/#Sourcing"> 
                <img src={slide6} alt="logo"  className="slide"></img>
                </HashLink>
              
                <Typography sx={{color:'#10182F' , fontSize:'120%', fontWeight:'800'}}>Sourcing</Typography>
              </Grid>
              <Grid >
              
                <HashLink to="/Service/#Communication digitale"> 
                  <img src={slide7} alt="logo"  className="slide"></img>
                </HashLink>
                <Typography sx={{color:'#10182F' , fontSize:'120%', fontWeight:'800'}}>Communication digitale</Typography>
              </Grid>
        </Slider>
          <HashLink to="/Service/#savoir-plus" className="href-style"> 
          <Button sx={{background:'#000928',color:'#fff',marginTop:'50px', fontWeight:'500' ,border:'1px solid none',padding :'10px 15px',borderRadius:'20px', '&:hover':{  background:'#0B7F76',color:'#fff' }}} 
                variant="contained" >
                  savoir plus
          </Button>
          </HashLink>
      </Grid>
    </div>
  
  
      </div>
    );
  }



