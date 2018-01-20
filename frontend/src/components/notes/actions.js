import uuid from 'uuid/v1'
import superagent from 'superagent';
import cookie from 'react-cookies';
let API = `${__API_URL__}/notes`;

export const noteInitialize = () => dispatch => {
    superagent
        .get(`${API}/get`)
        .set('Authorization', 'Bearer'+bearerToken())
        .then(res => {
            let arr = res.body;
             dispatch(initAction(arr));    
        })
        .catch(console.error);
}

export const noteCreate = payload => dispatch=>{
    superagent
    .post(`${API}/post`)
    .set('Authorization', 'Bearer'+bearerToken())
    .send({"content":payload.content})
    .then(res => {
        console.log('after post:::::', res.body)
        dispatch(createAction(res.body))
    } )
    .catch(err => console.log(err))
}

export const noteDelete = payload => dispatch => {
    superagent
        .delete(`${API}/delete`)
        .set('Authorization', 'Bearer'+bearerToken())
        .send(payload)
        .then(() => {
            dispatch(deleteAction(payload))
        })
        .catch(err=>console.log(err))
}

export const noteUpdate = payload => dispatch => {
    superagent
        .put(`${API}/edit`)
        .set('Authorization', 'Bearer'+bearerToken())
        .send(payload)
        .then(()=>{
            dispatch(updateAction(payload))
        })
        .catch(err=>console.log(err))
}

const bearerToken=()=>{
    return cookie.load("auth")
}
const initAction = list => ({
   type: 'INIT',
   payload: list
});

const createAction = note => ({
    type: 'CREATE',
    payload: note   
});

const updateAction = note => ({
  type: 'UPDATE',
  payload: note
});

const deleteAction = note => ({
  type: 'DELETE',
  payload: note
});