import { useContext, useState } from "react";
import { AuthContex } from "../componets/AuthProvider";


const Register = () => {
  const {registerUser, SetUser} = useContext(AuthContex);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleRegister = (e) => {
   
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if(!/gmail\.com$/.test(email)){
      setEmailError('please Email must end with @gmail.com')
      return;
    }
    if(password.length<6){
      setError('password must be 6 character');
      return;
    }
    if(password !== confirmPassword){
      setError('password did not match');
      return;
    }
    if(!/\d{2,}$/.test(password)){
      setError('password must be end with at least 2 numbures')
    }
    // if(!/[@#%$*]/.test(password)){
    //   setError('plese add a special character like @,$,%,*,#')
    //   return;
    // }
    setError('')
    setEmailError('')
    console.log(name, photo, email, password, confirmPassword);
    registerUser(email,password)
    .then(result => {
      SetUser(result.user)
    })
    .catch(error =>{
      setError(error.message.split("/").join(""))
    } )
  }
  return (
    <div className="w-[40%] mx-auto min-w-[500px] bg-gray-400 p-10 rounded-xl">
       <form onSubmit={handleRegister}>
          <div>
            <p>Name</p>
            <input type="text" name="name" placeholder="Type here" className="input w-full " />
          </div>
          <div>
            <p>Photo</p>
            <input type="text" name="photo" placeholder="Type here" className="input w-full" />
          </div>
          <div>
            <p>Email</p>
            <input type="email" name="email" placeholder="Type here" className="input w-full" />
          </div>
          {
            emailError && <small className="text-red-600 font-medium text-lg">{emailError}</small>
          }
          <div>
            <p>Password</p>
            <input type="password" name="password" placeholder="Type here" className="input w-full" />
          </div>
          <div>
            <p>Confirm password</p>
            <input type="password" name="confirmPassword" placeholder="Type here" className="input w-full" />
          </div>
          {
            error && <small className="text-red-600 font-bold text-lg">{error}</small>
          }
          <button type="submit" className="btn btn-primary w-full mt-10">Register</button>
       </form>
    </div>
  );
};

export default Register;