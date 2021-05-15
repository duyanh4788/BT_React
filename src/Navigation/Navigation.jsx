import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

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
    navLink: {
        textDecoration: 'none',
        color: 'white',
        margin: '0 7px',
        fontSize: '19px',
        "&:hover": {
            textDecoration: 'none',
            color: 'white',
        },
    },
    activeClass: {
        color: 'black',
        border: "1px solid black",
        borderRadius: '5px',
        padding: '5px',
    }
}));

function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink className={classes.navLink} exact to='/' activeClassName={classes.activeClass}>Home</NavLink>
                        <NavLink className={classes.navLink} exact to='/BTComponent' activeClassName={classes.activeClass}>BTComponent</NavLink>
                        <NavLink className={classes.navLink} exact to='/BTGioHangReducerPhone' activeClassName={classes.activeClass}>List Phone</NavLink>
                        <NavLink className={classes.navLink} exact to='/AppXucXac' activeClassName={classes.activeClass}>Game Xúc Xắc</NavLink>
                        <NavLink className={classes.navLink} exact to='/GameOTX' activeClassName={classes.activeClass}>Game Oẳn Tù Xì</NavLink>
                        <NavLink className={classes.navLink} exact to='/BookingMovie' activeClassName={classes.activeClass}>Booking-Movie</NavLink>
                        <NavLink className={classes.navLink} exact to='/Burger' activeClassName={classes.activeClass}>Order-Burger</NavLink>
                        <NavLink className={classes.navLink} exact to='/DressingRoom' activeClassName={classes.activeClass}>Dressing-Room</NavLink>
                        <NavLink className={classes.navLink} exact to='/ToDoListpage' activeClassName={classes.activeClass}>ToDoList-Axios</NavLink>
                        <NavLink className={classes.navLink} exact to='/TaskList' activeClassName={classes.activeClass}>TaskList-Redux</NavLink>
                        <NavLink className={classes.navLink} exact to='/UserProfile' activeClassName={classes.activeClass}>User-Profile</NavLink>
                        <NavLink className={classes.navLink} exact to='/FromSinhVien' activeClassName={classes.activeClass}>Form Sinh Viên</NavLink>
                        <NavLink className={classes.navLink} exact to='/DanhSachKhoaHoc_Main' activeClassName={classes.activeClass}>E-learning</NavLink>
                        <NavLink className={classes.navLink} exact to='/BTNavlink' activeClassName={classes.activeClass}>BT-Navlink</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navigation
