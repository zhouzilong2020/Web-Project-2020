import axios from 'axios'

export async function login(loginInfo){
    var resp = await axios.post(
        `http://127.0.0.1:8000/api/user/login/`,
        {
            params:loginInfo
        }
    )
    console.log(resp)
    return resp.data;
}

export async function register(regInfo){
    var resp = await axios.post(
        'http://localhost:8000/api/user/register/',
        {
            params: regInfo,
        }
    );
    console.log(resp)
    return resp.data;
}