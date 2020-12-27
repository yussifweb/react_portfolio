import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from '@material-ui/icons/Build';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {RiHeartAddFill} from 'react-icons/ri';

export const menuData = [
    {icon: (<HomeIcon />), title: "Home", link: "/"},
    {icon: (<BuildIcon />), title: "Skills", link: "/skills"},    
    {icon: (<RiHeartAddFill style={{fontSize: `2rem`}} />), title: "Interests", link: "/interests"},
    {icon: (<BusinessCenterIcon />), title: "Portfolio", link: "/portfolio"},
]