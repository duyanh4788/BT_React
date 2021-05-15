import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
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
import BTGioHangReducer_P2 from "./BTRedux/BTGioHang2/BTGioHangReducer_P2";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/BookingMovie" component={BookingMovie} />
        <Route exact path="/ToDoListpage" component={ToDoListpage} />
        <Route exact path="/TaskList" component={TaskList} />
        <Route exact path="/Burger" component={Burger} />
        <Route exact path="/Burger" component={Burger} />
        <Route
          exact
          path="/DanhSachKhoaHoc_Main"
          component={DanhSachKhoaHoc_Main}
        />
        <Route exact path="/DressingRoom" component={DressingRoom} />
        <Route exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/AppXucXac" component={AppXucXac} />
        <Route exact path="/BTGioHangReducer_P2" component={BTGioHangReducer_P2} />
        <Route exact path="/GameOTX" component={GameOTX} />
        <Route exact path="/FromSinhVien" component={FromSinhVien} />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
