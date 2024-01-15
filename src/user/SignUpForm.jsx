import SubmitButton from '@/components/master/SubmitButton';
import Link from 'next/link';
import React from 'react';

const SignUpForm = () => {
    return (
        <div>
            <div className="row h-100 justify-content-center center-screen">
                <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                    <div className="card container-fluid animated fadeIn p-5 gradient-bg">
                        <div className="row ">
                            <h5 className="mb-1 mx-0 px-0">User Registration</h5>

                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">First Name</label>
                                <input value={""} onChange={""} type="text" className="form-control"/>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">Last Name</label>
                                <input value={""} onChange={""} type="text" className="form-control"/>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">Mobile</label>
                                <input value={""} onChange={""} type="text" className="form-control"/>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">Email</label>
                                <input value={""} onChange={""} type="email" className="form-control"/>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <label className="form-label">Password</label>
                                <input value={""} onChange={""} type="password" className="form-control"/>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <SubmitButton className="btn btn-danger w-100 mt-3" submit={""} onClick={""} text="Sign
                            Up"/>
                            <Link href="/user/login" className="nav-link mx-2">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;