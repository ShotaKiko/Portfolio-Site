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
import LaunchIcon from '@material-ui/icons/Launch';
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

const useStyles = makeStyles({
    root: {
      maxWidth: 450,
    },
    booton:{
      fontSize:".7vw",
      fontFamily:"Roboto",
      height:"35px",
      color: accent,
      backgroundColor: "white",
      '&:hover': {
        background: "#4ca69c",
        color:"white",
        borderColor:"white"
      }
    },
    headline:{
      borderBottom:"4px solid #4ca69c",
      fontSize:"1.4rem",
      // color:"#37766F",
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
    },
    imageContent:{
      display:"flex",
      justifyContent:"center",
      // backgroundColor:"#bcbcbc",
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
    },
  });

export default function SonicLambdogModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.booton} size="small" variant="contained" onClick={handleClickOpen}>
          <LaunchIcon />
          Learn More <span style={{visibility:"hidden"}}>i</span>
      </Button>
      <Dialog  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='md' fullWidth={true}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.headline}>
          Sonic the Lambdog
        </DialogTitle>
        <DialogContent className={classes.imageContent}>
            <img className="modalImage" src="https://imagehost.imageupload.net/2020/04/25/sonic-lambdog-dashboard.png" style={{width:"80%", margin:"0 auto"}}/>
        </DialogContent>
        <DialogContent dividers className={classes.content}>
          <div className="modalRight">
            <Typography gutterBottom variant="h6" component="h5" className={classes.subtitle2}>
              Features
            </Typography>
            <Typography variant="body2" component="p">
              <ul className="numba2">
                    <li>
                        User onboarding functionality in order to view other players in same room
                    </li>
                    <li>
                        100+ room maze generating algorithm traversable from start to finish
                    </li>
                    <li>
                        Player and room status updates reflected on UI
                    </li>
                    <li>
                        Persistence of users room location in the maze even upon player logout
                    </li>
                </ul>
              </Typography>
            </div>
            <div className="modalLeft">
              <Typography gutterBottom variant="h6" component="h5" className={classes.subtitle1}>
                Contributions
              </Typography>

              <Typography gutterBottom variant="body2" component="p">
                <ul className="numba1">
                    <li>
                        Led the development of the maze and room generating algorithm
                    </li>
                    <li>
                        Built out backend and endpoints for player movement using Django
                    </li>
                    <li>
                        Utilized Postgres to store player info allowing for data persistence
                    </li>
                    <li>
                        Configured responses to frontend following player movement attempts
                    </li>
                </ul>
              </Typography>
            </div>
        </DialogContent>
        <DialogActions className={classes.buttonSection}>
            <Button className={classes.booton}  size="small" variant="contained" href="https://github.com/Sonic-BW"
            target="_blank" rel="noopener noreferrer" >
            <GitHubIcon className="githubIcon"/> <span style={{visibility:"hidden"}}>i</span>
                Github
            </Button>
            <Button className={classes.booton}  size="small" variant="contained" 
            href="https://zealous-poincare-b92bd3.netlify.com" target="mynewtab"rel="noopener noreferrer">
            <LaptopMacIcon /> <span style={{visibility:"hidden"}}>ii</span>
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