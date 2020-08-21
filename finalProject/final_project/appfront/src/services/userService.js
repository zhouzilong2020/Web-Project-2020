import axios from 'axios'

export async function login(loginInfo){
    var resp = await axios.post(
        'http://localhost:8000/api/user/', 
        loginInfo
    )
    return resp;
}

export async function register(regInfo){
    var resp = await axios.post(
        'http://localhost:8000/api/user/',
        regInfo,
    );
    return resp;
}