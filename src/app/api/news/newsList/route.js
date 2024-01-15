import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req,res) {
    try{
        let reqBody = await req.json();
        const prisma=new PrismaClient();

        const result = await prisma.news_list.create({data:reqBody})
        console.log("hhhh",result)
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}

export async function GET(req,res) {
    try{
        
        const prisma=new PrismaClient();
        const result = await prisma.news_list.findMany()
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}