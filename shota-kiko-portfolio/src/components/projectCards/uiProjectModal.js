import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import GitHubIcon from '@material-ui/icons/GitHub';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    '&:hover': {
      background: "#4ca69c",
    }
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon style={{color:"whitesmoke"}}/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const accent = teal[500]

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.between('xs', 'sm')]: {
        height:"fit-content"
      },
    },
    booton:{
      fontSize:".7vw",
      fontFamily:"Roboto",
      color: accent,
      backgroundColor: "white",
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize:".6rem",
      },
      [theme.breakpoints.only('sm')]: {
        fontSize:".7rem",
      },
      [theme.breakpoints.only('md')]: {
        fontSize:".7rem",
      },
      '&:hover': {
        background: "#4ca69c",
        color:"white",
        borderColor:"white"
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
    headline:{
      borderBottom:"4px solid #4ca69c",
      fontSize:"1.4rem",
      color:"whitesmoke",
      backgroundColor:"#37766F",
    },
    image:{
      borderRadius:"7px",
      padding:"1vh 1vh",
    },
    content:{
      display:"flex",
      justifyContent:"space-around",
      width:"85%",
      margin:"0 auto",
      borderBottom:".5px solid #bcbcbc",
      [theme.breakpoints.between('xs', 'sm')]: {
        flexDirection:"column",
        width:"99%",
      },
    },
    imageContent:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      margin:"0 auto",
      width:"60%",
      [theme.breakpoints.between('xs', 'sm')]: {
        width:"100%",
      },
    },
    subtitle1:{
      color:"whitesmoke",
      marginBottom:"0px",
      '&:hover': {
        color: "white",
      }
    },
    subtitle2:{
      color:"#37766F",
      marginBottom:"0px",
      '&:hover': {
        color: "#4ca69c",
      }
    },
    buttonSection:{
     marginTop:"5px",
      [theme.breakpoints.between('xs', 'sm')]: {
      display:"flex",
      justifyContent:"space-evenly",
      },
    },
  }));
// test
export default function UIProjectModal(props) {
  const classes = useStyles();
  
  return (
    <div>
      <Dialog 
        fullScreen={props.fullscreen} 
        onClose={props.onClose} 
        aria-labelledby="customized-dialog-title" 
        open={props.open} 
        maxWidth='lg' 
        fullWidth={true}
        scroll={props.scroll}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.onClose} className={classes.headline}>
          User Interface Project 
        </DialogTitle>
        <DialogContent className={classes.imageContent}>
            <img className="modalImage" src="https://res.cloudinary.com/dok0cky0u/image/upload/v1596753766/Portfolio/ui-project-services_1_gswgxy.png"/>
            <div className="modalStack">  HTML5 | CSS3 | Javascript ES6 | Less </div>
        </DialogContent>
        <DialogContent dividers className={classes.content}>
          <div className="modalLeft">
            <Typography gutterBottom variant="h6" component="h5" className={classes.subtitle1}>
              Features
            </Typography>
            <Typography variant="body2" component="p">
              <ul className="numba1">
                    <li>
                        Multipage website built to provided design specifications
                    </li>
                    <li>
                        Built using HTML, vanilla Javascript and CSS utlizizing the Less preprocesser 
                    </li>
                    <li>
                       Features a fluid responsive design for optimal user experience across variety of devices
                    </li>
                    <li>
                        Basic scroll effects and animations to improve website experience
                    </li>
                </ul>
              </Typography>
            </div>
            <div className="modalRight">
              <Typography gutterBottom variant="h6" component="h5" className={classes.subtitle2}>
                Contributions
              </Typography>

              <Typography gutterBottom variant="body2" component="p">
                <ul className="numba2">
                    <li>
                        Early solo project built in less than a week's time with dry semantic HTML
                    </li>
                    <li>
                        Hosted on Netlify with integrated Github continuous deployment
                    </li>
                    <li>
                        Precise adherence to design files for smooth desktop tablet and mobile user experience
                    </li>
                    <li>
                        Incorporated smooth scroll  and Greensock animations
                    </li>
                </ul>
              </Typography>
            </div>
        </DialogContent>
        <DialogActions className={classes.buttonSection}>
            <Button className={classes.booton}  size="small" variant="contained" href="https://github.com/ShotaKiko/User-Interface-Project-Week" 
            target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="githubIcon"/> <span style={{visibility:"hidden"}}>i</span>
                Github
            </Button>
            <Button className={classes.booton}  size="small" variant="contained" href="https://reverent-poincare-59e1bb.netlify.app/index.html" 
            target="_blank" rel="noopener noreferrer">
            <LaptopMacIcon /> <span style={{visibility:"hidden"}}>i</span>
                Visit Site
            </Button>
            <Button className={classes.booton} onClick={props.onClose}  size="small" variant="contained">
             <ExitToAppIcon />
             Return
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}