const {PrismaClient, Prisma} = require('@prisma/client');
const client = new PrismaClient();

module.exports = {
    postLogin: async(name,mail) =>{
        const users = await client.$queryRaw`SELECT id,  name, mail  FROM "users"  WHERE name = ${name} AND mail = ${mail} `
        return users;

    }
}