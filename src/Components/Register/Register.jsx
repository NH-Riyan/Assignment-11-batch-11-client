import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Register = () => {
    const [show, setShow] = useState(false);
    const [password1,setPassword1]=useState('')
    const navigate=useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password1 = e.target.password1.value;
        const password2 = e.target.password2.value;
        const photo = e.target.photo.value;

        if(password1 === password2){
        console.log(name,email,password1,password2,photo)
        navigate('/auth/login')
        }
        else{
            alert("password did not match")
        }

    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <Helmet>
               <title>Registration</title>
             </Helmet>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <form onSubmit={handleRegister} className="card-body">
                    <h2 className='mx-5 text-center text-xl font-semibold'>Create New Account </h2>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />

                        
                        <label className="label">Your Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        
                        <label className="label">Password</label>
                        <div className='relative w-[95%]'>
                            <input className='w-full  border-[1px] border-gray-400 rounded-sm py-[10px] px-3 text-[14px]'
                                type={show ? "text" : "password"}
                                name='password1'
                                required
                                placeholder="Password"
                                minLength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                                onChange={(e) => setPassword1(e.target.value)}
                            />
                            <a className=' absolute top-3 right-3  cursor-pointer' onClick={() => { setShow(!show) }}>
                                {
                                    show ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />
                                }
                            </a>
                        </div>
                        <label className="label">Confirm Password</label>
                        <div className='relative w-[95%]'>
                            <input className='w-full  border-[1px] border-gray-400 rounded-sm py-[10px] px-3 text-[14px]'
                                type={show ? "text" : "password"}
                                name='password2'
                                required
                                placeholder="Password"
                                disabled={!password1}
                            />
                            <a className=' absolute top-3 right-3  cursor-pointer' onClick={() => { setShow(!show) }}>
                                {
                                    show ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />
                                }
                            </a>
                        </div>
                       

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                       

                        <p className='text-[15px]'>Already have an account? <Link to={"/auth/login"} className='text-secondary'>Login</Link></p>

                       {/* <button type="button" onClick={handleGoogleSignIn} className='btn btn-neutral mt-4'>Sign in with Google</button>   */}
                       
                    </fieldset>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;