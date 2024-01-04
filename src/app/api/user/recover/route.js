import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import SendEmail from "@/utility/EmailSend";

// Send OTP TO Email
export async function POST(req,res) {
    try{
       let {searchParams}= new URL(req.url);
       let email=searchParams.get('email')

        // User Count
        const prisma = new PrismaClient();
        const count = await prisma.users.count({where:{email:email}});

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
            //let EmailSubject="News Application Verification Email"
            await SendEmail(email,EmailConde)

            return  NextResponse.json({status:"success",data:"6 Digit code has been sent", data:result})
            
        }else{

            return  NextResponse.json({status:"fail",data:"No user found"})
        }

    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}