import React from 'react'
import ReactPlayer from 'react-player'
import { Helmet } from 'react-helmet'
import { Grid, Slide, Tooltip, Typography, Divider } from '@material-ui/core';
import { images, webs, videos } from '../data/portfolio'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
  },
    
  grid: {
      marginTop: `0.5rem`,
      marginBottom: `1rem`,
  },
  img: {
      width: `100%`,
      height: `100%`,
      borderRadius: `20px`,      
  },
    heading: {
    fontSize: `clamp(1.3rem, 6vw, 2.5rem)`,
    fontWeight: `500`,
    color: `#4d4c4c`,
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

          <Slide in="true" direction="down" timeout={500}>
          <Typography className={classes.heading}>GRAPHIC DESIGN</Typography>
          </Slide>
          <Divider />

        <Grid container spacing={2} className={classes.grid} style={{ marginBottom: `4rem` }}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={3} className={classes.grid} key={index}>
          <Tooltip title={image.alt} enterDelay={500} leaveDelay={200}>       
          <img className={classes.img} alt={image.alt} src={image.src} />
          </Tooltip>
          </Grid>
        ))}
      </Grid>


        <Slide in="true" direction="down" timeout={500}>
          <Typography className={classes.heading}>VIDEOS SHOT/EDITED</Typography>
        </Slide>
        <Divider />

        <Grid container spacing={4} className={classes.grid} style={{ marginBottom: `4rem` }}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} spacing={2} key={index}>
          <Tooltip title={video.alt} enterDelay={500} leaveDelay={200}>
          <ReactPlayer width="100%" url={video.link} />
          </Tooltip>
          </Grid>
        ))}
      </Grid>

        <Slide in="true" direction="down" timeout={500}>
        <Typography className={classes.heading}>WEBSITES</Typography>
        </Slide>
        <Divider />

      <Grid container spacing={2} className={classes.grid}>
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