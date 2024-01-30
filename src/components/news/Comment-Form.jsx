"use client"
import {useState} from "react";
import {ErrorToast, IsEmail, IsEmpty, SuccessToast} from "@/utility/FormHelper";
import SubmitButton from "@/components/master/SubmitButton";
import { useRouter } from "next/navigation";

const CommentForm = (props) => {
    //let router = useRouter()
    let [data, setData] = useState({postID:parseInt(props.postID), des:""});
    const [submit, setSubmit] = useState(false);
    console.log(props.postID)
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit =async (e) => {
      e.preventDefault();
      if(IsEmpty(data.des)){
          ErrorToast("Please Write Your's Comments")
      }
      else{
          setSubmit(true);
        //   const options = {
        //       method: 'POST',
        //       headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        //       body: JSON.stringify(data)
        //     }

        //   let ResJson=await res.json();
        const option = {method: 'POST',body: JSON.stringify(data)}
        let res = (await fetch("/api/comments/manage",option)).json();
        setSubmit(false);

          if(res['status'] === "success"){
            SuccessToast("Comments Create success")
          }
          else{
            ErrorToast("Request Fail")
          }

      }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-4">
                    <h5 className="mb-3">Write Yours valuable comments
                     </h5>
                     <form onSubmit={formSubmit}>
                        <textarea rows={6}  onChange={(e)=>{inputOnChange("des",e.target.value)}} type="text" className="form-control mb-2"/>

                        <SubmitButton className="btn btn-danger mt-3" submit={submit} text="Submit"/>
                     </form>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;