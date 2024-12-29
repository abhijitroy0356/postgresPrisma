import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query']})

async function main() {

    const filter1= await prisma.post.findMany({
        take:1,
        skip:1
    })
    console.log(filter1)
}

main()