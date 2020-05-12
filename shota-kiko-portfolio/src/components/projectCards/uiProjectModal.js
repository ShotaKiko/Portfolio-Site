import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
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
import LaunchIcon from '@material-ui/icons/Launch';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

import useMediaQuery from '@material-ui/core/useMediaQuery';


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
      // height:"35px",
      color: accent,
      backgroundColor: "white",
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize:".6rem",
      },
      '&:hover': {
        background: "#4ca69c",
        color:"white",
        borderColor:"white"
      }
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
export default function UIProjectModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const theme = useTheme()
  const fullscreenBoolean = useMediaQuery(theme.breakpoints.down('xs')) 

  const handleClickOpen = (scrollType) => ()  => {
    setOpen(true);
    setScroll(scrollType)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <div>
      <Button className={classes.booton} size="small" variant="contained" onClick={handleClickOpen('body')}>
          <LaunchIcon />
          Learn More <span style={{visibility:"hidden"}}>i</span>
      </Button>
      <Dialog 
        fullScreen={fullscreenBoolean} 
        onClose={handleClose} 
        aria-labelledby="customized-dialog-title" 
        open={open} 
        maxWidth='md' 
        fullWidth={true}
        scroll={scroll}
        // className={classes.root}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.headline}>
          User Interface Project 
        </DialogTitle>
        <DialogContent className={classes.imageContent}>
            <img className="modalImage" src="https://imagehost.imageupload.net/2020/04/26/ui-project-services.png"/>
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
                        Multipage app built to provided design specifications
                    </li>
                    <li>
                        Built using vanilla HTML, Javascript, Less CSS preprocesser 
                    </li>
                    <li>
                       Features a fluid responsive design for optimal user experience
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
                        Precise adherence to design files for smooth desktop and mobile users
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
            <Button className={classes.booton} autoFocus onClick={handleClose}  size="small" variant="contained">
             <ExitToAppIcon />
             Return
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}