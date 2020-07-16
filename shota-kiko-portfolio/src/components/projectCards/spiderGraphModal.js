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
      [theme.breakpoints.only('sm')]: {
        width:"99%",
        flexWrap:"wrap"
      },
      [theme.breakpoints.only('xs')]: {
        flexDirection:"column",
        width:"99%",
      },
    },
    imageContent:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      width:"60%",
      margin:"0 auto",
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

export default function SpiderGraphModal(props) {
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
          Spider Graph
        </DialogTitle>
        <DialogContent className={classes.imageContent}>
            <img className="modalImage" src="https://img.imageupload.net/2020/07/16/spiderGraphDataSet.md.png"/>
            <div className="modalStack"> HTML | CSS | Javascript | React | Node | Express </div>
        </DialogContent>
        <DialogContent dividers className={classes.content}>
          <div className="modalRight">
            <Typography gutterBottom variant="h6" component="h5" className={classes.subtitle2}>
              Features
            </Typography>
            <Typography variant="body2" component="p">
              <ul className="numba2">
                    <li>
                        Ability to inserts data sets and add appropriate scale for respective data.
                    </li>
                    <li>
                        Features two color themes to better stylize the created charts.
                    </li>
                    <li>
                        Defaults to four categories but includes functionality to add categories to fit user needs.
                    </li>
                    <li>
                        Future functionality will include the ability to download the created chart as well as user login
                        to view associated spider graphs.
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
                        Led the development as project lead over seeing seven students responsible for landing page layout, frontend architecture, 
                        backend architecture and UX design.
                    </li>
                    <li>
                        Held daily standups to review progress and define goals to hit project MVP guidelines.
                    </li>
                    <li>
                        Coordinated with front and back end teams to hit stakeholder expectations.
                    </li>
                    <li>
                        Resolved issues during pair programming sessions and debugged code throughout app development.
                    </li>
                </ul>
              </Typography>
            </div>
        </DialogContent>
        <DialogActions className={classes.buttonSection}>
            <Button className={classes.booton}  size="small" variant="contained" href="https://github.com/Build-Week-Spider-Graph-1"
            target="_blank" rel="noopener noreferrer" >
            <GitHubIcon className="githubIcon"/> <span style={{visibility:"hidden"}}>i</span>
                Github
            </Button>
            <Button className={classes.booton}  size="small" variant="contained" 
            href="https://lambda-spider.now.sh/" target="mynewtab"rel="noopener noreferrer">
            <LaptopMacIcon /> <span style={{visibility:"hidden"}}>ii</span>
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