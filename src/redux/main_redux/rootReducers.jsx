import { combineReducers } from "redux"; // kết hợp các reducer nhánh
import { OanTuXiReducers } from "../secondary_redux/OanTuXiReducers";
import { BurgerReducer } from "../secondary_redux/BurgerReducer";
import { HambergerReducers } from "../secondary_redux/HambergerReducers";
import { GioHangReducers } from "../secondary_redux/GioHangReducers";
import { XucXacReducers } from "../secondary_redux/XucXacReducers";
import { FromReducers } from "../secondary_redux/FromReducers";
import { CauThuReducers } from "../secondary_redux/CauThuReducers";
import { GioHan2Reducers } from "../secondary_redux/GioHan2Reducers";
import { BookVeReducers } from "../secondary_redux/BookVeReducers";
import { BookingMovieReducers } from "../secondary_redux/BookingMovieReducers";
import { AppXucXacReducers } from "../secondary_redux/AppXucXacReducers";
import { ToDoListReducers } from "../secondary_redux/ToDoListReducers";
import { TaskListReducers } from "../secondary_redux/TaskListReducers";
import { DanhSachSinhVienReducers } from "../secondary_redux/DanhSachSinhVienReducers";
import { DressingRoomReducers } from "../secondary_redux/DressingRoomReducers";
import { DanhSachKhoaHocReducers } from "../secondary_redux/DanhSachKhoaHocReducers";
import { ToDoListAxiosReducer } from "../secondary_redux/ToDoListAxiosReducer";
import { FacebookReducer } from "../secondary_redux/FacebookReducer";
import { ToDoListAxiosFunctionReducer } from "../secondary_redux/ToDoListAxiosFunctionReducer";
import { LoadingReducer } from "../secondary_redux/LoadingReducer";
import { GameBauCuaReducer } from "../secondary_redux/GameBauCuaReducer";
import { ToDoListAxiosSagaReducer } from "../secondary_redux/ToDoListAxiosSagaReducer";

export const rootReducers = combineReducers({
  XucXacReducers,
  OanTuXiReducers,
  BurgerReducer,
  HambergerReducers,
  GioHangReducers,
  FromReducers,
  CauThuReducers,
  GioHan2Reducers,
  BookVeReducers,
  BookingMovieReducers,
  AppXucXacReducers,
  ToDoListReducers,
  TaskListReducers,
  DanhSachSinhVienReducers,
  DressingRoomReducers,
  DanhSachKhoaHocReducers,
  ToDoListAxiosReducer,
  FacebookReducer,
  ToDoListAxiosFunctionReducer,
  LoadingReducer,
  GameBauCuaReducer,
  ToDoListAxiosSagaReducer,
});
