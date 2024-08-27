const express = require('express')
const app = express()
const userModel = require('../model/adminModel.js')

module.exports = {
    getUser: async (req,res) => {
        const id = parseInt(req.session.userId)
        if(id >= 0 ){
            var user = await userModel.getUser(id);
        } else {
            var user ={}
        }
       

       
        const users = await userModel.getUsers();
        const home = await userModel.getHome();
        const shop = await userModel.getShop();
        const reason = await userModel.getReason();
        const test = await userModel.getTest();
        const so = await userModel.getSocial();

        res.render('index',{k1:'active', k2:'', k3:'', k4:'', k5: '',user:user,users:users, home:home,shop:shop,reason:reason,test:test,social:so})
        
    },
    getShop: async(req,res) => {
        const id = parseInt(req.session.userId)
        
        if(id >= 0 ){
            var user = await userModel.getUser(id);
        } else {
            var user ={}
        }
        const users = await userModel.getUsers();
        const shop = await userModel.getShop();
        const so = await userModel.getSocial();

        res.render('shop',{k1:'', k2:'active', k3:'', k4:'', k5: '',user:user,users:users,shop:shop,social:so})

    },
    getProduct: async(req,res) => {
        const id = parseInt(req.session.userId)
        const idp = parseInt(req.params.ID)
        if(id >= 0 ){
            var user = await userModel.getUser(id);
        } else {
            var user ={}
        }
        const users = await userModel.getUsers();
        const shop = await userModel.getproduct(idp);
        const so = await userModel.getSocial();
        res.render('product',{k1:'', k2:'active', k3:'', k4:'', k5: '',user:user,users:users,shop:shop,social:so})

    },
    getWhy: async(req,res) => {
        const id = parseInt(req.session.userId)
        if(id >= 0 ){
            var user = await userModel.getUser(id);
        } else {
            var user ={}
        }
        const users = await userModel.getUsers();
        const reason = await userModel.getReason();
        const so = await userModel.getSocial();
        res.render('why',{k1:'', k2:'', k3:'active', k4:'', k5: '',user:user,users:users,reason:reason,social:so})

    },
    getTest: async(req,res) => {
        const id = parseInt(req.session.userId)
        if(id >= 0 ){
            var user = await userModel.getUser(id);
        } else {
            var user ={}
        }
        const users = await userModel.getUsers();
        const test = await userModel.getTest();
        const so = await userModel.getSocial();
        res.render('testimonial',{k1:'', k2:'', k3:'', k4:'active', k5: '',user:user,users:users,test:test,social:so})

    },
   
    getContact: async(req,res) => {
        const id = parseInt(req.session.userId)
        if(id >= 0 ){
            var user = await userModel.getUser(id);
        } else {
            var user ={}
        }
        const users = await userModel.getUsers();
        const so = await userModel.getSocial();
        res.render('contact',{k1:'', k2:'', k3:'', k4:'', k5: 'active',user:user,users:users,social:so})

    },
    getSearch: async(req,res) => {
        const search = req.query.search;
        const id = parseInt(req.session.userId)
        if(id >= 0 ){
            var user = await userModel.getUser(id);
        } else {
            var user ={}
        }
        const users = await userModel.getUsers();
        const shop = await userModel.getShop();
        const so = await userModel.getSocial();
        var pro = shop.filter((name) => {
            return name.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })

       
       
        res.render('shop',{k1:'', k2:'active', k3:'', k4:'', k5: '',user:user,users:users,shop:pro,social:so})


    },
   
  
}