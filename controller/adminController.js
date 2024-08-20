const express = require('express')
const app = express()
const adminModel = require('../model/adminModel.js')

module.exports = {
    adminHome: async(req,res) =>{
        
        res.render('index1')
    },
    //USERS
    getUsers: async(req,res) =>{
       
        const dtUser = await adminModel.getUsers();
        
        res.render('./users/users',{data:dtUser} )
    },
    createUsers: async(req,res) => {
        const data = await adminModel.getRole();
        res.render('./users/userscre',{datarole:data} )
    },
    postcreUsers:  async(req,res) => {
        const name = req.body.name;
        const mail = req.body.mail;
        const phone = parseInt(req.body.phone);
        const add = req.body.address;
        const rolee = parseInt(req.body.roleid);
        
        const create =  await adminModel.postcreUsers(name,mail,phone,add,rolee);
        return res.redirect(`/admin/users`)
      
    
    },
    detailUsers: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detail=  await adminModel.detailUsers(genId)
        const dt= await adminModel.getRole();
        return res.render("./users/usersDetail", {usersDetail: detail[0],datauserr:dt})
       
    },
    deleUsers: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const dele =  await adminModel.deleUsers(genId)
        res.redirect(`/admin/users`)
        
    },
    postUsers: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const mail = req.body.mail;
        const phone = parseInt(req.body.phone);
        const add = req.body.address;
        const rolee = parseInt(req.body.roleid);
        const view =  await adminModel.postUsers(genId,name,mail,phone,add,rolee)
        return res.redirect(`/admin/users`)
    },


 // ROLE
 
 getRole: async(req,res) =>{
    const dtPro = await adminModel.getRole();
    res.render('./role/role',{data:dtPro} )
},
createRole: async(req,res) => {
    res.render('./role/rolecre' )
},
postRole:  async(req,res) => {
    const position = req.body.position;
   
    
    const createPro =  await adminModel.postRole(position);
    return res.redirect(`/admin/role`)
  

},
detailRole: async(req,res) => {
   
    const genId = parseInt(req.params.ID);
    const data=  await adminModel.detailRole(genId)
    return res.render("./role/roleDetail", {roleDetail: data[0]})
   
},
deleRole: async(req,res) => {
    const genId = parseInt(req.params.ID);
 
    const delePro =  await adminModel.deleRole(genId)
    res.redirect(`/admin/role`)
    
},
viewRole: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const position = req.body.position;
    const viewPro =  await adminModel.viewRole(genId,position)
    return res.redirect(`/admin/role`)
},
    //HOME
    getHome: async(req,res) =>{
       
        const dtHome = await adminModel.getHome();
        res.render('./home/home',{data:dtHome} )
    },
    createHome: async(req,res) => {
        res.render('./home/homecre' )
    },
    postcreHome:  async(req,res) => {
        const title = req.body.title;
        const image = req.file ;
        const data = [];
        const img = await adminModel.checkimg(image,data)
        const des = req.body.description;
        
        
        const createPro =  await adminModel.postcreHome(title,img,des);
        return res.redirect(`/admin/home`)
      
    
    },
    detailHome: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detail=  await adminModel.detailHome(genId)
        return res.render("./home/homeDetail", {homeDetail: detail[0]})
       
    },
    deleHome: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const dele =  await adminModel.deleHome(genId)
        res.redirect(`/admin/home`)
        
    },
    postHome: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const title = req.body.title;
        const image = req.file;
        const data = await adminModel.detailHome(genId);
        const img = await adminModel.checkimg(image,data)
        const des = req.body.description;
       
        const viewPro =  await adminModel.postHome(genId,title,img,des)
        return res.redirect(`/admin/home`)
    },

    //SHOP
    getShop: async(req,res) =>{
        const data = await adminModel.getShop();
        res.render('./shop/shop',{data:data} )
    },
    createShop: async(req,res) => {
        res.render('./shop/shopcre' )
    },
    postcreShop:  async(req,res) => {
        const name = req.body.name;
        const title = req.body.title;
        const image = req.file ;
        const data = [];
        const img = await adminModel.checkimg(image,data)
        const price = parseInt(req.body.price);
        
        const create =  await adminModel.postcreShop(name,title,img,price);
          
        return res.redirect(`/admin/shop`)
    },
    detailShop: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data =  await adminModel.detailShop(genId)
        return res.render("./shop/shopDetail", {shopDetail: data[0]})
    },
    deleShop: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const dele =  await adminModel.deleShop(genId)
        res.redirect(`/admin/shop`)
        
    },
    postShop: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const title = req.body.title;
        const image =   req.file ;
        const data = await adminModel.detailShop(genId)
        const img = await adminModel.checkimg(image,data)
        const price = parseInt(req.body.price);
        const view =  await adminModel.postShop(genId,name,title,img,price)
        return res.redirect(`/admin/shop`)
    },

    //REASON
    getReason: async(req,res) =>{
        const data = await adminModel.getReason();
        res.render('./reason/reason',{data:data} )
    },
    createReason: async(req,res) => {
        res.render('./reason/reasoncre' )
    },
    postcreReason:  async(req,res) => {
        const title = req.body.title;
        const image = req.file ;
        const data = [];
        const icon = await adminModel.checkimg(image,data)
        const des = req.body.description;
        const create =  await adminModel.postcreReason(title,icon,des);
          
        return res.redirect(`/admin/reason`)
    },
    detailReason: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data =  await adminModel.detailReason(genId)
        return res.render("./reason/reasonDetail", {reasonDetail: data[0]})
    },
    deleReason: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const dele =  await adminModel.deleReason(genId)
        res.redirect(`/admin/reason`)
        
    },
    postReason: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const title = req.body.title;
        const image =   req.file ;
        const data = await adminModel.detailReason(genId)
        const icon = await adminModel.checkimg(image,data)
        const des = req.body.description;
        const view =  await adminModel.postReason(genId,title,icon,des)
        return res.redirect(`/admin/reason`)
    },

     //TESTIMONIAL
     getTest: async(req,res) =>{
        const data = await adminModel.getTest();
        res.render('./test/test',{data:data} )
    },
    createTest: async(req,res) => {
        res.render('./test/testcre' )
    },
    postcreTest:  async(req,res) => {
        const name = req.body.name;
        const title = req.body.title;
        const des = req.body.description;
        const create =  await adminModel.postcreTest(name,title,des);
          
        return res.redirect(`/admin/test`)
    },
    detailTest: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data =  await adminModel.detailTest(genId)
        return res.render("./test/testDetail", {testDetail: data[0]})
    },
    deleTest: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const dele =  await adminModel.deleTest(genId)
        res.redirect(`/admin/test`)
        
    },
    postTest: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const title = req.body.title;
        const des = req.body.description;
        const view =  await adminModel.postTest(genId,name,title,des)
        return res.redirect(`/admin/test`)
    },

    //CONTACT
    getCtc: async(req,res) =>{
        const data = await adminModel.getCtc();
        res.render('./contact/ctc',{data:data} )
    },
    
    postCtc:  async(req,res) => {
        const name = req.body.name;
        const mail = req.body.mail;
        const phone  = parseInt(req.body.phone);
        const mess = req.body.message;
        const createCtc =  await adminModel.postCtc(name,mail,phone,mess);
          
        return res.redirect(`/`)
        
       
       
      
    
    },
    detailCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const detailCtc =  await adminModel.detailCtc(genId)
        return res.render("./contact/ctcDetail", {ctcDetail: detailCtc[0]})
    },
    deleCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleCtc =  await adminModel.deleCtc(genId)
        res.redirect(`/admin/contact`)
        
    },
    viewCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const mail = req.body.mail;
        const phone  = parseInt(req.body.phone);
        const mess = req.body.message;
       
        const viewCt =  await adminModel.viewCtc(genId,name,mail,phone,mess)
        return res.redirect(`/admin/contact`)
    },

    //SOCIAL
    getSocial: async(req,res) =>{
        const data = await adminModel.getSocial();
        res.render('./social/social',{data:data} )
    },
    createSocial: async(req,res) => {
        res.render('./social/socialcre' )
    },
    postcreSocial:  async(req,res) => {
        const name = req.body.name;
        const image = req.file ;
        const data = [];
        const icon = await adminModel.checkimg(image,data)
        const link = req.body.link;
        
        const createCtc =  await adminModel.postcreSocial(name,icon,link);
          
        return res.redirect(`/admin/social`)
    },
    detailSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data =  await adminModel.detailSocial(genId)
        return res.render("./social/socialDetail", {socialDetail: data[0]})
    },
    deleSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleCtc =  await adminModel.deleSocial(genId)
        res.redirect(`/admin/social`)
        
    },
    postSocial: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const image =   req.file ;
        const data = await adminModel.detailSocial(genId)
        const icon = await adminModel.checkimg(image,data)
        const link = req.body.link;
        const viewCt =  await adminModel.postSocial(genId,name,icon,link)
        return res.redirect(`/admin/social`)
    },
}