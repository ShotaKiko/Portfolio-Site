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

export default function MyFieldTripp() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="fieldtripp"
          height="300"
          image="https://imagehost.imageupload.net/2020/04/07/myfieldtripp.png"
          title="Field Trip Planner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          MyFieldTripp
          </Typography>

          <Typography className={classes.sub} color="textSecondary" gutterBottom>ReactN | Node | Postgres | Passport.js</Typography>
          
          <Typography variant="body1" component="p">
            MyFieldTripp is a dependable field trip planner
            that helps teachers bring back the joy of field trips. Additional
            features to come.
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