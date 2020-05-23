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
import ImmunTrackerModal from './immunTrackerModal'

import useMediaQuery from '@material-ui/core/useMediaQuery'; 

const accent = teal[500]

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between('xs', 'sm')]: {
      height:"fit-content"
    },
    textAlign:"initial",
  },
  header:{
    fontSize:"1.2rem",
  },
  headline:{
    borderBottom:"4px solid #4ca69c",
    fontSize:"1.4rem",
    // color:"#37766F",
    color:"whitesmoke",
    backgroundColor:"#37766F",
  },
  sub:{
    fontSize:".9rem",
  },
  cardText:{
    fontSize:".9rem",
    textAlign:"justify",
  },
  image:{
    borderRadius:"7px",
    padding:"1vh 1vh",
  },
  content:{
    display:"flex",
    justifyContent:"space-around",
    width:"85%",
    margin:"0 auto",
    borderBottom:".5px solid #bcbcbc",
    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection:"column",
      width:"99%",
    },
  },
  imageContent:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    margin:"0 auto",
    width:"60%",
    [theme.breakpoints.between('xs', 'sm')]: {
      width:"100%",
    },
  },
  subtitle1:{
    color:"whitesmoke",
    marginBottom:"0px",
    '&:hover': {
      color: "white",
    }
  },
  subtitle2:{
    color:"#37766F",
    marginBottom:"0px",
    '&:hover': {
      color: "#4ca69c",
    }
  },
  buttonSection:{
   marginTop:"5px",
   [theme.breakpoints.between('xs', 'sm')]: {
    display:"flex",
    justifyContent:"space-evenly",
    },
  },
  media:{
    height:"100%"
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
    '&:hover': {
      background: "#4ca69c",
      color:"white",
      borderColor:"white"
    }
  },
}));

export default function ImmunTracker() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

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
    <Card className={classes.root}>

      <ImmunTrackerModal scroll={scroll} open={open} fullscreen={fullscreenBoolean} onClose={handleClose} />
      <CardActionArea onClick={handleClickOpen('body')}>
        <CardMedia className={classes.media}
          component="img"
          alt="immunizationTracker"
          image="https://imagehost.imageupload.net/2020/05/16/immuTRack-landingPage.md.png"
          title="Immunization Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
          Immunization Tracker
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>React | Redux | Node </Typography>
          
          <Typography variant="body2" component="p" className={classes.cardText}>
            ImmuTrack is an app designed to help reduce the hassle and potential stress through 
            the provision of a centralized and streamlined resource with which to keep track 
            all of your immunization needs.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <div className="cardBootons">
            <Button className={classes.booton}  size="small" variant="contained" href="https://github.com/buildweek-immunizationtracker/front-end-architect" 
              target="mynewtab" rel="noopener noreferrer">
              <GitHubIcon className="githubIcon" fontSize="small"/> <span style={{visibility:"hidden"}}>i</span>
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

            <Button className={classes.booton}  size="small" variant="contained" href="https://musing-albattani-db7dc4.netlify.com/index.html" 
              target="mynewtab" rel="noopener noreferrer" >
              <LaptopMacIcon /> <span style={{visibility:"hidden"}}>iiI</span> 
                 Visit Site
            </Button>
        </div>
      </CardActions>
    </Card>
  );
}