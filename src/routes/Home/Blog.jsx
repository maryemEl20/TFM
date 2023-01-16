import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import blog from '../../img/somme.svg'
import { Typography,Button } from '@mui/material';
import './css/blog.css'
import { HashLink } from 'react-router-hash-link';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  boxShadow:'none',
  marginTop:'0px'
}));

const Item2 = styled(Paper)(({ theme }) => ({
  boxShadow:'none',
  marginTop:'50px'
}));
export default function Blog() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item >
          <img src={blog} alt="logo" className='img-blog' ></img>
          </Item>
        </Grid>

        <Grid item xs={12} md={6}>
            <Item2>
              <h1 className='title-blog'>Pourquoi nous choisir</h1>
              <p className='p-blog'>
                <p  >Equipe pluridisciplinaire expérimentée dans plusieurs secteurs d’activités .</p>
                <p style={{marginTop:'8px'}}>Maitrise et utilisation des nouvelles technologies.</p>
                <p style={{marginTop:'8px'}}> Maitrise des procedures administratives.</p>
                <p style={{marginTop:'8px'}}> Respect des délaais .</p>
              <br/>
              </p>
            </Item2>
            <HashLink to="/Contactez-Nous"  className="href-style">
              <Button  variant="text" sx={{ color: '#10182F' , fontWeight:'900', '&:hover':{  background:'none',color:'#0085FF' }}} >contactez-nous {'>>'} </Button>
            </HashLink>
        </Grid>
      </Grid>
    </Box>
  );
}
