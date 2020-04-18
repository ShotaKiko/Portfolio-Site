import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { teal } from '@material-ui/core/colors';

const accent = teal[500]

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30vw',
      display:"flex",
      color: accent,
      borderColor: "red",
      textDecorationColor:"red",
      backgroundColor:"#052738",
      // backgroundColor:"#08415C",
      '&:focus': {
        background: "#4ca69c",
        color:"white",
        borderColor:"white"
      }
    },
  },
}));

export default function TextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField  id="filled-basic" label="Name" variant="filled"  
        defaultValue="" size="small"
        />
      
      <TextField color={accent} id="filled-basic" label="Email" variant="filled"  
        defaultValue="" size="small"
        />
      
      <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={8}
          rowsMax={16}
          defaultValue=""
          variant="filled"
        />
    </form>
  );
}