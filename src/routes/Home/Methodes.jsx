import React from 'react'
import Grid from '@mui/material/Grid';
import meth1 from '../../img/methodes/01.svg'
import meth2 from '../../img/methodes/02.svg'
import meth3 from '../../img/methodes/03.svg'
import meth4 from '../../img/methodes/04.svg'
import meth5 from '../../img/methodes/05.svg'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './css/Methodes.css'

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  boxShadow:'none',
    background:'none'
}));

 function Methodes() {

  return (
 <div className='content'>
    <Box >
      <Grid container rowSpacing={5} >
        <Grid item xs={12} md={6}>
          <Item>
            <h2>Diagnostic</h2>
            <img src={meth1} alt="logo" className='methImg'></img>
             <p className='p-math'>Nous effectuons un diagnostic <br/>interne de votre entreprise</p>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
        <Item>
            <h2>Mise en oeuvre</h2>
            <img src={meth5} alt="logo" className='methImg1'></img>
             <p className='p-math1'>Nous offrons des sevices d’accompagnement <br/>pour la mise en oeuvre des recommadations</p>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
        <Item>
            <h2>Recommandations</h2>
            <img src={meth2} alt="logo" className='methImg1'></img>
             <p className='p-math1'>suivant les résultats de notre diagnostic nous<br/> vo us faisons une liste de recommandation pour <br/>subvenir aux lacunes et améliorer l’organisation.</p>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
        <Item>
            <h2>Suivi</h2>
            <img src={meth4} alt="logo" className='methImg1'></img>
             <p className='p-math1'>Dans une optique d’amélioration continue nous <br/>faisons un suivi des résultats<br/> des actions entreprises.</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </div>  
  
  

  )
}

export default Methodes