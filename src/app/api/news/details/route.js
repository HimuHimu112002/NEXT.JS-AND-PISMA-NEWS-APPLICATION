import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function GET(req,res) {
    try{

        const prisma=new PrismaClient();

        let {searchParams} = new URL(req.url);
        let id = parseInt((searchParams.get('id'))
)
        const result=await prisma.news_list.findUnique(
            {
                where:{id: id},
                //select:{id: true, title: true, short_des: true, img1: true, img2: true, img3: true, img4: true, type: true}
            }
            )
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}