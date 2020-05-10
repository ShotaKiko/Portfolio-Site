import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import ImmunTrackerModal from './immunTrackerModal';

const accent = teal[500]

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:"initial"
  },
  header:{
    fontSize:"1.2rem",
  },
  sub:{
    fontSize:".9rem",
  },
  cardText:{
    fontSize:".9rem",
  },
  content:{

  },
  media:{
    height:"23vh",
    [theme.breakpoints.between('xs', 'sm')]: {
      height:"100%"
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
    '&:hover': {
      background: "#4ca69c",
      color:"white",
      borderColor:"white"
    }
  },
}));

export default function ImmunTracker() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}
          component="img"
          alt="immunizationTracker"
          image="https://imagehost.imageupload.net/2020/04/12/immunizationtracker.png"
          title="Immunization Tracker"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
          Immunization Tracker
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>React | Redux | Node </Typography>
          
          <Typography variant="body2" component="p" className={classes.cardText}>
          ImmuTrack is designed to help reduce hassle and potential stress through the provision of a centralized and streamlined resource with which to track all of your immunization needs.
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

            <ImmunTrackerModal />

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