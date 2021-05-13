import React, { Component } from 'react'
import classes from './style.module.css';
import { connect } from 'react-redux';

class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: "./img/dressingroom/background/background1.jpg",
            body: './img/dressingroom/allbody/bodynew.png',
            model: './img/dressingroom/model/1000new.png',
            hairstyle: './img/dressingroom/hairstyle/',
            necklaces: './img/dressingroom/necklaces/',
            bikinitop: './img/dressingroom/allbody/bikini_branew.png',
            bikinibottom: './img/dressingroom/allbody/bikini_pantsnew.png',
            handbags: './img/dressingroom/handbags/',
            feet: "./img/dressingroom/shoes/shoes1.png"
        }
    }
    render() {
        let { background, body, model, hairstyle, necklaces, bikinitop, bikinibottom, handbags, feet } = this.state;
        let { models } = this.props;
        return (
            <div className={classes.contain} style={{ background: `url( ${background})` }}>
                <div className={classes.body} style={{ background: `url( ${body})` }} />
                <div className={classes.model} style={{ background: `url( ${model})` }} />
                <div className={classes.hairstyle} style={{ background: `url( ${hairstyle})` }} />
                <div className={classes.necklaces} style={{ background: `url( ${necklaces})` }} />
                <div className={classes.bikinitop} style={{ background: `url( ${bikinitop})` }} />
                <div className={classes.bikinibottom} style={{ background: `url( ${bikinibottom})` }} />
                <div className={classes.handbags} style={{ background: `url( ${handbags})` }} />
                <div className={classes.feet} style={{ background: `url( ${feet})` }} />

                <div className={classes.hairstyle} style={{ backgroundImage: `url(${models.hairstyle} )` }}></div>
                <div className={classes.necklaces} style={{ backgroundImage: `url(${models.necklaces} )` }}></div>
                <div className={classes.bikinitop} style={{ backgroundImage: `url(${models.topclothes} )` }}></div>
                <div className={classes.bikinibottom} style={{ backgroundImage: `url(${models.botclothes} )` }}></div>
                <div className={classes.handbags} style={{ backgroundImage: `url(${models.handbags} )` }}></div>
                <div className={classes.feet} style={{ backgroundImage: `url(${models.shoes} )` }}></div>
                <div className={classes.contain} style={{ background: `url(${models.background} )` }}></div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        models: state.DressingRoomReducers,
    }
}
export default connect(mapStateToProps)(Model)
