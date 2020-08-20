import axiosInstance from './index'

// const APPKEY = "PB3qqwbEQxam8IsTGnD8xpPe6z5ArTmr"
const axios = axiosInstance


// 得到所有用户
export const getUser = () => {return axios.get(`http://localhost:8000/api/User/`)}

export const postUser = (Nickname, Account, Password) => {return axios.post(`http://localhost:8000/api/User/`, {Nickname, Account, Password})}


