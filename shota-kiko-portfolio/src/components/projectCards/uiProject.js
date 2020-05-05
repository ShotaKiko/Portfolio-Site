import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import LaunchIcon from '@material-ui/icons/Launch';
import UIProjectModal from './uiProjectModal';


const accent = teal[500]

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  booton:{
    fontSize:"11px",
    fontFamily:"Roboto",
    height:"35px",
    color: accent,
    backgroundColor: "white",
    '&:hover': {
      background: "#4ca69c",
      color:"white",
      borderColor:"white"
    }
  },
});

export default function UIProject() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="sonicthelambdog"
          height="300"
        //   TODO update image for card
          image="https://imagehost.imageupload.net/2020/04/12/ui-project.png"
          title="User Interface Project "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            User Interface Project
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>
              HTML | CSS | Javascript | Less
          </Typography>
        
          <Typography variant="body1" component="p">
            A beginner project focused on implementing a clean user interface and responsive design
            for desktop, tablet and mobile devices. Built to design document specifications.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="cardBootons">
        <Button className={classes.booton}  size="small" variant="contained" href="https://github.com/ShotaKiko/User-Interface-Project-Week" 
          target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="githubIcon"/> <span style={{visibility:"hidden"}}>i</span>
              Github
        </Button>
        
        {/* <Button className={classes.booton}  size="small" variant="contained">
          <LaunchIcon /> <span style={{visibility:"hidden"}}>i</span>
          Learn More
        </Button> */}
        <UIProjectModal />

        <Button className={classes.booton}  size="small" variant="contained" href="https://reverent-poincare-59e1bb.netlify.app/index.html" 
          target="_blank" rel="noopener noreferrer">
          <LaptopMacIcon /> <span style={{visibility:"hidden"}}>i</span>
              Visit Site
        </Button>
      </div>
      </CardActions>
    </Card>
  );
}