import authImg from '../../assets/others/authentication2.png'
// import authBg from '../../assets/others/authentication.png'
import { Link,  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import SocialLogin from '../../components/SocialLogin';

const Signup = () => {
    const {signUp,updateUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        signUp(data.email,data.password)
        .then((result)=>{
          const currentUser=result.user;
          console.log(currentUser);
          
          Swal.fire({
            icon: 'success',
            title: 'SignUp succesfully',
          })
          updateUser(data.name,data.photo)
          .then(() => {
            console.log("Profile updated!");
            const user={email:data.email,name:data.name}
            fetch('http://localhost:5000/users',{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
              if(data.insertedId){
                console.log("added in user api");
              }
            })

            navigate('/')
            // ...
          }).catch((error) => {
            console.error(error.message);
            // ...
          });
        })
        .catch(error=>{
          console.error(error.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
          })
        })
    }
  return (
    <div >
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={authImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name='name' {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && <span className="label-text text-red-500">This field is required*</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name='email'
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && <span className="label-text text-red-500">This field is required*</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                   {...register("password", { required: true , maxLength: 20,minLength :6 ,pattern :/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && <span className="label-text text-red-500">This field is required*</span>}
                {errors.password?.type === 'minLength' && <span className="label-text text-red-500">password must be 6 characters required*</span>}
                {errors.password?.type === 'maxLength' && <span className="label-text text-red-500">password must be less then 20 characters required*</span>}
                {errors.password?.type === 'pattern' && <span className="label-text text-red-500">password must have one upperCase one lowercasw and one number required*</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name='photo' {...register("photo", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && <span className="label-text text-red-500">This field is required*</span>}
              </div>
              <div className="form-control mt-6">
                <button type='submit'  className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <div className='card-body pt-1'>
                <Link to='/login'><span>Already registered? Go to log in</span></Link>
                <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
