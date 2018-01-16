import uuid from 'uuid/v1'
import superagent from 'superagent';

let API = `${__API_URL__}/notes`;

export const noteInitialize = () => dispatch => {
    console.log(`in init:::::: API:    ${API}/get`);
    superagent
        .get(`${API}/get`)
        .then(res => {
            let arr = res.body;
            dispatch(initAction(arr))
        })
        .catch(console.error);
}

export const noteCreate = payload => dispatch=>{
    // console.log('in post:::::', payload.content)
    superagent
    .post(`${API}/post`)
    .set({"Content-Type":"application/json"})
    .send({"content":payload.content})
    .then(res => {
        console.log('after post:::::', res.body)
        dispatch(createAction({content:res.body.content}))
    } )
    .catch(err => console.log(err))
}

export const noteDelete = payload => dispatch => {
    let deleteAPI = `${API}/delete/:${payload._id}`
    superagent
        .delete(deleteAPI)
        .then(() => {
            dispatch(deleteAction(payload))
        })
        .catch(err=>console.log(err))
}

export const noteUpdate = payload => dispatch => {
    let editAPI = `${API}/edit`
    superagent
        .put(editAPI)
        .send(payload._id)
        .then(()=>{
            dispatch(updateAction(payload))
        })
        .catch(err=>console.log(err))
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