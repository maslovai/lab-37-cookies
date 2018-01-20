'use strict';

const User = require('../models/user');
const basicHTTP = require('../lib/basic-https');
// const jwtAuthz = require('express-jwt-authz');
// const checkToken = require('../lib/check-token');
const bodyParser = require('body-parser').json();
const authRouter = module.exports = require('express').Router();

authRouter.post('/api/signup', bodyParser, (req, res, next) => {

    let password = req.body.password;
    // console.log(password);
    delete req.body.password;
    (new User(req.body)).generateHash(password)
    .then(user => {
          // console.log ('USER ', user);
         user.save()
         .then( user => {
             let token = user.generateToken();
             res.cookie = ('auth', token, {maxAge = 180000})
             res.send(token);
         })
         .catch(next)
    })
     .catch(next)
})


authRouter.get('/api/signin', basicHTTP, (req, res, next) => {
    
    User.findOne({username: req.auth.username})
    .then(userFound => {
        if (userFound){
            userFound.comparePasswords(req.auth.password)
            .then(userAuthorized => {
                console.log('checking pass');
                if(userAuthorized) {
                    let token = user.generateToken();
                    res.cookie = ('auth', token, {maxAge = 180000})
                    res.send(token);
                }
                else next({statusCode:404, message:'not authorized'})
            })
            .catch(next)
        } 
        else next({statusCode:404, message:'User not found'})
    })
    .catch(next)
})
//delete user:
// authRouter.delete('/api/delete/:id', checkToken, bodyParser, (req, res, next)=>{
//     User.findOne({_id:req.params.id})
//     .then( user => {
//         if (user){
//             User.remove({_id:req.params.id})
//             .then(res.send("success!"))
//             .catch(err => res.send(err))
//         }
//         else next({statusCode:404, message: 'User not found'})
//     })
//     .catch(next)
// })
