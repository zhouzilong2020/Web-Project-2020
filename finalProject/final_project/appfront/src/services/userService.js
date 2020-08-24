import axios from 'axios'
import {URL} from './config'

export async function login(loginInfo){
    var resp = await axios.post(`${URL}api/user/login/`,{
            params : loginInfo
        })
    console.log("log sccuess", resp)

    // 保存在浏览器中
    // 直接保存用户信息
    localStorage.setItem("nickname", resp.data.data.userInfo.nickname)
    localStorage.setItem("account", resp.data.data.userInfo.account)

    return resp;
}

//这里简单期间，在服务器端配置了跨域问题，没有token问题
// 使用本地信息
export async function whoAmI(){
    var nickname = localStorage.getItem("nickname")
    var account = localStorage.getItem("account")
    if(!nickname){  //没有登录过
        return null
    }
    else{  //没有登录过
        return {nickname, account}
    }
}

export async function logout(){
   localStorage.removeItem("nickname")
   localStorage.removeItem("account")
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