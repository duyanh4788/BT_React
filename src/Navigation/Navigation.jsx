import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

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
    navLinkIem: {
        textDecoration: 'none',
        color: 'black',
        margin: '0 7px',
        fontSize: '19px',
        "&:hover": {
            textDecoration: 'none',
            color: 'black',
        },
    },
    activeClass: {
        color: 'black',
        border: "1px solid black",
        borderRadius: '5px',
        padding: '5px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    inputLabel: {
        fontSize: '20px',
        color: 'white',
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
                        <NavLink className={classes.navLink} exact to='/BTNavlink' activeClassName={classes.activeClass}>BT-Navlink</NavLink>
                        <NavLink className={classes.navLink} exact to='/bthook' activeClassName={classes.activeClass}>BT-HOOK</NavLink>
                    </Typography>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select" className={classes.inputLabel}>Redux</InputLabel>
                        <Select>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/BTComponent' activeClassName={classes.activeClass}>BTComponent</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/BTGioHangReducerPhone' activeClassName={classes.activeClass}>List Phone</NavLink>
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select" className={classes.inputLabel}>Game</InputLabel>
                        <Select>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/AppXucXac' activeClassName={classes.activeClass}>Game Xúc Xắc</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/GameOTX' activeClassName={classes.activeClass}>Game Oẳn Tù Xì</NavLink>
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select" className={classes.inputLabel}>ToDoList</InputLabel>
                        <Select>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/ToDoListpage' activeClassName={classes.activeClass}>ToDoList-Axios</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/TaskList' activeClassName={classes.activeClass}>TaskList-Redux</NavLink>
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select" className={classes.inputLabel}>Form</InputLabel>
                        <Select>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/UserProfile' activeClassName={classes.activeClass}>User-Profile</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/FromSinhVien' activeClassName={classes.activeClass}>Form Sinh Viên</NavLink>
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select" className={classes.inputLabel}>Change</InputLabel>
                        <Select>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/BookingMovie' activeClassName={classes.activeClass}>Booking-Movie</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/Burger' activeClassName={classes.activeClass}>Order-Burger</NavLink>
                            </MenuItem>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/DressingRoom' activeClassName={classes.activeClass}>Dressing-Room</NavLink>
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select" className={classes.inputLabel}>Axios</InputLabel>
                        <Select>
                            <MenuItem >
                                <NavLink className={classes.navLinkIem} exact to='/DanhSachKhoaHoc_Main' activeClassName={classes.activeClass}>E-learning</NavLink>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navigation
