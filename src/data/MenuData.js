import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from '@material-ui/icons/Build';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

export const menuData = [
    {icon: (<HomeIcon css={`color: #34d0ff;`} />), title: "Home", link: "/"},
    {icon: (<BuildIcon css={`color: #34d0ff;`} />), title: "Skills", link: "/skills"},    
    {icon: (<HomeIcon css={`color: #34d0ff;`} />), title: "Interests", link: "/interests"},
    {icon: (<BusinessCenterIcon css={`color: #34d0ff;`} />), title: "Portfolio", link: "/portfolio"},
]