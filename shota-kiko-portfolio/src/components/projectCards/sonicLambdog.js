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

const accent = teal[500]

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  booton:{
    color: accent,
  }
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
              Python | Django | React | Semantic UI React
          </Typography>
          
          <Typography variant="body1" component="p">
            Sonic the Lambdog features a room generation algorithm. Users
            can sign up and attempt to traverse through the labyrinth while viewing other players
            in the same room.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="secondary">
          Github
        </Button>
        <Button className={classes.booton} size="small" variant="outlined" >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}