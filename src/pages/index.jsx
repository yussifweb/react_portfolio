import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography, Container, Tooltip, IconButton, Avatar, Slide, Zoom, Grow } from '@material-ui/core';
import image from '../assets/images/hero.png'
import { online } from '../data/onlineData'
import '../layout.css'
import { Helmet } from 'react-helmet';
// import styled, { keyframes } from 'styled-components'

const font = "'Saira Extra Condensed', sans-serif"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
  },
    paperNm: {
    fontFamily: font,
    textTransform: 'uppercase',
    fontWeight: `700`,
    fontSize: `6rem`,

    [theme.breakpoints.down('sm')]: {
      fontSize: `4rem`,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: `3.5rem`,
    },

  },
    paperWk: {
    fontFamily: font,
    textTransform: 'uppercase',
    fontSize: `2.5rem`,
    marginTop: `-2rem`,
    paddingLeft: `1rem`,

    [theme.breakpoints.down('md')]: {
      paddingLeft: `0.5rem`,
      marginTop: `-0.5rem`,
      fontSize: `1rem`,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: `0.5rem`,
      marginTop: `-0.5rem`,
      fontSize: `1rem`,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: `0.5rem`,
      marginTop: `-1rem`,
      fontSize: `1.3rem`,
    },
  },
  grid: {
      marginBottom: `1rem`,
  },
  img: {
      width: `100%`,
      height: `100%`,
      borderRadius: `20px`,      
  },
  tooltip: {
    height: `3.5rem`,
    width: `3.5rem`,
    backgroundColor: `#343a40`,
    color: `#fff`,
    margin: `0.5rem 1rem 0.5rem 0`,

    '&:hover': {
      backgroundColor: `#ff006a`,
      color: `#6bfff0`,
    },    
  },
}));


const Home = () => { 
    const classes = useStyles();  
    return (  
      <>
      <Helmet>
        <title>Home | Yussifweb</title>
        <meta name="Yussifweb" content="Homepage, Contact" />
      </Helmet>
        
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={7}>

        <Grid item xs={12} sm={12} className={classes.grid}>
          <Slide in="true" direction="left" timeout={500}>
          <Typography variant="h2" className={classes.paperNm} color="secondary"><span style={{ color: `#0777b8` }}>Yussif</span> Issah</Typography>
          </Slide>
          <Slide in="true" direction="right" timeout={1000}>
          <Typography variant="subtitle1" className={classes.paperWk} color="secondary">Frontend Developer, <span style={{ color: `#0777b8` }}>DevCareers</span></Typography>
          </Slide>
        </Grid>

        <Divider />

        <Grid item xs={12} sm={12} style={{ marginTop: `1rem` }}>
          <Slide in="true" direction="up" timeout={1000}>
          <Typography className={classes.paper}>I am a self motivated, result oriented, respectful and responsible 
            gentleman. I derive most of my motivation from myself and few
             from other people because I am the hero of my own story.</Typography>
            </Slide>
            <Zoom in="true" timeout={1300}>
              <Typography className={classes.paper}>I love to use my free period to play music or watch movies. 
            I do love to be alone with my thoughts but that doesn't mean 
            I'm an introvert, NOPE I'm actually a friendly guy and really like 
            hanging out with my friends.</Typography>
            </Zoom>

            <Slide element in="true" direction="down" timeout={1600}>
              <Typography className={classes.paper}>I love to socialize and everyone is welcome
             to my inbox for bussiness purposes or chit chat. Thanks for your time and enjoy 
            your amazing tour on this site.</Typography>
            </Slide>

        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: `5rem` }} className={classes.paper}>
          {online.map((on, index) => (  
            <Grow in="true" style={{ transformOrigin: '0 0 0' }} timeout= {5000} >                
            <Tooltip key={index} title={on.title} className={classes.tooltip}> 
            <IconButton href={on.url} target="_blank" aria-label={on.label}>
                {on.icon}
            </IconButton>
            </Tooltip>
            </Grow>           
          ))}
        </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <Container maxWidth="sm">
            <Slide in="true" direction="down" timeout={1600}>      
            <Avatar className={classes.img} alt="Yussif Issah" src={image} />
            </Slide> 
          </Container>         
        </Grid>

      </Grid>
      </>
    )
}

export default Home

// const Popout = keyframes`
//  0% { height: 1rem; width: 1rem; }
//  11% { height: 1.5rem; width: 1.5rem; opacity: 1 }
//  22% { height: 2.5rem; width: 2.5rem; opacity: 0.3; }
//  33% { height: 3.5rem; width: 3.5rem; opacity: 0.6; }
//  44% { height: 4.5rem; width: 4.5rem; opacity: 0.3; }
//  55% { height: 5.5rem; width: 3.5rem; opacity: 0.6; }
//  66% { height: 5rem; width: 5rem; }
//  77% { height: 4.5; width: 4.5; opacity: 1 }
//  88% { height: 4rem; width: 4rem; opacity: 0.3; }
//  100% { height: 3.5rem; width: 3.5rem; opacity: 0.6; }
// `
// const Tool = styled(Tooltip)`
//   height: 3.5rem;
//   width: 3.5rem;
//   background: #343a40;
//   color: #fff;
//   margin: 0.5rem 1rem 0.5rem 0;
//   transition-timing-function: ease-in;
//   transition: 3s;
//   transform: translateY(100%);
//   `
