import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { styled } from "../Screens/styles.screens";

import { connect } from "react-redux";
import { getAPIDetail_Action } from "../Services/Axios_Action";
import { CardMedia, withStyles } from "@material-ui/core";

class Detailitem extends Component {
  render() {
    const { courseDetail, classes } = this.props;
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            width="100%"
            height="340"
            image={courseDetail.hinhAnh}
            title="Contemplative Reptile"
          />
          <Typography variant="h5" component="h2">
            {courseDetail.tenKhoaHoc}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {courseDetail.nguoiTao.hoTen}
          </Typography>
          <Typography variant="body2" component="p">
            {courseDetail.maKhoaHoc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
  componentDidMount() {
    this.props.dispatch(getAPIDetail_Action(this.props.match.params.courseId));
  }
}

const mapStateToProps = (state) => {
  return {
    courseDetail: state.DanhSachKhoaHocReducers.courseDetail || {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      hinhAnh: "",
      nguoiTao: {
        taiKhoan: "",
        hoTen: "",
      },
    },
  };
};
export default connect(mapStateToProps)(withStyles(styled)(Detailitem));
