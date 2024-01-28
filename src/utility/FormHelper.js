import toast from 'react-hot-toast';
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
class FormHelper {
    IsEmpty(value) {
        return value.length === 0;
    }
    IsMobile(value){
        return MobileRegx.test(value);
    }
    IsEmail(value) {
        return !EmailRegx.test(value);
    }
    SetEmail(value) {
        sessionStorage.setItem("email", value)
    }
    GetEmail() {
       return sessionStorage.getItem("email")
    }
    ErrorToast(msg) {
        toast.error(msg);
    }
    SuccessToast(msg) {
        toast.success(msg);
    }
}
export const {IsEmpty, IsMobile, IsEmail, ErrorToast, SuccessToast,SetEmail,GetEmail} = new FormHelper();