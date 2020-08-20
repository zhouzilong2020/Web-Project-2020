import axiosInstance from './index'

const axios = axiosInstance


// 得到所有用户
export const getUser = () => {return axios.get(`http://localhost:8000/api/User/`)}

export const postUser = (nickname, account, password) => {return axios.post(`http://localhost:8000/api/User/`, {nickname, account, password})}
