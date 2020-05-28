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

import FieldTripModal from './fieldTripModal.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const accent = teal[500]

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:"initial"
  },
  header:{
    fontSize:"1.2rem",
  },
  media:{
    height:"100%"
  },
  sub:{
    fontSize:".9rem",
  },
  cardText:{
    fontSize:".9rem",
    textAlign:"justify",
  },
  content:{
    // marginTop:"-20px",
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
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
}));

export default function MyFieldTripp() {
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
    <Card className={classes.root}>
      
      <CardActionArea  onClick={handleClickOpen('body')}>
        <CardMedia className={classes.media}
          component="img"
          alt="fieldtripp"
          image="https://imagehost.imageupload.net/2020/05/16/fieldtrip-landing.md.png"
          title="Field Trip Planner"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
          MyFieldTripp Planner
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>ReactN | Node | Postgres </Typography>
          
          <Typography variant="body2" component="p" className={classes.cardText}>
            MyFieldTripp is simple and dependable field trip planner application
            that helps teachers bring back the joy of field trips. 
            The app allows you to create and keep track of field trips and participants.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      <div className="cardBootons">
        <Button className={classes.booton}  size="small" variant="contained" href="https://github.com/field-trip-planner" 
          target="mynewtab" rel="noopener noreferrer">
          <GitHubIcon className="githubIcon" /> <span style={{visibility:"hidden"}}>i</span>
              Github
        </Button>
        
        <Button 
          className={classes.booton}
          classes={{ focusVisible: false }} 
          size="small" 
          variant="contained" 
          onClick={handleClickOpen('body')}
        >
            <LaunchIcon />
            Learn More <span style={{visibility:"hidden"}}>i</span>
        </Button>
      
        <Button className={classes.booton} classes={{ focused: classes.inputFocused }} size="small" variant="contained" href="https://myfieldtripp.com/"
            target="mynewtab" rel="noopener noreferrer" >
            <LaptopMacIcon /> <span style={{visibility:"hidden"}}>iii</span>
              Visit Site
        </Button>
        </div>
      
      </CardActions>
        
        <FieldTripModal fullscreen={fullscreenBoolean} onClose={handleClose} open={open} scroll={scroll} />
    </Card>
  );
}