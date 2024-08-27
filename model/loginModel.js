const {PrismaClient, Prisma} = require('@prisma/client');
const client = new PrismaClient();

module.exports = {
    postLogin: async(name,mail) =>{
        const users = await client.users.findMany({
            where: {
                AND: [
                    { name: name },
                    { mail: mail }
                ]
            },
            select: {
                id: true,
                name: true,
                mail: true
            }
        });       
         return users;

    }
}