import axios from 'axios'

export async function login(loginInfo){
    console.log("asdasd")
    setTimeout(() => {
        return {
            data:{
            status:1,
            mes:"timeout"
        }}
    }, 2000);

    var resp = await axios.post(
        `http://127.0.0.1:8000/api/user/login/`,
        {
            params:loginInfo
        }
    )
    return resp.data;
}

export async function register(regInfo){
    setTimeout(() => {
        return {data:{
            status:1,
            mes:"timeout"
        }}
    }, 2000);
    var resp = await axios.post(
        'http://localhost:8000/api/user/register/',
        {
            params: regInfo,
        }
    );
    // console.log(resp)
    return resp.data;
}