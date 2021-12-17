import React from 'react';
import Link from 'next/link';
 
const SignUp = () => {
    return (
        <>
            <div className="ptb-80" style={{marginTop:"-50px"}}>
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <img src="/images/Home/businees/ThamrinBrothers.png" width="300px" alt="logo" />
                            <br/><br/>
                            <p>Create a new account</p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="ConfirmPassword" />
                            </div>

                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>

                        <div className="foot">
                            <p>Already have an account yet? <Link href="/yamaha/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp;