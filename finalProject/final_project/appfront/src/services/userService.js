import axios from 'axios'
import {URL} from './config'

export async function login(loginInfo){
    var resp = await axios.post(`${URL}api/user/login/`,{
            params : loginInfo
        })
    console.log("log sccuess", resp)
    return resp;
}

export async function register(regInfo){
    setTimeout(() => {
        return {data:{
            status:1,
            mes:"timeout"
        }}
    }, 2000);
    var resp = await axios.post(`${URL}api/user/register/`,{
            params: regInfo,
        }
    );
    // console.log(resp)
    return resp;
}


export async function changeNickname(payload){
    setTimeout(() => {
        return {data:{
            status:1,
            mes:"timeout"
        }}
    }, 2000);
    var resp = await axios.post(`${URL}api/user/changeNickname/`,{
            params: payload,
        }
    );
    // console.log(resp)
    return resp;
}


export async function changePassword(payload){
    setTimeout(() => {
        return {data:{
            status:1,
            mes:"timeout"
        }}
    }, 2000);
    var resp = await axios.post(`${URL}api/user/changePassword/`,{
            params: payload,
        }
    );
    // console.log(resp)
    return resp;
}