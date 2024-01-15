import SubmitButton from '@/components/master/SubmitButton';
import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <div className="row h-100 justify-content-center center-screen">
<div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
<form onSubmit={""} className="card animated fadeIn p-5 gradient-bg">
<h5 className="mb-3">User Login</h5>
<label className="form-label">User Email</label>
<input value={""} onChange={""} type="email" className="form-control mb-2"/>
<label className="form-label">User Password</label>
<input value={""} onChange={""} type="password" className="form-control mb-1"/>
<SubmitButton className="btn btn-danger mt-3" submit={""} text="Login"/>
<div className="my-3 d-flex">
<Link href="/user/registration" className="nav-link mx-2">Sign Up |</Link>
<Link href="/user/emailVerify" className="nav-link">Forget Password</Link>
</div>
</form>
</div>
</div>

        </div>
    );
};

export default LoginForm;