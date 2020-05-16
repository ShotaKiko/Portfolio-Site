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
      width: '40vw',
      display:"flex",
      backgroundColor:"#052738",
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize:".4rem",
        width:"80vw",
        margin:"1vh 0px"
      },
      [theme.breakpoints.only('md')]: {
        width:"60vw",
      },
      [theme.breakpoints.only('sm')]: {
        width:"60vw",
      },
    },
  },
  field:{
    '& > *': {
      color: "#BEBBBB",
      zIndex:"0",
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
      <form className={classes.root} noValidate autoComplete="off" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <ThemeProvider theme={fieldTheme} >
        <input type="hidden" name="form-name" value="contact" />
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
            rows={9}
            rowsMax={16}
            defaultValue=""
            variant="filled"
            color="secondary"
            name="message"
          />

          <div data-netlify-recaptcha="true"></div>
          </ThemeProvider>
        <div className="footerButtonContainer" style={{backgroundColor:"#181E28"}}>
          <Button className={classes.button} variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </div>
      </form>
        
    </section>
  );
}