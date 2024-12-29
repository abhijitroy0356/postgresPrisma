import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info', 'query']})

async function main() {
    /*const user = await prisma.user.findMany({
        where:{
            email:'abhijit2919@gmail.com'
        }
    });
    console.log(user);   
    const users = await prisma.user.findUnique({
        where:{
            id: 1
        },
        include:{
            post:false
        }
    }) 

    const users = await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name:'godsvision'
        }
    })*/
   const users = await prisma.post.updateMany({
        where:{
            published:true
        },
        data:{
            published:false
        }
   })
    console.log(users)
}

main().then(async()=>{
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1) 
})