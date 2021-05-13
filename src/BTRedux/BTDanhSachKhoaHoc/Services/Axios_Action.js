import {
  courseDetail_Action,
  getListSV_Action,
  logIn_Action,
} from "../../../redux/action/DanhSachKhoaHoc_Action";
import { CourseServices, DetailServices, LogInServices } from "./UserServices";

export const getAPIDetail_Action = (id) => {
  console.log(id);
  return (dispacth) => {
    DetailServices.detail(id)
      .then((result) => {
        dispacth(courseDetail_Action(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAPI_Action = () => {
  return (dispacth) => {
    CourseServices.course()
      .then((result) => {
        dispacth(getListSV_Action(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAPILogIn_Action = (values) => {
  return (dispacth) => {
    LogInServices.logInForm(values)
      .then((result) => {
        dispacth(logIn_Action(result.data));
        localStorage.setItem('Credentials', JSON.stringify(result.data))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
