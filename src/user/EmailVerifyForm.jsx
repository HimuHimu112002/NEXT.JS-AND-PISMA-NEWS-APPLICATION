"use client"
import {useState} from "react";
import {ErrorToast, IsEmail, IsEmpty, SetEmail, SuccessToast} from "@/utility/FormHelper";
import SubmitButton from "@/components/master/SubmitButton";
import { useRouter } from "next/navigation";
const EmailVerifyForm = () => {
    let router = useRouter()
    let [data, setData] = useState({email:""});
    const [submit, setSubmit] = useState(false);

    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }

    const formSubmit =async (e) => {
      e.preventDefault();
      if(IsEmail(data.email)){
          ErrorToast("Valid Email Address Required")
      }
      else{
          setSubmit(true);

          const options = {
              method: 'POST',
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              body: JSON.stringify(data)
            }

          let res = (await fetch("/api/user/recover",options));
          let ResJson=await res.json();

          setSubmit(false);

          if(ResJson['status']==="success"){
              SuccessToast("Valid Email Success")
              SetEmail(data.email)
              router.replace("/user/otpVerify")
          }
          else{
              ErrorToast("Request Fail")
          }

      }
    }

    return (
       <div className="row h-100 justify-content-center center-screen">
           <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
               <form onSubmit={formSubmit} className="card animated fadeIn p-5 gradient-bg">

                   <h5 className="mb-3">Enter Your valid Email</h5>
                   <label className="form-label">User Email</label>
                   <input onChange={(e)=>{inputOnChange("email",e.target.value)}} type="email" className="form-control mb-2"/>
                   <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Email Verify"/>
               </form>
           </div>
       </div>
    );
};
export default EmailVerifyForm;
