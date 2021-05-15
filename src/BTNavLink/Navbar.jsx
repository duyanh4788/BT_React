import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const userStyles = makeStyles((theme) => ({
    navLinkTag: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
        margin: '0 5px',
        "&:hover": {
            textDecoration: 'none',
            color: 'white',
        }
    },

}))

function Navbar() {
    const classes = userStyles()
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'black' }}>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active ml-2">
                        <NavLink className={classes.navLinkTag} to='/homenl' exact >Home</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink className={classes.navLinkTag} to='/about' exact >About</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink className={classes.navLinkTag} to='/contact' exact >Contact</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink className={classes.navLinkTag} to='/login' exact >LogIn</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink className={classes.navLinkTag} to='/profile' exact >Profile</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
