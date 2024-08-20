const express = require('express')
const app = express()
const userModel = require('../model/loginModel.js')
const userLogin = require('../model/adminModel.js')

module.exports = {
    login: async(req,res) =>{
        res.render('login');
    },
    postLogin: async(req,res) =>{
        
        const name = req.body.name;
        const mail = req.body.mail;
        const users = await userModel.postLogin(name,mail);
     
      if(users.length > 0 && users[0].name === name && users[0].mail === mail){
        req.session.userId = users[0].id;
       
        res.redirect('/');
      } else{
        res.redirect('/login')
      }
      
      
    },
    

    getRegister: async(req,res) =>{
      res.render("register");
  },
  postRegister: async(req,res) => {
      const name = req.body.name;
        const mail = req.body.mail;
        const phone = parseInt(req.body.phone);
        const add = req.body.address;
        const rolee = "User" ;
       
        const create =  await userLogin.postcreUsers(name,mail,phone,add,rolee);
        return res.redirect(`/login`)
  },
    logout: async(req,res) =>{
        req.session.destroy(err => {
            if (err) {
              console.error('Error destroying session:', err);
            }
            res.clearCookie('connect.sid');
            res.redirect('/admin/userInfo');
          });

    }

}