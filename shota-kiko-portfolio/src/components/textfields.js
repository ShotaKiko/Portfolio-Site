import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { blueGrey } from '@material-ui/core/colors';


const fieldTheme = createMuiTheme({
  palette: {
    secondary: {
      main: blueGrey[200],
      backgroundColor: "#052738"
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35vw',
      display:"flex",
      backgroundColor:"#37766F",
      backgroundColor:"#326c64",
      backgroundColor:"#08415C",
      backgroundColor:"#052738",
    },
  },
  field:{
    '& > *': {
      color: "#BEBBBB",
    },
  },
  button:{
    color:"white",
  }
}));

export default function TextFields() {
  const classes = useStyles();

  return (
    <section className="Email">
      <form className={classes.root} noValidate autoComplete="off" action="POST" data-netlify="true">
        <ThemeProvider theme={fieldTheme} >
        <TextField 
          className={classes.field} 
            id="filled-basic" 
            label="Name" 
            variant="filled"  
            defaultValue="" 
            color="secondary"
            backgroundColor="main"
            name="name"
          />
        
        <TextField 
          className={classes.field}
            id="filled-basic" 
            label="Email" 
            variant="filled"  
            defaultValue="" 
            color="secondary"
            name="emial"
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
            color="secondary"
            name="message"
          />

          <div data-netlify-recaptcha="true"></div>
          </ThemeProvider>
      </form>
        
        <div className="footerButtonContainer">
          <Button className={classes.button} variant="contained" color="secondary">
            Submit
          </Button>
        </div>
    </section>
  );
}