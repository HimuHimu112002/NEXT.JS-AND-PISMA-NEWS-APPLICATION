import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {CreateToken} from "@/utility/JWTToken";

export async function POST(req,res) {
    try{

        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.users.findUnique({where:reqBody})

        if(!'id' in result){
            return  NextResponse.json({status:"success",data:result})
        }else {
            let token =await CreateToken(result['email'],result['id'],result['firstName'])
            const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
            const cookieString = `token=${token}; expires=${expirationDate}; path=/`;
           return  NextResponse.json({status:"success",data:token}, {status:200,headers:{'set-cookie':cookieString}})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail error",data:e.toString()})
    }
}

export async function GET(req,res) {
    const expirationDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const response = NextResponse.redirect(new URL('/', req.url), 303)
    response.cookies.set('token', '',{ expires: expirationDate})
    //const cookieString = `token=${""}; expires=${expirationDate}; path=/`;
    //return NextResponse.json({status:"success",data:""}, {status:200,headers:{'set-cookie':cookieString}})
    return response
}