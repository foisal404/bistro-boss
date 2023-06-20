import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import AuthenImg from '../../../assets/others/authentication2.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import SocialLogin from "../../../components/SocialLogin";


const Login = () => {
  const {signIn}=useContext(AuthContext)
  const [disable,setDisable]=useState(true);
  const location=useLocation();
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || "/";
  // console.log(location);

  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])

  const handleOnchangeCaptcha=(event)=>{
    // console.log(event.target.value);
    if(validateCaptcha(event.target.value)){
      setDisable(false)
    }
    else{
      setDisable(true)
    }
  }
  
  
  const handleForm=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    // console.log(email,password);
    signIn(email,password)
    .then((result)=>{
      const currentUser=result.user;
      console.log(currentUser);
      Swal.fire({
        icon: 'success',
        title: 'Login succesfully',
      })
      navigate(from)
    })
    .catch(error=>{
      console.error(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.message.slice(17)}`,
      })
    })

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
            <img src={AuthenImg} alt="" />
          </div>
          <div  className="card flex-shrink-0 w-full max-w-sm ">
            <h1  className="text-5xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleForm} className="card-body pb-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name='password'
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <label >
                  <span className="label-text">reCaptcha onblur</span>
                </label>
                <input
                  type="text"
                  placeholder="type the captcha above"
                  name='captcha'
                  onBlur={handleOnchangeCaptcha}
                  className="input input-bordered"
                />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit' disabled={disable}>Sign in</button>
              </div>
            </form>
            <div className='card-body pt-1'>
              <label className="label">
                  <Link to='/signup' className="label-text-alt link link-hover">
                    New here? Create a New Account
                  </Link>
              </label>
                  <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
