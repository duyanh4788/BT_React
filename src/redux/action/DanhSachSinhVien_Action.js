import { ADD_SINHVIEN, GET_SINHVIEN } from "../Constants/DanhSachSinhVien_Constants"

export const fetchSinhVien_Action = (resData) => {
    return {
        type: GET_SINHVIEN,
        resData,
    }
}
export const addSinhVien_Action = (sinhvien) => {
    return {
        type: ADD_SINHVIEN,
        sinhvien,
    }
}