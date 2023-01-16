import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import logo from '../../img/Logo.svg'
import './css/contact.css'
import Image from '../../img/background/map.jpeg'; // Import using relative path
import Footer from './Footer';
function  Contact() {

    const Item = styled(Paper)(({ theme }) => ({
    boxShadow:'none',
    background:'none',
    
    }));
    const styles = {
        paperContainer: {
            height: 650,
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
           
        }
    };
    
  return (
    <div>
    <div className='content-rendez' >  
    <Grid container spacing={5}sx={{background:'#fff',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} >
        <Grid item xs={12} md={6} sx={{background:'#fff',paddingLeft:'0px'}} >
            <img src={logo} alt="logo" width='70px' ></img>
            <div className="title-contact">Contactez-nous</div>  
            <div className='context-contact'>
                <form>
                <div className="input-row">
                    <div className="input-group-contact">
                        <label id='contact'>Nom et Prénom</label>
                        <input type="text"  />
                    </div>
                </div>  
                <div className="input-row">
                    <div className="input-group-contact">
                        <label>Email</label>
                        <input type="email"  />
                    </div>
                </div>  
                <div className="input-row">
                    <div className="input-group-contact">
                        <label>Numéro de telephone</label>
                        <input type="text"  />
                    </div>  
                </div> 
                    <button type='submit' className='btnSend'>
                        Envoyer
                    </button>
                </form>                  
            </div>
        </Grid>
       <Grid xs={12} md={6} style={styles.paperContainer}>  </Grid>
    </Grid>
     </div>
      <div className='Footer-service'>
        <div className='contenttop' >
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Contact