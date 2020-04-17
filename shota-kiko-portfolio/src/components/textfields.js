import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30vw',
      display:"flex",
    },
  },
  body: {
    '& > *': {
        width: '30vw',
        display:"flex",
        height:"40vh"
      },
  }
}));

export default function TextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField  id="filled-basic" label="Name" variant="filled"  
        defaultValue="Small" size="small"
        />
      
      <TextField  id="filled-basic" label="Email" variant="filled"  
        defaultValue="Small" size="small"
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