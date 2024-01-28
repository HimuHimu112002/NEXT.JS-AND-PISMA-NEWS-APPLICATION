import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import SendEmail from "@/utility/EmailSend";

export async function POST(req,res) {
    try{
        
        const prisma = new PrismaClient();
        let {email}=await req.json();
        // let {searchParams}= new URL(req.url);
        // let email=searchParams.get('email')
        const count = await prisma.users.count({where:{email:email}});
        console.log(count)
        if(count === 1){
           let code = Math.floor(100000+Math.random()*900000);
            const result = await prisma.users.update(
                {
                    where:{email:email},
                    data:{otp:code.toString()}
                }
            );

            // Send Email
            let EmailConde=`Your Code Is ${code}`;
           // await SendEmail(count,EmailConde)
            return  NextResponse.json({status:"success",data:"6 Digit code has been sent", data:result})
        }else{
            return  NextResponse.json({status:"fail",data:"No user found"})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}

// export async function POST(req,res) {
//     try{

//         let reqBody=await req.json();
//         const prisma=new PrismaClient();
//         const result=await prisma.users.findUnique({where:reqBody})
//         console.log(result)
//         if(!'id' in result){
//             NextResponse.json({status:"success",data:result})
//         }
//     }
//     catch (e) {
//         return  NextResponse.json({status:"fail error",data:e.toString()})
//     }
// }