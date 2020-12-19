import React, { useState } from 'react';
import { Avatar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItemIcon, ListItem, ListItemText, Toolbar, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import dp from '../assets/images/ice.png'
import {menuData} from '../data/MenuData'
import Home from '../pages';
import Skills from '../pages/skills';
import Interests from '../pages/interests';
import Portfolio from '../pages/portfolio';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  img: {
      width: `100%`,
      height: `100%`,
      margin: `20px 0 0 0`,
  },
  center: {
      textAlign: `center`,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',

    '&:hover': {
      backgroundColor: `#666465`,
      color: `#6bfff0`,
    },    
  },
  active: {
    backgroundColor: `#b3b2b2`,
    color: `#ff0000616`,
  },
}));

const Layout = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ marginTop: `1rem` }}>
      <Container maxWidth="sm" style={{ margin: `4rem 0 3rem 0` }}>
        <Avatar variant="rounded" alt="Yussif Issah" src={dp} className={classes.img}/>
      </Container>
      <Divider />
      <List className={classes.content}>
        {menuData.map((item, index) => (          
          <ListItem component={NavLink} className={classes.link} exact to={item.link} activeClassName={classes.active} key={index} button variant="h4">
           <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />                      
          </ListItem>           
        ))}
      </List>

      <Divider />
      <footer style={{ marginTop: `1rem`, textAlign: 'center' }}>
          © {new Date().getFullYear()} Made with <span style={{color:'#ff0000', fontSize: `1.2rem`}}>&#9829;</span> by
          {` `}
          <a href="https://twitter.com/yussifweb" target="_blank" rel="noreferrer">Yussifweb</a>
        </footer>
    </div>

  );

const container = window !== undefined ? () => window().document.body : undefined;
    return (
      <>
      <Router>
        <Toolbar className={classes.appBar}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>

    <div className={classes.root}>
      <CssBaseline />         
      <nav className={classes.drawer} aria-label="menu">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer container={container} variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen} onClick={handleDrawerToggle} classes={{ paper: classes.drawerPaper, }}
            ModalProps={{ keepMounted: false, }} >{drawer}</Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper, }} variant="permanent" open >{drawer}</Drawer>
        </Hidden>
      </nav>

      <Switch>
      <main className={classes.content}>      
      <Route path="/" exact component={Home} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/interests" exact component={Interests} />
      <Route path="/portfolio" exact component={Portfolio} /> 
      </main>
      </Switch>
                
    </div>
    </Router>
    </>
    )
};

export default Layout