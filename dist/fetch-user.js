"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['info', 'query'] });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
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
        const users = yield prisma.post.updateMany({
            where: {
                published: true
            },
            data: {
                published: false
            }
        });
        console.log(users);
    });
}
main().then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
})).catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
