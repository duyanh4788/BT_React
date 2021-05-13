import React, { Component } from "react";
// material
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// material css
import { withStyles } from "@material-ui/core";
import { styled } from "./styles.screens";

// redux
import { connect } from "react-redux";
import { getAPI_Action } from "../Services/Axios_Action";

// react-router-dom
import { Link } from "react-router-dom";

export class Navbartest extends Component {
  renderDanhSach = () => {
    const { dsKhoaHoc, classes } = this.props;
    return dsKhoaHoc.map((item, index) => {
      return (
        <Grid
          container
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          spacing={1}
          key={index}
        >
          <Card style={{ width: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={item.hinhAnh}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.tenKhoaHoc}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.nguoiTao.hoTen}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.maKhoaHoc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" color="primary">
                <Link
                  to={`/detail/${item.maKhoaHoc}`}
                  className={classes.deTaild}
                >
                  Detail
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography variant="h4" component="h2" className={classes.tagIntro}>
          Danh Sách Khóa Học
        </Typography>
        <Grid container spacing={2}>
          {this.renderDanhSach()}
        </Grid>
      </>
    );
  }
  componentDidMount() {
    this.props.dispatch(getAPI_Action());
  }
}
const mapStateToProps = (state) => {
  return {
    dsKhoaHoc: state.DanhSachKhoaHocReducers.danhSachKhoaHoc,
  };
};
export default connect(mapStateToProps)(withStyles(styled)(Navbartest));
