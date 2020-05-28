import React from 'react';
import { useState } from 'react'
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
import SonicLambdogModal from './sonicLambdogModal';

import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    height:"100%"
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

export default function Sonic() {
  const classes = useStyles();

  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

  
  const theme = useTheme()
  const fullscreenBoolean = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Card className={classes.root}>
        <SonicLambdogModal open={open} scroll={scroll} fullscreen={fullscreenBoolean} onClose={handleClose} />
      <CardActionArea onClick={handleClickOpen('body')}>
        <CardMedia className={classes.media}
          component="img"
          alt="sonicthelambdog"
          image="https://imagehost.imageupload.net/2020/05/16/sonic-lambdog.md.png"
          title="Sonic the Lambdog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
          Sonic the Lambdog
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>
              Python | Django | React 
          </Typography>
          
          <Typography variant="body2" component="p" className={classes.cardText}>
            Sonic the Lambdog features a custom room generation algorithm. Users
            can sign up and attempt to traverse through the 100+ room labyrinth while viewing other players
            in the same room.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="cardBootons">
        <Button className={classes.booton}  size="small" variant="contained" href="https://github.com/Sonic-BW"
          target="_blank" rel="noopener noreferrer" >
          <GitHubIcon className="githubIcon"/> <span style={{visibility:"hidden"}}>i</span>
              Github
        </Button>

        
        <Button 
          className={classes.booton} 
          size="small" 
          variant="contained" 
          onClick={handleClickOpen('body')}
        >
            <LaunchIcon />
            Learn More <span style={{visibility:"hidden"}}>i</span>
        </Button>

        <Button className={classes.booton}  size="small" variant="contained" 
          href="https://zealous-poincare-b92bd3.netlify.com" target="mynewtab"rel="noopener noreferrer">
          <LaptopMacIcon /> <span style={{visibility:"hidden"}}>ii</span>
              Visit Site
        </Button>
        </div>
      </CardActions>
    </Card>
  );
}