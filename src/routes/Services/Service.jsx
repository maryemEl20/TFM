import * as React from 'react';
import { hexToRgb, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import icon1 from '../../img/icons/Group 172.svg'
import icon2 from '../../img/icons/Group 173.svg'
import icon3 from '../../img/icons/Group 174.svg'
import icon13 from '../../img/icons/Fichier 1icon 1.svg'
import icon4 from '../../img/icons/Group 175.svg'
import icon7 from '../../img/icons/Group 178.svg'
import icon9 from '../../img/icons/Group 180.svg'
import icon10 from '../../img/icons/Group 181.svg'
import icon11 from '../../img/icons/Group 182.svg'
import icon12 from '../../img/icons/Group 183.svg'
import icon8 from '../../img/icons/Group 288.svg'

import logos from '../../img/methodes/logos.svg'
import img1 from '../../img/services/Group 136.svg'
import img2 from '../../img/services/Group 141.svg'
import img3 from '../../img/services/0000.svg'
import img4 from '../../img/services/Group 14411.svg'
import img5 from '../../img/services/Group 130.svg'
import img6 from '../../img/illustrations/Group 129.svg'
import img7 from '../../img/services/Group 15000.svg'
import Button from '@mui/material/Button';
import {useState} from 'react';
import Partenaires from '../Home/Partenaires'
import Footer from '../Home/Footer';
import './service.css'
import Methodes from '../Home/Methodes'
import FooterBack from '../Home/FooterBack'




const Icon = styled(Paper)(({ theme }) => ({ 
  textAlign: 'center',
  boxShadow:'none',
  color:'#000',
  background:'none'

}));

const Item = styled(Paper)(({ theme }) => ({  
  textAlign: 'center',
  boxShadow:'none',
  color:'#000',
  fontSize:'40px',

}));

const Item2 = styled(Paper)(({ theme }) => ({  
  textAlign: 'center',
  boxShadow:'none',
  fontSize:'22px',
  color:'#000',
  height:'100px'

}));



const Item5 = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  boxShadow:'none',
  marginTop:'0px',
  background:'none'
}));

const Item6 = styled(Paper)(({ theme }) => ({
  boxShadow:'none',
  marginTop:'50px',
  background:'none',
}));


const Item3 = styled(Paper)(({ theme }) => ({  
  boxShadow:'none',
  fontSize:'15px',
  color:'#000',
  height:'100%',
  background:'rgba(217, 217, 217, 0.5)',
}));

const Item4 = styled(Paper)(({ theme }) => ({  
  boxShadow:'none',
  fontSize:'15px',
  color:'#000',
  height:'250px',
  background:'rgba(217, 217, 217, 0.5)',
}));

const Clickbtn1 = styled(Paper)(({ theme }) => ({  

  boxShadow:'none',
  fontSize:'15px',
  color:'#000',
  height:'300px'

}));


// const Text1 = () => (
//       <div className='show-content'>
// Ordonnacement, pilotage et coordination : 
// Un pilotage de projet pr??cis est essentiel pour en suivre l???avancement et garantir sa r??ussite. Fort des son exp??rience dans le domaine technique et financier, 
// TFM CONSULTING peut assurer pour vous le suivi de la r??alisation de vos projets sur plusieurs volets et assurer ainsi une visibilt?? globale de l???avancement de vos projets.
//       </div>  
// )

// const Text2 = () => (
//   <div className='show-content2'>
//  Assistance au maitre d???ouvrage :     
// savoir faire technique et financier, Relationnel, facilit?? de communication, force de conviction, Cr??ativit?? et sens de l???Initiative ; telles sont les qualit??s qui qualifient
//  TFm consulting.
//   </div>  
// )

// const Text3 = () => (
//   <div className='show-content2'>
//  Etude de faisabilite des projets : 
// proc??der ?? une ??tude de faisabilit?? permet d???avoir plus de chances de prendre les bonnes d??cisions pour aboutir au succ??s de votre projet. Forte des ann??es d??????exp??rience 
// de son ??quipe dans divers secteurs d???activit?? ; tfm consulting cerne tous les aspects de votre projet industriel aussi bien techniques que financiers. .
//   </div>  
// )

// const Text4 = () => (
//   <div className='show-content2'>
//  Elaboration de business PLAN :
// Avant le r??alisation de vos projets Tfm consulting peut ??laborer pour vous le business plan vous permettant de d??finir la strat??gie et le  plan d'actions de votre futur projet.
//   </div>  
// )

// const Text5 = () => (
//   <div className='show-content2'>
//     Pr??paration des dossiers de remboursement et de subvention :
//     OFPpt : dans le cadre de l???encouragement des entreprises dans l???utilisation de la formation comme levier de croissance et de   
//     l'OFPPT ambitionne de favoriser l???acc??s des PME/PMI, voire des TPE en tant que composantes majoritaires du tissu productif national, ?? toutes les formations permettant
//     l'acquisition ou l'am??lioration des comp??tences professionnelles. Une action qui r??pond aux attentes fortes des entreprises, leur permettant d???utiliser la formation
//     comme levier de croissance de leurs ressources humaines, et ainsi favoriser leurs comp??titivit??s.
//   </div>  
// )
// // *******************************
//   const Text6 = () => (
//     <div className='show-content'>
//  Toute entreprise du secteur tertiaire adh??rente au GIAC-Tertiaire b??n??ficie d???un financement pour la r??alisation d???une ing??nierie de formation.
//   <br/>
//   Les ing??nieries de formation peuvent faire l???objet d???un financement tous les ans.
//   </div>  
//   )

//   const Text7 = () => (
//     <div className='show-content2'>
//  Le taux de financement est ??gal ?? 70% du co??t total hors taxe de l???action d???expertise visant la d??finition d???une strat??gie de d??veloppement.
//   </div>  
//   )

//   const Text8 = () => (
//     <div className='show-content2'>
//  Le maximum fix?? au co??t d???une ing??nierie de formation est de 100.000 DH (hors taxes).
//   Si l???action d???ing??nierie d??coule d???un diagnostic strat??gique financ??e par le GIAC-Tertiaire, son remboursement est effectu?? ?? 80% du co??t de l???action, au lieu de 70%, appliqu?? en absence de ce recours ?? un financement GIAC.(tfm vous aidez a remplir le dossier de remboursement...)
//   </div>  
//   )

//   // *******************************
//   const Text9 = () => (
//     <div className='show-content'>
//  En r??ponse ?? une forte attente des entreprises - notamment des TPME - en mati??re de soutien ?? la formation en cours d???emploi, le Gouvernement a mis en place un dispositif d'assistance financi??re ?? la formation, d??sign??s par les Groupements interprofessionnels d???aide au conseil (GIAC) et les Contrats sp??ciaux de formation (CSF).
//   </div>  
//   )

//   // *******************************
//   const Text10 = () => (
//     <div className='show-content2'>
//  Toute entreprise du secteur tertiaire adh??rente au GIAC-Tertiaire b??n??ficie d???un financement pour la r??alisation d???une ing??nierie de formation.
//   </div>  
//   )

//   const Text11 = () => (
//     <div className='show-content2'>
//  Les ing??nieries de formation peuvent faire l???objet d???un financement tous les ans.
//   </div>  
//   )
  
//   const Text12 = () => (
//     <div className='show-content2'>
// Le taux de financement est ??gal ?? 70% du co??t total hors taxe de l???action d???expertise visant la d??finition d???une strat??gie de d??veloppement.
//   </div>  
//   )
  
//   const Text13 = () => (
//     <div className='show-content2'>
// Le maximum fix?? au co??t d???une ing??nierie de formation est de 100.000 DH (hors taxes).
// Si l???action d???ing??nierie d??coule d???un diagnostic strat??gique financ??e par le GIAC-Tertiaire, son remboursement est effectu?? ?? 80% du co??t de l???action, au lieu de 70%, appliqu?? en absence de ce recours ?? un financement GIAC.(tfm vous aidez a remplir le dossier de remboursement...)
//   </div>  
//   )

function Service() {

//   const [showResults1, setShowResults1] = React.useState(false)
//   const [showResults2, setShowResults2] = React.useState(false)
//   const [showResults3, setShowResults3] = React.useState(false)
//   const [showResults4, setShowResults4] = React.useState(false)
//   const [showResults5, setShowResults5] = React.useState(false)
//   const onClick1= () => setShowResults1(true)
//   const onClick2 = () => setShowResults2(true)
//   const onClick3 = () => setShowResults3(true)
//   const onClick4 = () => setShowResults4(true)
//   const onClick5 = () => setShowResults5(true)


// // ************************************************
//   const [showResults11, setShowResults11] = React.useState(false)
//   const [showResults12, setShowResults12] = React.useState(false)
//   const [showResults13, setShowResults13] = React.useState(false)

//   const onClick11= () => setShowResults11(true)
//   const onClick12 = () => setShowResults12(true)
//   const onClick13 = () => setShowResults13(true)

// // ************************************************
// const [showResults21, setShowResults21] = React.useState(false)
// const onClick21= () => setShowResults21(true)

// // ************************************************
// const [showResults22, setShowResults22] = React.useState(false)
// const [showResults23, setShowResults23] = React.useState(false)
// const [showResults24, setShowResults24] = React.useState(false)
// const [showResults25, setShowResults25] = React.useState(false)
// const onClick22 = () => setShowResults22(true)
// const onClick23 = () => setShowResults23(true)
// const onClick24 = () => setShowResults24(true)
// const onClick25 = () => setShowResults25(true)

  return (
    <>
    <div>
    <Box  id='savoir-plus' sx={{ flexGrow: 1 , marginTop:'150px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} >
          <Item id='Accompagnement' >Great services for great people</Item>
        </Grid>

      </Grid>
    </Box>

    <Box>
      <Grid container spacing={2} sx={{ background:'rgba(217, 217, 217, 0.2)'}}>
      <Grid item xs={12} md={6}>
      <Item5 >
      <img src={img1} alt="logo" width='35%' ></img>
      </Item5>
      </Grid>

      <Grid item xs={12} md={6}>
      <Item6 >
      <h1 className='title-service'>Accompagnement</h1>
      <p className='p-blog'>
      <p className='p-ul-li'>Ordonnancement, Pilotage et coordination</p>
      <p className='p-ul-li'>Maitrise D???ouvrage D??l??gu??e</p>
      <p className='p-ul-li'>Etudes De Projets </p>
      <p className='p-ul-li'>Business plan</p>
      <p  id='Ing??nierie de formation'  className='p-ul-li'>Dossier De Demande De Subvention/remboursement</p>
      <br/>
      </p>
      </Item6>
      </Grid>
      </Grid>
    </Box>

    <Box>
      <Grid container spacing={2} sx={{ background:'rgba(217, 217, 217, 0.2)' ,marginTop:'90px'}}>
      <Grid item xs={6} md={6}>
      <Item5 >
      <h1 className='title-service'>Ing??nierie de formation</h1>
      <p className='p-blog'>
      <p className='p-ul-li'>D??tection des besoins en formation</p>
      <p id='Audit'  className='p-ul-li'>Plan de formation</p>
      <br/>
      </p>
      </Item5>
      </Grid>
      <Grid item xs={6} md={6}>    
      <img src={img2} alt="logo"  width='35%' ></img>    
      </Grid>
      </Grid>
    </Box>

    <Box>
      <Grid container spacing={2} sx={{ background:'rgba(217, 217, 217, 0.2)' ,marginTop:'90px'}}>
      <Grid item xs={12} md={6}>
      <Item5 >
      <img src={img4} alt="logo" width='35%' ></img>
      </Item5>
      </Grid>

      <Grid item xs={12} md={6}>
      <Item6 >
      <h1 className='title-service'>audit</h1>
      <ul className='ul-service'>
      <Button sx={{ background:'none','&:hover':{background:'none'}}}>
      <li className='btn-show-item'>Audit Maintenance</li>
      </Button> 
      <Button sx={{ background:'none','&:hover':{background:'none'}}}>
      <li className='btn-show-item1'>Audit Financier</li>
      </Button> 
      <br/>

      <Button  sx={{ background:'none','&:hover':{background:'none',color:'#fff'}}}>
      <li className='btn-show-item'>Audit ??l??ctricit??</li>
      </Button> 
      <Button  sx={{ background:'none','&:hover':{background:'none',color:'#fff'}}}>
      <li className='btn-show-item1'>Audit Energ??tique</li>
      </Button> 

      <br/>
      <Button sx={{ background:'none','&:hover':{background:'none',color:'#fff'}}}>
      <li className='btn-show-item'>Audit M??canique</li>      
      </Button> 
      <Button  sx={{ background:'none','&:hover':{background:'none',color:'#fff'}}}>
      <li className='btn-show-item1'>Audit Social</li>
      </Button> 
      <br/>

      <Button  sx={{ background:'none','&:hover':{background:'none',color:'#fff'}}}>
      <li className='btn-show-item'>Audit S??curit??</li>
      </Button> 

      <Button id="Diagnostic strat??gique" sx={{ background:'none','&:hover':{background:'none',color:'#fff'}}}>
      <li  className='btn-show-item1'  id='Diagnostic strat??gique' >. . .</li>
      </Button> 
      <br/>

      </ul>
      </Item6>
      </Grid>
      </Grid>
    </Box>

    <Box>
      <Grid container spacing={2} sx={{ background:'rgba(217, 217, 217, 0.2)' ,marginTop:'90px'}}>
      <Grid item xs={6} md={6}>
      <Item5 >
      <h1 className='title-service'>Diagnostic strat??gique</h1>
      <p className='p-blog'>
      <p className='p-ul-li'>Analyse Fonctionnelle</p>
      <p className='p-ul-li'>Analyse Organisationnelle</p>
      <p className='p-ul-li'>Analyse Financi??re</p>
      <p id='Sourcing' className='p-ul-li'>Diagnostic technique</p>
      <br/>
      </p>
      </Item5>
      </Grid>
      <Grid item xs={6} md={6}>
      <Item6>
      <img src={img5} alt="logo"  width='40%'></img>
      </Item6>
      </Grid>

    </Grid>
    </Box>

     <Box>
      <Grid container spacing={2} sx={{ background:'rgba(217, 217, 217, 0.2)' ,marginTop:'150px'}}>
        <Grid item xs={12} md={6}>
          <Item5 >
          <img src={img6} alt="logo"  width='40%'></img>
          </Item5>
        </Grid>

        <Grid item xs={12} md={6}>
          <Item6 >
          <h1 className='title-service'>Sourcing</h1>
            <p className='p-blog'>
            <p id='Communication digitale' className='p-ul-li'>
              Nous assistons nos clients dans le recrutement des meilleurs profils en ad??quation avec 
                les besoins de l???entreprise.</p>
            <br/>
            </p>
          </Item6>
        </Grid>
      </Grid>
     </Box>

     <Box>
      <Grid container spacing={2} sx={{ background:'rgba(217, 217, 217, 0.2)' ,marginTop:'90px'}}>
        <Grid item xs={6} md={6}>
          <Item5 >
          <h1 className='title-service'>Communication digitale</h1>
            <p className='p-blog'>
            <p className='p-ul-li'>Identit?? visuelle</p>
            <p className='p-ul-li'>Marketing Digital</p>
            <p className='p-ul-li'>Analyse Financi??re</p>
            <p id='Formation' className='p-ul-li'>Strat??gie de Marque</p>
            <br/>
            </p>
          </Item5>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item6>
          <img src={img7} alt="logo"  width='40%'></img>
          </Item6>
        </Grid>

      </Grid>
     </Box>
     
    <div className="Formation-back">
      <div className="contenttop">
      <h1 className='title-service'>Formation </h1>
      <Grid container rowSpacing={2} sx={{marginTop:'px'}}>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon11} alt="logo"  width='20%'></img>
              <p>Soft Skills</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon1} alt="logo"  width='18%'></img>
              <p>Maintenance</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon7} alt="logo"  width='20%'></img>
              <p>Management & RH</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon3} alt="logo"  width='20%'></img>
              <p>Comp??titivit?? et Performance</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon2} alt="logo"  width='20%'></img>
              <p>El??ctricit?? & El??ctronique</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon12} alt="logo"  width='20%'></img>
              <p>Finance</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon13} alt="logo"  width='18%'></img>
              <p>Gestion de stress</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon8} alt="logo"  width='12%'></img>
              <p style={{marginTop:'30px'}}>QHSE</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
            <Icon>
              <img src={icon9} alt="logo"  width='20%'></img>
              <p>Audit & Certification</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon10} alt="logo"  width='20%'></img>
              <p>Formation Sur Mesure</p>
              </Icon>
          </Grid>
          <Grid item xs={6} md={4} >
              <Icon>
              <img src={icon4} alt="logo"  width='20%'></img>
              <p>Nouvelles-Tech & Design Thinking</p>
              </Icon>
          </Grid>
      </Grid>
      </div>
    </div>
 
    <div className='content' >  
     <FooterBack/>
      <div>  
      <h1 className='title-partenaire-page'>Nos Partenaires</h1>
      <img src={logos} alt="logo" className='partenImg'></img>
      </div>
  </div> 

  <div className='Footer-service'>
    <div className='contenttop' >
      <Footer/>
    </div>
    </div> 
    </div> 
    </>
  )
}

export default Service