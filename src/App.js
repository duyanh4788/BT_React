import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import BTComponent from "./BTComponent/Component/BTComponent";
import ToDoListpage from "./BTAxios/ToDoList.page";
import TaskList from "./BTRedux/BTToDoList/TaskList";
import BookingMovie from "./BTRedux/BTBooking/BookingMovie";
import Burger from "./BTRedux/BTBurger/Burger";
import DanhSachKhoaHoc_Main from "./BTRedux/BTDanhSachKhoaHoc/Screens/DanhSachKhoaHoc_Main";
import DressingRoom from "./BTRedux/BTDressingRoom/Screens/DressingRoom";
import UserProfile from "./BTRedux/BTFormValidation/UserProfiles/UserProfile";
import AppXucXac from "./BTRedux/BTGameXucXac/AppXucXac";
import GameOTX from "./BTRedux/BTOanTuXi/GameOTX";
import FromSinhVien from "./BTRedux/BTQuanLySinhVien/FromSinhVien";
import BTGioHangReducerPhone from "./BTRedux/BTGioHang2/BTGioHangReducerPhone";
import HomePage from "./Navigation/HomePage";
import HeaderNL from "./BTNavLink/HeaderNL";
import DetailNL from "./BTNavLink/DetailNL";
import PageNotFound from "./PageNotFound/PageNotFound";
import ReactHook from "./BTReactHook/ReactHook";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/BTComponent" component={BTComponent} />
        <Route
          exact
          path="/BTGioHangReducerPhone"
          component={BTGioHangReducerPhone}
        />
        <Route exact path="/AppXucXac" component={AppXucXac} />
        <Route exact path="/GameOTX" component={GameOTX} />
        <Route exact path="/BookingMovie" component={BookingMovie} />
        <Route exact path="/Burger" component={Burger} />
        <Route exact path="/DressingRoom" component={DressingRoom} />
        <Route exact path="/ToDoListpage" component={ToDoListpage} />
        <Route exact path="/TaskList" component={TaskList} />
        <Route exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/FromSinhVien" component={FromSinhVien} />
        <Route
          exact
          path="/DanhSachKhoaHoc_Main"
          component={DanhSachKhoaHoc_Main}
        />
        <Route exact path="/BTNavlink" component={HeaderNL} />
        <Route exact path="/DetailNL/:id" component={DetailNL} />
        {/* react hook useContext */}
        <Route exact path="/bthook" component={ReactHook} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
