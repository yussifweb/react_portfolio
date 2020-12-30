import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography, Tooltip, IconButton, ListItem, ListItemAvatar, Avatar, ListItemText, List } from '@material-ui/core';
import { tools, skills } from '../data/skills'
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
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
    height: `5.5rem`,
    width: `5.5rem`,
    color: `darkgrey`,
    margin: `0.5rem 1rem 0.5rem 0`,
    fontSize: `3.5rem`,
    fontWeight: `500`,

    '&:hover': {
      backgroundColor: `#464344`,
      color: `#6bfff0`,
    },
    
    [theme.breakpoints.down('xs')]: {
    height: `5rem`,
    width: `5rem`,
    color: `darkgrey`,
    margin: `0.5rem 0.5rem 0.5rem 0`,
    fontSize: `3rem`,
    },

  },
  heading: {
    fontSize: `clamp(1.3rem, 6vw, 2.5rem)`,
    fontWeight: `500`,
  },
  // shape: {
  //   width: `10rem`,
  //   height: `10rem`,
  //   border: `3px solid black`,
  //   borderRadius: `150px`,
  //   position: 'absolute',
  //   top: `350px`,
  //   bottom: `0`,
  //   right: `150px`,
  //   opacity: `0.5`,
  //   zIndex: `10`,
  // },
}));

const Skills = () => { 
    const classes = useStyles();  
    return ( 
      <>
      <Helmet>
        <title>Skills | Yussifweb</title>
        <meta name="Yussifweb" content="Skills, Tools and Programming Languages, Yusif Issah, NetKid Gh, Awaga, Yussifweb" />
      </Helmet>
     
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} className={classes.paper} gutterBottom>
          <Typography className={classes.heading} color="primary">PROGRAMMING LANGUAGES & TOOLS</Typography>
          <Divider />
          
          {tools.map((tool, index) => (
            <Tooltip key={index} title={tool.title} className={classes.tooltip}> 
            <IconButton aria-label={tool.label} className={classes.tooltip}>
                {tool.icon}
            </IconButton>
            </Tooltip>
          ))}
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <Typography className={classes.heading} color="primary">RELEVANT SKILLS</Typography> 
           <Divider />         
              <List>
                {skills.map((skill, index) => (
                  <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>{skill.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={skill.text} />
                </ListItem>
                ))}
            </List>
        </Grid>
        </Grid>

        {/* <div className={classes.shape}></div> */}
        </>
    )
}

export default Skills