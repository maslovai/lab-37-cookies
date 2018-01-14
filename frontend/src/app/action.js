import uuid from 'uuid/v1'
import superagent from 'superagent';

let API = `${__API_URL__}/records`;

export const noteInitialize = () => dispatch => {
    console.log('in init::::::', API);
    superagent
        .get(API)
        .then(res => {
            let arr = res.body;
            for (let i=0; i<arr.length; i++){
                arr[i].content=arr[i].antibiotic
                arr[i].id = arr[i]._id
            }
            dispatch(initAction(arr))
        })
        .catch(console.error);
}

export const noteCreate = payload => dispatch=>{
    // console.log('in post:::::', payload)
    superagent
    .post(API)
    .send({"antibiotic":payload.content})
    .then(res => {
        console.log('after post:::::', res.body)
        dispatch(createAction({content:res.body.antibiotic}))
    } )
    .catch(err => console.log(err))
}

export const noteDelete = payload => dispatch => {
    let deleteAPI = `${API}?id=${payload._id}`
    superagent
        .delete(deleteAPI)
        .then(() => {
            dispatch(deleteAction(payload))
        })
        .catch(err=>console.log(err))
}

export const noteUpdate = payload => dispatch => {
    let editAPI = `${API}?id=${payload._id}`
    superagent
        .put(editAPI)
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