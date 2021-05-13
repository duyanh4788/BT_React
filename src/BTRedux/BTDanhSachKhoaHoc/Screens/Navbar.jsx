import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tagLink: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    "&:hover": {
      textDecoration: "none",
      color: "white",
    },
    margin: "0 5px",
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <NavLink
            className={classes.tagLink}
            activeStyle={{ color: "#270430" }}
            exact
            to="/"
          >
            Home
          </NavLink>
        </Typography>
        {props.credential ? <Typography variant="h6" className={classes.tagLink}>Hi {props.credential.hoTen} !</Typography> :
          <>
            <NavLink
              className={classes.tagLink}
              activeStyle={{ color: "#270430" }}
              exact
              to="/signin"
            >
              Sign In
        </NavLink>
            <NavLink
              className={classes.tagLink}
              activeStyle={{ color: "#270430" }}
              exact
              to="/login"
            >
              Login
        </NavLink>
          </>}
      </Toolbar>
    </AppBar>
  );
}
const mapStateToProps = state => {
  return {
    credential: state.DanhSachKhoaHocReducers.credential
  }
}

export default connect(mapStateToProps)(ButtonAppBar)
