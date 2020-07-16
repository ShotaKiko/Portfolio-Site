import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { teal } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LaunchIcon from '@material-ui/icons/Launch';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import SpiderGraphModal from './spiderGraphModal';

const accent = teal[500]

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:"initial"
  },
  header:{
    fontSize:"1.2rem",
    [theme.breakpoints.up('xl')]: {
      fontSize:"1.5rem",
    },
  },
  media:{
    maxHeight:"100%"
  },
  sub:{
    fontSize:".9rem",
    [theme.breakpoints.up('xl')]: {
      fontSize:"1.2rem",
    },
  },
  cardText:{
    fontSize:".9rem",
    textAlign:"justify",
    [theme.breakpoints.up('xl')]: {
      fontSize:"1.1rem",
    },
  },
  booton:{
    fontSize:".7vw",
    fontFamily:"Roboto",
    color: accent,
    backgroundColor: "white",
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize:".6rem",
    },
    [theme.breakpoints.only('sm')]: {
      fontSize:".7rem",
    },
    [theme.breakpoints.only('md')]: {
      fontSize:".7rem",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize:".8rem",
    },
    '&:hover': {
      background: "#4ca69c",
      color:"white",
      borderColor:"white"
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
}));

export default function SpiderGraph() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper')

  const theme = useTheme()
  const fullscreenBoolean = useMediaQuery(theme.breakpoints.between('xs', 'sm'))

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType)
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        hi
    </div>
  );
}