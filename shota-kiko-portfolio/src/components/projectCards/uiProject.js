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

import GitHubIcon from '@material-ui/icons/GitHub';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import { teal } from '@material-ui/core/colors';


const accent = teal[500]

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  booton:{
    fontSize:"12px",
    color: "white",
    backgroundColor: accent,
    '&:hover': {
      background: "#4ca69c",
      color:"white",
      variant:"outlined"
    }
  },
  booton2:{
    color:"white",
    backgroundColor: accent,
    '&:hover': {
      background: "whitesmoke",
      color: accent
    }
  }
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
        <Button className={classes.booton}  size="small" variant="contained" href="#contained-buttons">
          <GitHubIcon className="githubIcon"/>
          <a href="https://github.com/ShotaKiko/User-Interface-Project-Week" target="_blank" style={{textDecorationLine:"none", color:"white"}}>Github</a>
        </Button>
        
        <Button className={classes.booton2} size="small" variant="contained">
          Learn More
        </Button>

        <Button className={classes.booton}  size="small" variant="contained" href="#contained-buttons">
          <LaptopMacIcon />
          
          <a href="https://github.com/ShotaKiko/User-Interface-Project-Week" target="_blank" style={{textDecorationLine:"none", color:"white"}}>deploy</a>
        </Button>
      </CardActions>
    </Card>
  );
}