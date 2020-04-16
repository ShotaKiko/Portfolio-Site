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

export default function Sonic() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="sonicthelambdog"
          height="300"
          image="https://imagehost.imageupload.net/2020/04/12/sonic-lambdog.png"
          title="Sonic the Lambdog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Sonic the Lambdog
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>
              Python | Django | React | Semantic UI
          </Typography>
          
          <Typography variant="body1" component="p">
            Sonic the Lambdog features a room generation algorithm. Users
            can sign up and attempt to traverse through the labyrinth while viewing other players
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
        
        <Button className={classes.booton} size="small" variant="contained">
          <LaunchIcon /> <span style={{visibility:"hidden"}}>i</span>
          Learn More
        </Button>

        <Button className={classes.booton}  size="small" variant="contained" 
          href="https://zealous-poincare-b92bd3.netlify.com" target="mynewtab"rel="noopener noreferrer">
          <LaptopMacIcon /> <span style={{visibility:"hidden"}}>i</span>
              Visit Site
        </Button>
        </div>
      </CardActions>
    </Card>
  );
}