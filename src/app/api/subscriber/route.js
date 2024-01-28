import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req,res) {
    try{
        
        let reqBody = await req.json();
        const prisma=new PrismaClient();
        let EmailExist = await prisma.subscribers.count({where:reqBody})

        if(EmailExist === 0){
            const result=await prisma.subscribers.create({data:reqBody})
            return  NextResponse.json({status:"success",data:result})
        }else{
            return  NextResponse.json({status:"fail",massage:"this email already in used"})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}