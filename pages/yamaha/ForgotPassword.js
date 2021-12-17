import React from 'react';
import Link from 'next/link';
 
const ForgotPassword = () => {
    return (
        <>
            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <img src="/images/Home/businees/ThamrinBrothers.png" width="300px" alt="logo" />
                            <br/><br/>
                            <p>Masukan E-Mail anda, agar kami dapat mengirim Link Reset Password</p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Kirim Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;