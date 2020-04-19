import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { teal } from '@material-ui/core/colors';

const accent = teal[500]

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35vw',
      display:"flex",
      backgroundColor:"#37766F",
      // backgroundColor:"#08415C",
      //backgroundColor:"#052738",
      '&:focus': {
      
      }
    },
  },
  field:{
    '& > *': {
      color: "#BEBBBB",
    },
  }
}));

export default function TextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        className={classes.field} 
          id="filled-basic" 
          label="Name" 
          variant="filled"  
          defaultValue="" 
          color="primary"
        />
      
      <TextField 
        className={classes.field}
          id="filled-basic" 
          label="Email" 
          variant="filled"  
          defaultValue="" 
          color="primary"
        />
      
      <TextField
        className={classes.field}
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={8}
          rowsMax={16}
          defaultValue=""
          variant="filled"
          color="primary"
        />
    </form>
  );
}