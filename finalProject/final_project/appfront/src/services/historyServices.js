import axios from 'axios'

export async function getHistory(){
    axios({
        method: 'post',
        url: '/abc/login',
        data: {
            userName: 'Lan',
            password: '123'
        }
    })
}