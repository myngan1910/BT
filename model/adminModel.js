const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {
    //USERS
    getUsers: async() => {
        const data = await client.users.findMany(); 
       return data;
    },
    getUser: async(id) => {
        
        const data = await client.users.findUnique({
            where: {id:id},
            select: {
                id: true,
                name: true,
                mail: true,
                role: {
                    select: {
                        id: true,
                        position: true
                    }
                }
            }


        })
       return data;
    },
    postcreUsers : async(name,mail,phone,add,rolee) => {
    const create = await client.users.create({
        data : {
            name: name,
            mail: mail,
            phone: phone,
            address: add,
            roleid: rolee

        }
    })
    return create;
    },
    detailUsers: async(genId) => {
       const data = await client.users.findUnique({
        where: {
            id: genId
        }
       })
       console.log(data)
        return data;
    },
    deleUsers: async(genId) => {
       const data = await client.users.deleteMany({where: {id:genId}})
       return data;
    
    },
    postUsers: async(genId,name,mail,phone,add,rolee) => {
    const update = await client.users.update({
        where: {id:genId},
        data:{
            name: name,
            mail: mail,
            phone: phone,
            address: add,
            roleid: rolee

        }
    })
    return update;
    
    },
   
     getproduct: async(genId) => {
            const data = await client.shop.findMany({ where: {id:genId}})
             return data;
         },

    //ROLE
    getRole: async() => {
        const data = await client.role.findMany();
       return data;
    },
    postRole : async(position) => {
    const create =await client.role.create({
        data: {
            position: position
        }
    })
    return create;
    },
    detailRole: async(genId) => {
       const data = await client.role.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    deleRole: async(genId) => {
        
        const data = await client.users.deleteMany({
            where: {
                roleid: genId
            }
        });
      const dele1 = await client.role.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    viewRole: async(genId,position) => {
    const update = await client.role.update({
        where: {id:genId},
        data: {position:position}
    })
    return update;
    
    },  
    postLogin: async(id) => {
        const data = await client.users.findUnique({
            where: {id:id},
            select: {
                id: true,
                name: true,
                mail: true,
                phone: true,
                address: true,
                role: {
                    select: {
                        position: true
                
                    }
                }

            }

        })
        return data;
    },  

    //HOME
    getHome: async() => {
        const data = await client.home.findMany();
       return data;
    },
    postcreHome : async(title,image,des) => {
    const create = await client.home.create({
        data: {
            title:title,
            image:image,
            description:des
        }
    })
    return create;
    },
    detailHome: async(genId) => {
       const data = await client.home.findUnique({
        where: {id:genId}
       })
        return data;
    },
    deleHome: async(genId) => {
       const data = await client.home.deleteMany({where: {id:genId}})
       return data;
    
    },
    postHome: async(genId,title,image,des) => {
    const update = await client.home.update({
        where: {id: genId},
        data: {
            title: title,
            image:image,
            description:des
        }
    })
    return update;
    
    },

    //SHOP
    getShop: async() => {
        const data = await client.shop.findMany(); 
        return data;
    },
  
    postcreShop : async(name,title,img,price) => {
        const create = await client.shop.create({
            data: {
                name: name,
                title: title,
                image: img,
                price: price
            }
        })
        return create;
    },
    detailShop: async(genId) => {
        const data = await client.shop.findUnique({where: {id:genId}})
        return data;
        },
    deleShop: async(genId) => {
            const data = await client.shop.deleteMany({where: {id:genId}})
            return data;
    
        },
    postShop: async(genId,name,title,img,price) => {
           const update = await client.shop.update({
            where: {id:genId},
            data: {
                name: name,
                title: title,
                image: img,
                price: price
            }
           })
           return update;
    
        },

        // REASON
        getReason: async() => {
            const data = await client.reason.findMany();
            return data;
        },
        postcreReason : async(title,icon,des) => {
            const create = await client.reason.create({
                data: {
                    title: title,
                    icon: icon,
                    description: des
                }
            })
            return create;
        },
        detailReason: async(genId) => {
            const data = await client.reason.findUnique({where: {id:genId}})
            return data;
            },
            deleReason: async(genId) => {
                const data = await client.reason.deleteMany({where:{id:genId}})
                return data;
        
            },
            postReason: async(genId,title,icon,des) => {
               const update = await client.reason.update({
                where: {id:genId},
                data: {
                    title: title,
                    icon: icon,
                    description: des
                }
               })
               return update;
        
            },



            // TESTIMONIAL
        getTest: async() => {
            const data = await client.testimonial.findMany()
            return data;
        },
        postcreTest : async(name,title,des) => {
            const create = await client.testimonial.create({
                data: {
                    name: name,
                    title: title,
                    description: des
                }
            })
            return create;
        },
        detailTest: async(genId) => {
            const data = await client.testimonial.findUnique({where: {id:genId}})
            return data;
            },
            deleTest: async(genId) => {
                const data = await client.testimonial.deleteMany({where: {id:genId}})
                return data;
        
            },
            postTest: async(genId,name,title,des) => {
               const update = await client.testimonial.update({
                where: {id:genId},
                data: {
                    name:name,
                    title: title,
                    description: des
                }
               })
               return update;
        
            },


             //CONTACT

            getCtc: async() => {
                const data = await client.contact.findMany() 
                return data;
            },
            postCtc : async(name,mail,phone,mess) => {
                const createctc = await client.contact.create({
                    data:{
                        name:name,
                        mail:mail,
                        phone: phone,
                        message:mess
                    }
                })
                return createctc;
            },
            detailCtc: async(genId) => {
            const data = await client.contact.deleteMany({where: {id:genId}})
            return data;
            },
            deleCtc: async(genId) => {
                const data = await client.contact.findUnique({where: {id:genId}})
                return data;

            },
            viewCtc: async(genId,name,mail,phone,mess) => {
                const update = await client.contact.update({
                    where: {id:genId},
                    data: {
                        name: name,
                        mail: mail,
                        phone: phone,
                        message: mess
                    }
                })
                return update;

            },

            //SOCIAL
            getSocial: async() => {
                const data = await client.social.findMany();
                return data;
            },
            postcreSocial : async(name,icon,link) => {
                const create = await client.social.create({
                    data: {
                        name: name,
                        icon: icon,
                        link: link
                    }
                })
                return create;
            },
            detailSocial: async(genId) => {
                const data = await client.social.findUnique({where: {id:genId}})
                return data;
                },
                deleSocial: async(genId) => {
                    const data = await client.social.deleteMany({where: {id:genId}})
                    return data;
            
                },
                postSocial: async(genId,name,icon,link) => {
                   const update = await client.social.update({
                    where: {id:genId},
                    data: {
                        name: name,
                        icon: icon,
                        link: link
                    }
                   })
                   return update;
            
                },



    checkimg: async (image,data) => {
        var img = null;
        if(image == undefined){
            if(data.length != 0){
               img = data.image || data.avata;

            }else {
               img = "assets/uploads/icon-04.png" 
            }

        }else {
            img = "assets/uploads/" + image.filename;
        }
        return img;
    }
}