import superagent from 'superagent';
import cookie from 'react-cookies';
let AUTH = `${__AUTH_URL__}`;

export const authSignin = (user={}) => dispatch=>{
    let token=cookie.load("auth");
    if(token) {
        dispatch(setToken(token));
        return;
    }
    return superagent.get(`${AUTH}/signin`)
    .withCredentials()
    .auth(user.username, user.password)
    .then(res=>{
        dispatch(setToken(res.text));
        return res
    })
}

export const authSignup = user => dispatch=>{
    return superagnet.post(`${AUTH}/signup`)
    .withCredentials()
    .send(user)
    .then(res=>{
        dispatch(setToken(res.text));
        return res
    })
}

export const authSignout =()=>({
    type:"DLELTE_AUTH_TOKEN"
})

const setToken= token => ({
    type:"SET_AUTH_TOKEN",
    payload:token
})