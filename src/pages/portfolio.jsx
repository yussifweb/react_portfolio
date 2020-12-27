import React from 'react'
import { Helmet } from 'react-helmet'
import { Divider, Grid, Typography, Container, Tooltip, IconButton, Avatar, Slide, Zoom, Grow } from '@material-ui/core';
import { images, webs, videos } from '../data/portfolio'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
  },
    paperNm: {
    // fontFamily: font,
    textTransform: 'uppercase',
    fontWeight: `700`,
    fontSize: `6rem`,
    color: `#0777b8`,

    [theme.breakpoints.down('sm')]: {
      fontSize: `4rem`,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: `3.5rem`,
    },

  },
    paperWk: {
    // fontFamily: font,
    textTransform: 'uppercase',
    fontSize: `2.5rem`,
    color: `#585656`,
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

const Portfolio = () => {
      const classes = useStyles();  

    return (
        <>
       <Helmet>
        <title>Portfolio | Yussifweb</title>
        <meta name="Yussifweb" content="Works by Yusif Issah NetKid Gh, Awaga, Yussifweb" />
      </Helmet>

      <Grid container spacing={2}>
        <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={3} className={classes.grid} key={index}>
          <Tooltip title={image.alt} enterDelay={500} leaveDelay={200}>       
          <img className={classes.img} alt={image.alt} src={image.src} />
          </Tooltip>
          </Grid>
        ))}
      </Grid>

        <Grid container spacing={2}>
        {videos.map((index, video) => (
          <Grid item xs={12} sm={6} className={classes.grid} key={index}>

          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        {webs.map((web, index) => (
          <Grid item xs={12} sm={6} className={classes.grid} key={index}>
          <Tooltip title={web.alt} enterDelay={500} leaveDelay={200}>
          <a href={web.link} target="_blank" rel="noopener noreferrer">     
          <img className={classes.img} alt={web.alt} src={web.src} target="_blank"/></a> 
          </Tooltip>
          </Grid>
        ))}
      </Grid>


      </Grid>
            
        </>
    )
}

export default Portfolio