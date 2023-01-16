import React, { Component } from 'react';  
import DatePicker from 'react-datepicker';   
import "react-datepicker/dist/react-datepicker.css";  
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import logo from '../../img/Logo.svg'
import './css/contact.css'
import Footer from './Footer';



export default function  RendezVous () { 
  
  const [date, setDate] = React.useState(null);

  const styles = {
    paperContainer: {
        height: 650,
        backgroundImage: `url(${"https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_960_720.jpg"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
    }
};
  
  return (
    <div>
    <div className='content-rendez' >  
    <Grid container spacing={5}sx={{background:'#fff',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} >
          <Grid item xs={12} md={6} >
          <img src={logo} alt="logo" width='70px' ></img>
          <div className="title-contact">Rendez-Vous</div>
          <div className='context-contact'>
          <form>
          <div className="input-row">
              <div className="input-group">
                  <label>Entreprise</label>
                  <input type="text"  />
              </div>
              <div className="input-group">
                  <label>Type de Service</label>
                  <input type="text"  />
              </div>
          </div>  
    
          <div className="input-row">
              <div className="input-group">
                  <label>Nom et Prénom</label>
                  <input type="email"  />
              </div>
              <div className="input-group">
                  <label>Numéro de Telephone</label>
                  <input type="text" />
              </div>
          </div>  
    
          <div className="input-row">
              <div className="input-group">
                  <label>Email</label>
                  <input type="email"  />
              </div>
              <div className="input-group">
                  <label>Horaires</label>
                  <input type="text" />
              </div>
          </div> 
    
     <div className="input-row">
          {/* ----------------------Date */}
          <div className="input-group">
              <label>Ville</label>
              <input type="text" />
          </div>
          <div className="input-group">
            <DatePicker
                className='date'
                placeholderText="Date"
                selected={date}
                onChange={date => setDate(date)}
            />
          </div>     
     </div>  
            <div className="input-group">
                <label> Comment </label>
                <input type="text" />
            </div>
            <button type='submit' className='btnSend'>
                Envoyer
            </button>
        </form>                
          </div>
          
          <div className='adresse' id='contact'>Adresse : NR 8 Rue Nissrine Cité Riad Salam - Agadir</div>
          </Grid>

          <Grid xs={12} md={6} style={styles.paperContainer} > 
          <div className="text-content"> 
          <img src={logo} alt="logo" width='70px'></img><br/>
             <p>LE PLAISIR DE PARTAGER LA CONNAISSANCE</p>
          </div>
          </Grid>

    </Grid>
     </div>
      
      <div className='Footer-service'>
        <div className='contenttop' >
        <Footer/>
        </div>
      </div>
      
      </div>

 );
}
  
