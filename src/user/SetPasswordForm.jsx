"use client"
import {useState} from "react";
import {ErrorToast,IsEmpty} from "@/utility/FormHelper";
import SubmitButton from "@/components/master/SubmitButton";

const SetPasswordForm = () => {
    const [data, setData] = useState({Email:"", otp:"",password:"",});
    const [submit, setSubmit] = useState(false);

    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }

    const formSubmit = async (e) => {
      e.preventDefault();
    //   if(IsEmpty(data.Email)){
    //       ErrorToast("Confirm Email Required")
    //   }
    //   else if(IsEmpty(data.otp)){
    //       ErrorToast("Valid otp required")
    //   }
      if(IsEmpty(data.password)){
          ErrorToast("password required")
      }
      
      else{
          setSubmit(true)
          const options = {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          }

        let res=await fetch("/api/user/resetPassword",options);
        let ResJson=await res.json();

        setSubmit(false);

        if(ResJson['status']==="success"){
            SuccessToast("Valid Email Success")
            router.replace("/user/login")
          //   window.location.href="/";
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

                   <h5 className="mb-3">Set Password</h5>
                   {/* <label className="form-label">Email</label>
                   <input onChange={(e)=>{inputOnChange("Email",e.target.value)}} type="Email" className="form-control mb-2"/>


                   <label className="form-label">OTP</label>
                   <input onChange={(e)=>{inputOnChange("otp",e.target.value)}} type="number" className="form-control mb-2"/> */}

                   <label className="form-label">Password</label>
                   <input onChange={(e)=>{inputOnChange("password",e.target.value)}} type="password" className="form-control mb-1"/>

                   {/* <label className="form-label">Confirm Password</label>
                   <input onChange={(e)=>{inputOnChange("c_password",e.target.value)}} type="password" className="form-control mb-1"/> */}

                   <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Confirm"/>

               </form>
           </div>
       </div>
    );
};
export default SetPasswordForm;