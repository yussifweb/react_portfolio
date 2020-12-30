import React from 'react'
import { Divider, Grid, Slide, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
  },
  grid: {
      margin: `0 auto`,
  },
  top: {
    marginTop: `5rem`,

    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  heading: {
    fontSize: `clamp(1.3rem, 6vw, 2.5rem)`,
    fontWeight: `500`,
  },
}));

const Interests = () => {
    const classes = useStyles(); 
    return (
      <>
      <Helmet>
        <title>Interests | Yussifweb</title>
        <meta name="Yussifweb" content="Interests" />
      </Helmet>

        <Grid container spacing={4} className={classes.top}>
           <Grid item xs={12} sm={8} className={classes.grid}>
            <Slide in="true" direction="down" timeout={500}>
            <Typography className={classes.heading} color="primary">INTERESTS</Typography>
            </Slide>
            <Divider />
            <Slide in="true" direction="left" timeout={800}>
            <Typography variant="body1" className={classes.paper}>Apart from being a Frontend Developer, I also aspire to broaden my knowledge in 
            web development so I'm now into backend development as well and looking to
            extend it to Mobile and Desktop applications development.</Typography>
            </Slide>
            
            <Slide in="true" direction="right" timeout={1100}>
            <Typography variant="body1" className={classes.paper}>Aside that, I spend some of my time exploring other 
                things which has partially made me also grab some good knowledge and 
                skills in Graphic Design, Photography and Video Shooting/Editing.</Typography>
            </Slide>

            <Slide in="true" direction="up" timeout={1500}>
            <Typography variant="body1" className={classes.paper}>Also since web development is dynamic i spend some of my leisure times watching 
                programming related videos and also doing research about whatever comes into mind 
                which is useful.</Typography>
            </Slide>
           </Grid>
        </Grid>
      </>
    )
}

export default Interests