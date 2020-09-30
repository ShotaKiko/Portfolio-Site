import React from "react"

import Button from "@material-ui/core/Button"
import FindInPageIcon from "@material-ui/icons/FindInPage"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import teal from "@material-ui/core/colors/teal"
import grey from "@material-ui/core/colors/grey"
import { makeStyles } from "@material-ui/core/styles"

const iconHoverColor = grey[50]
const iconBackgroundHoverColor = teal[400]

const useStyles = makeStyles({
  icon: {
    color: "#BEBBBB",
    backgroundColor: "#181E28",
    padding: "10px",
    fontSize: "3rem",
    borderRadius: "3px",
    "&:hover": {
      color: iconHoverColor,
      backgroundColor: iconBackgroundHoverColor,
    },
  },
})

export default function Footer() {
  const classes = useStyles()
  return (
    <section className="Footer">
      <div
        className="footerContainer"
        style={{
          marginLeft: "0px",
          paddingLeft: "0px",
        }}
      >
        <div className="footerLinks">
          <Button
            href="https://github.com/ShotaKiko"
            target="mynewtab"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              className={classes.icon}
              fontSize="large"
              color="primary"
            />
          </Button>

          <Button
            href="https://www.linkedin.com/in/shotakikozashvili/"
            target="mynewtab"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              className={classes.icon}
              fontSize="large"
              color="primary"
            />
          </Button>

          <Button
            target="mynewtab"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1U2t7iGrju6ciEtnlChnELM3sCpJVSwjm/view?usp=sharing"
          >
            <FindInPageIcon
              className={classes.icon}
              fontSize="large"
              color="primary"
            />
          </Button>
        </div>

        <div className="copyright">Shota Kikozashvili © 2020</div>
      </div>
    </section>
  )
}
