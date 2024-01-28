"use client"
import {useState} from "react";
import {ErrorToast, IsEmail, IsEmpty, SetEmail, SuccessToast} from "@/utility/FormHelper";
import SubmitButton from "@/components/master/SubmitButton";
import { useRouter } from "next/navigation";

const PinVerifyForm = () => {
    let router = useRouter()
    const [data, setData] = useState({email:"",otp:""});
    const [submit, setSubmit] = useState(false);
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = async (e) => {
      e.preventDefault();
      if(IsEmpty(data.email)){
          ErrorToast("Valid Email Required")
      }
      else{
          setSubmit(true)
          const options = {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          }

        let res=await fetch("/api/user/otpVerify",options);
        
        console.log(res)
        let ResJson=await res.json();

        setSubmit(false);

        if(ResJson['status']==="success"){
            SuccessToast("Otp Verify Success")
            router.replace("/user/resetPassword")

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
                   <h5 className="mb-3">Verification PIN</h5>
                   <label className="form-label">Email</label>
                   <input onChange={(e)=>{inputOnChange("email",e.target.value)}} type="email" className="form-control mb-2"/>

                   <label className="form-label">6 Digit Code</label>
                   <input onChange={(e)=>{inputOnChange("otp",e.target.value)}} type="number" className="form-control mb-2"/>
                   <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Verify"/>
               </form>
           </div>
       </div>
    );
};
export default PinVerifyForm;
