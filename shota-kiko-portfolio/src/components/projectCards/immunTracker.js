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

export default function ImmunTracker() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="immunizationTracker"
          height="300"
          image="https://imagehost.imageupload.net/2020/04/12/immunizationtracker.png"
          title="Immunization Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Immunization Tracker
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>React | Redux | Bootstrap | Node | Postgres </Typography>
          
          <Typography variant="body1" component="p">
          ImmuTrack is designed to help reduce hassle and potential stress through the provision of a centralized and streamlined resource with which to track all of your immunization needs.
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