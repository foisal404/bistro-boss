import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleGoogle=()=>{
        googleSignIn()
        .then((result) => {
            const currentUser = result.user;
            console.log(currentUser);
            const user={email:currentUser.email,name:currentUser.displayName}
            fetch('http://localhost:5000/users',{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("added in user api",data);
               navigate('/')
            })

          }).catch((error) => {
            console.error(error.message);
          });
    }
  return (
    <div>
      <div className="divider"></div>
      <div className="text-center">
        <button className="btn btn-circle btn-outline" onClick={handleGoogle}>
            <FcGoogle/>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
