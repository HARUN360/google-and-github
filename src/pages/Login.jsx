import { useContext, useEffect } from "react";
import { AuthContex } from "../componets/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const {loginUser, googleLogin,facebookLogin ,SetUser, user} = useContext(AuthContex);
  const locattion = useLocation()
  const navigate = useNavigate()
  console.log(locattion);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
    console.log(email, password,);
  }
  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result => SetUser(result.user))
    .catch(error => console.error(error))
  }
  const handleFacebookleLogin = () =>{
    facebookLogin()
    .then(result => SetUser(result.user))
    .catch(error => console.error(error))
  }
  useEffect(()=> {
    if(user){
      navigate(locattion.state)
    }
  },[user])
  return (
    <div className="w-[40%] mx-auto min-w-[500px] bg-gray-400 p-10 rounded-xl">
       <form onSubmit={handleLogin}>
          <div>
            <p>Email</p>
            <input type="email" name="email" placeholder="Type here" className="input w-full" />
          </div>
          <div>
            <p>Password</p>
            <input type="password" name="password" placeholder="Type here" className="input w-full" />
          </div>
       
          <button type="submit" className="btn btn-primary w-full mt-10">Login</button>
       </form>
       <div className="text-center">
       <button onClick={handleGoogleLogin} className="btn btn-secondary mt-10">Google Login</button>
       <button onClick={handleFacebookleLogin} className="btn btn-secondary mt-10">FaceBook Login</button>
       </div>
    </div>
  );
};

export default Login;