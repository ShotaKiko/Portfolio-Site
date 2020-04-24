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
      fontSize:"11px",
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
      borderBottom:"4px solid #37766F",
      fontSize:"1.4rem",
      // color:"#37766F",
      color:"whitesmoke",
      backgroundColor:"#4ca69c"
    },
    image:{
      borderRadius:"7px",
      padding:"1vh 1vh",
    },
    content:{
      display:"flex",
      width:"85%",
      margin:"0 auto",
      
    }
  });

export default function FieldTripModal() {
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
          MyFieldTripp
        </DialogTitle>
            <img className={classes.image} src="https://imagehost.imageupload.net/2020/04/24/fieldtripp-teacher-dashboard.png" style={{width:"80%", margin:"0 auto"}}/>
        <DialogContent dividers className={classes.content}>
          <div className="modalLeft">
            <Typography gutterBottom variant="h6" component="h5">
              Features
            </Typography>
            <Typography variant="body2" component="p">
              <ul>
                    <li>
                        Account creation for teachers and parents of students
                    </li>
                    <li>
                        Ability to generate field trip cards with Google Maps API integration
                    </li>
                    <li>
                        Organized student table to view field trip participants readiness status
                    </li>
                    <li>
                        Capability to assign chaperones to certain field trips
                    </li>
                </ul>
              </Typography>
            </div>
            <div>
              <Typography gutterBottom variant="h6" component="h5">
                Contributions
              </Typography>

              <Typography gutterBottom variant="body2" component="p">
                <ul>
                    <li>
                        Led group pair programming sessions to design database architecture
                    </li>
                    <li>
                        Helped build out api endpoints for retrieving student/parent tied data
                    </li>
                    <li>
                        Designed and developed onboarding flow for new users
                    </li>
                    <li>
                        Utilized Semantic UI React to theme and style the site
                    </li>
                </ul>
              </Typography>
            </div>
        </DialogContent>
        <DialogActions>
            <Button className={classes.booton} size="small" variant="contained" href="https://github.com/field-trip-planner" 
            target="mynewtab" rel="noopener noreferrer">
            <GitHubIcon className="githubIcon"/> <span style={{visibility:"hidden"}}>i</span>
                Github
            </Button>
            <Button className={classes.booton} size="small" variant="contained" href="https://myfieldtripp.com/"
                target="mynewtab" rel="noopener noreferrer" >
                <LaptopMacIcon /> <span style={{visibility:"hidden"}}>i</span>
                Visit Site
            </Button>
          <Button className={classes.booton} autoFocus onClick={handleClose}  size="small" variant="contained">
            Return
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}