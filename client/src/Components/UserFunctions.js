import axios from 'axios';

export const register = newUser => {
    return axios
    .post('user/register', {
        fname : newUser.fname,
        lname : newUser.lname,
        email : newUser.email,
        password : newUser.password,
    })
    .then(response =>{
        console.log('New Admin has been added successfully')
    })
}

export const login = (user) => {
    return axios
    .post('/auth', {
        email: user.email,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('xauthtoken', response.data)
        return response.data;     
    })
    .catch(err => {
        console.log(err)
    })
}