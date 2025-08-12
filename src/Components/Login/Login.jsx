import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import Authcontext from '../../Provider/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';


const Login = () => {
    const{SignIn,LoginInWithGoogle}=useContext(Authcontext)
    const provider = new GoogleAuthProvider();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const Location = useLocation();
    const navigate=useNavigate();




    const handleLogin=e=>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
       
        SignIn(email,password)
        .then((res) => {
            toast("Login Successful")

            const useremail=res.user.email
            const userData = {
                email: useremail,
                enrolledcourses: [],
              };

            axios.post('http://localhost:3000/login',userData)
            .catch(err => console.error('Failed to store user on backend:', err));

            setTimeout(() => {
                navigate(`${location.state ? location.state : "/"}`)
              }, 1500);
            
        })
        .catch((error) => {
            toast.error("Login Failed");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }

    const handleGoogleSignIn = () => {
       
        LoginInWithGoogle(provider)
            .then(() => {
                toast.success("Google Login Successful");
                setTimeout(() => {
                    navigate(`${location.state ? location.state : "/"}`)
                  }, 1500);    
            })
            .catch(error => {
                toast.error("Google Sign-In Failed");
                console.log(error);
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
        <Helmet>
          <title>Login</title>
        </Helmet>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           
           <form onSubmit={handleLogin} className="card-body">
               <h2 className='mx-5 text-center text-xl font-semibold'>Login In Your Account </h2>
               <fieldset className="fieldset">
                   <label className="label">Email</label>

                   <input type="email" name='email' className="input" placeholder="Email" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}    />
                   <label className="label">Password</label>

                   
                   <div className='relative w-[95%]'>
                       <input className='w-full hover:border-white border-[1px] border-gray-400 rounded-sm py-[10px] px-3 text-[14px]'
                           type={show ? "text" : "password"}
                           name='password'
                           required
                           placeholder="Password"
                       />
                       <a className=' absolute top-3 right-3' onClick={() => { setShow(!show) }}>
                           {
                               show ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />
                           }
                       </a>
                   </div>

                   <div><a className="link link-hover">Forgot password?</a></div>

                   <button type='submit' className="btn btn-neutral mt-4">Login</button>

                   <p className='text-[15px]'>Don't have an account? <Link to={"/auth/register"} className='text-secondary'>Register</Link></p>

                   <button onClick={handleGoogleSignIn} className='btn btn-neutral mt-4'>Sign in with Google</button>
                   <ToastContainer />
               </fieldset>
           </form>
       </div>
   </div>
    );
};

export default Login;