import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { useRouter } from "next/router";

//sweet alert
import swal from 'sweetalert';

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState("");
    const router = useRouter();
    
    const submitHandler = async (event) => {
        event.preventDefault();
        setEmail(event.target.email.value);
        setPass(event.target.pass.value);
        const res = await fetch("/api/auth/login", {
            body: JSON.stringify({
                partner: "yamaha",
                email: email,
                pass: pass,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        // console.log("res", res.S);
        if (res.ok) {
            swal("Anda Berhasil Login", "Selamat Datang", "success");
            router.push("/yamaha");
        } else {
            swal("Anda Gagal Login", "Silahkan Cek Username dan Password Anda", "error");
            router.push("/yamaha/login")
        }
    };

    return (
        <>
            <div className="ptb-80" style={{ marginTop: "-50px" }}>
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <img src="/images/Home/businees/ThamrinBrothers.png" width="300px" alt="logo" />
                            <br /><br />
                            <p>Tidak Punya Akun ? Silahkan <Link href="/yamaha/Register">Register</Link></p>
                        </div>

                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="email"
                                    inputProps={{
                                        type: "email",
                                        name: "email",
                                        onChange: (event) => setEmail(event.target.value),
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="pass"
                                    inputProps={{
                                        name: "pass",
                                        onChange: (event) => setPass(event.target.value),
                                        type: "password",
                                        autoComplete: "off",
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <p><Link href="/yamaha/ForgotPassword"><a>Lupa Password</a></Link></p>
                            </div>

                            <button type="submit" href="/yamaha" className="btn btn-primary">Login</button>
                        </form>

                        <div className="foot">
                            <p>or connect with</p>
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                                        <Icon.Mail />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;