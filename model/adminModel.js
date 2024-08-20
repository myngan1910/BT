const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {
    //USERS
    getUsers: async() => {
        const data = await client.$queryRaw`SELECT * FROM users` 
       return data;
    },
    getUser: async(id) => {
        const data = await client.$queryRaw`SELECT role.id, role.position , "users".* FROM users
        JOIN role ON users.roleid = role.id WHERE users.id = ${id}` 
       return data;
    },
    postcreUsers : async(name,mail,phone,add,rolee) => {
    const create = await client.$queryRaw`INSERT INTO users (name,mail,phone,address,roleid) VALUES ( ${name},${mail},${phone},${add},${rolee})`;
    return create;
    },
    detailUsers: async(genId) => {
       const data = await client.$queryRaw`SELECT * FROM "users" WHERE id=${genId}`
        return data;
    },
    deleUsers: async(genId) => {
       const data = await client.$queryRaw`DELETE FROM users WHERE id=${genId}`
       return data;
    
    },
    postUsers: async(genId,name,mail,phone,add,rolee) => {
    const update = await client.$queryRaw`UPDATE "users" SET name=${name},mail=${mail},phone=${phone}, address=${add},roleid=${rolee} WHERE id = ${genId} `
    return update;
    
    },
    postLog: async() => {
        const data = await client.$queryRaw` SELECT position   FROM users `
        return data;
        
        },
        getproduct: async(genId) => {
            const data = await client.$queryRaw`SELECT * FROM "shop" WHERE id=${genId}`
             return data;
         },

    //ROLE
    getRole: async() => {
        const data = await client.$queryRaw`SELECT * FROM role`
       return data;
    },
    postRole : async(position) => {
    const create =await client.$queryRaw`INSERT INTO role (position) VALUES ( ${position})`;
    return create;
    },
    detailRole: async(genId) => {
       const data = await client.$queryRaw`SELECT * FROM "role" WHERE id=${genId}`
        return data;
    },
    deleRole: async(genId) => {
        
       const data = await client.$queryRaw`DELETE FROM users
       WHERE id IN (SELECT users.id FROM users
      JOIN role ON role.id = users.roleid
      WHERE role.id = ${genId})`;
      const dele1 = await client.$queryRaw`DELETE FROM role WHERE id=${genId}`
       return {data,dele1};
    
    },
    viewRole: async(genId,position) => {
    const update = await client.$queryRaw`UPDATE "role" SET position=${position} WHERE id = ${genId} `
    return update;
    
    },  
    postLogin: async(id) => {
        const data = await client.$queryRaw`SELECT "role".id, "role".position, "users".* FROM users 
        JOIN "role" ON "users".roleid  = "role".id
        WHERE  users.id = ${id}`
        return data;
    },  

    //HOME
    getHome: async() => {
        const data = await client.$queryRaw`SELECT * FROM home` 
       return data;
    },
    postcreHome : async(title,image,des) => {
    const create = await client.$queryRaw`INSERT INTO home (title,image,description) VALUES ( ${title},${image},${des})`;
    return create;
    },
    detailHome: async(genId) => {
       const data = await client.$queryRaw`SELECT * FROM "home" WHERE id=${genId}`
        return data;
    },
    deleHome: async(genId) => {
       const data = await client.$queryRaw`DELETE FROM home WHERE id=${genId}`
       return data;
    
    },
    postHome: async(genId,title,image,des) => {
    const update = await client.$queryRaw`UPDATE "home" SET title=${title}, image=${image},description=${des} WHERE id = ${genId} `
    return update;
    
    },

    //SHOP
    getShop: async() => {
        const data = await client.$queryRaw`SELECT * FROM shop` 
        return data;
    },
    getRearchShop: async() => {
        const data = await client.$queryRaw`SELECT shop.name FROM shop ` 
        return data;
    },
    postcreShop : async(name,title,img,price) => {
        const create = await client.$queryRaw`INSERT INTO shop (name,title,image,price) VALUES ( ${name},${title},${img},${price})`;
        return create;
    },
    detailShop: async(genId) => {
        const data = await client.$queryRaw`SELECT * FROM "shop" WHERE id=${genId}`
        return data;
        },
        deleShop: async(genId) => {
            const data = await client.$queryRaw`DELETE FROM shop WHERE id=${genId}`
            return data;
    
        },
        postShop: async(genId,name,title,img,price) => {
           const update = await client.$queryRaw`UPDATE "shop" SET name=${name},title=${title}, image=${img},price=${price} WHERE id = ${genId} `
           return update;
    
        },

        // REASON
        getReason: async() => {
            const data = await client.$queryRaw`SELECT * FROM reason` 
            return data;
        },
        postcreReason : async(title,icon,des) => {
            const create = await client.$queryRaw`INSERT INTO reason (title,icon, description) VALUES ( ${title},${icon},${des})`;
            return create;
        },
        detailReason: async(genId) => {
            const data = await client.$queryRaw`SELECT * FROM "reason" WHERE id=${genId}`
            return data;
            },
            deleReason: async(genId) => {
                const data = await client.$queryRaw`DELETE FROM reason WHERE id=${genId}`
                return data;
        
            },
            postReason: async(genId,title,icon,des) => {
               const update = await client.$queryRaw`UPDATE "reason" SET title=${title}, icon=${icon},description=${des} WHERE id = ${genId} `
               return update;
        
            },



            // TESTIMONIAL
        getTest: async() => {
            const data = await client.$queryRaw`SELECT * FROM testimonial` 
            return data;
        },
        postcreTest : async(name,title,des) => {
            const create = await client.$queryRaw`INSERT INTO testimonial (name,title, description) VALUES ( ${name},${title},${des})`;
            return create;
        },
        detailTest: async(genId) => {
            const data = await client.$queryRaw`SELECT * FROM "testimonial" WHERE id=${genId}`
            return data;
            },
            deleTest: async(genId) => {
                const data = await client.$queryRaw`DELETE FROM testimonial WHERE id=${genId}`
                return data;
        
            },
            postTest: async(genId,name,title,des) => {
               const update = await client.$queryRaw`UPDATE "testimonial" SET name=${name}, title=${title},description=${des} WHERE id = ${genId} `
               return update;
        
            },


             //CONTACT

            getCtc: async() => {
                const data = await client.$queryRaw`SELECT * FROM contact`  
                return data;
            },
            postCtc : async(name,mail,phone,mess) => {
                const createctc = await client.$queryRaw`INSERT INTO contact (name,mail,phone,message) VALUES ( ${name},${mail},${phone},${mess})`;
                return createctc;
            },
            detailCtc: async(genId) => {
            const data = await client.$queryRaw`SELECT * FROM "contact" WHERE id=${genId}`
            return data;
            },
            deleCtc: async(genId) => {
                const data = await client.$queryRaw`DELETE FROM contact WHERE id=${genId}`
                return data;

            },
            viewCtc: async(genId,name,mail,phone,mess) => {
                const update = await client.$queryRaw`UPDATE "contact" SET name=${name}, mail=${mail},phone=${phone},message=${mess} WHERE id = ${genId} `
                return update;

            },

            //SOCIAL
            getSocial: async() => {
                const data = await client.$queryRaw`SELECT * FROM social` 
                return data;
            },
            postcreSocial : async(name,icon,link) => {
                const create = await client.$queryRaw`INSERT INTO social (name,icon,link) VALUES ( ${name},${icon},${link})`;
                return create;
            },
            detailSocial: async(genId) => {
                const data = await client.$queryRaw`SELECT * FROM "social" WHERE id=${genId}`
                return data;
                },
                deleSocial: async(genId) => {
                    const data = await client.$queryRaw`DELETE FROM social WHERE id=${genId}`
                    return data;
            
                },
                postSocial: async(genId,name,icon,link) => {
                   const updateskill = await client.$queryRaw`UPDATE "social" SET name=${name}, icon=${icon},link=${link} WHERE id = ${genId} `
                   return updateskill;
            
                },



    checkimg: async (image,data) => {
        var img = null;
        if(image == undefined){
            if(data.length != 0){
               img = data[0].image || data[0].avata;

            }else {
               img = "assets/uploads/icon-04.png" 
            }

        }else {
            img = "assets/uploads/" + image.filename;
        }
        return img;
    }
}