import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "devicon"

import { teal } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import UIProjectModal from './uiProjectModal';
import LaunchIcon from '@material-ui/icons/Launch';

import useMediaQuery from '@material-ui/core/useMediaQuery';


const accent = teal[500]

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:"initial",
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
    // height:"35px",
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

export default function UIProject() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const theme = useTheme()
  const fullscreenBoolean = useMediaQuery(theme.breakpoints.between('xs','sm')) 

  const handleClickOpen = (scrollType) => ()  => {
    setOpen(true);
    setScroll(scrollType)
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClickOpen('body')}>
        <CardMedia className={classes.media}
          component="img"
          alt="sonicthelambdog"
          image="https://imagehost.imageupload.net/2020/05/16/ui-project.md.png"
          title="User Interface Project "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
            User Interface Project
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>
              HTML | CSS | Javascript 
          </Typography>
        
          <Typography variant="body2" component="p" className={classes.cardText}>
            A beginner project focused on implementing a clean user interface and user experience 
            featuring responsive design for desktop, tablet and mobile devices. Built to  
            design document specifications.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="cardBootons">
        <Button className={classes.booton}  size="small" variant="contained" href="https://github.com/ShotaKiko/User-Interface-Project-Week" 
          target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="githubIcon" /> <span style={{visibility:"hidden"}}>i</span>
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

        <Button className={classes.booton}  size="small" variant="contained" href="https://reverent-poincare-59e1bb.netlify.app/index.html" 
          target="_blank" rel="noopener noreferrer">
          <LaptopMacIcon /> <span style={{visibility:"hidden"}}>ii</span>
              Visit Site
        </Button>
      </div>
      </CardActions>
        <UIProjectModal open={open} scroll={scroll} fullscreen={fullscreenBoolean} onClose={handleClose}/>
    </Card>
  );
}