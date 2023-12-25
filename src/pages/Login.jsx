import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const {login,logInWithGoogle}=useContext(AuthContext);
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log('submitted');
        const email=e.target.email.value;
        const password=e.target.password.value;
        login(email,password)
        .then((res)=>{
            console.log(res.user);
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    const handleloginWithGoogle=()=>{
        logInWithGoogle()
        .then((res)=>{
            console.log(res.user);
            toast.success('Successfully Logged in with Google');
        })
        .catch((error)=>{
            console.log(error);
            toast.error(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center
          flex justify-center
           lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
            onSubmit={handleLogin}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                    name="email"
                 placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" 
                name="password"
                placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <button
              onClick={handleloginWithGoogle}
               className="
              btn btn-info  mt-4">
           Sign in with Google</button>
            </form>

          </div>
        </div>
      </div>
    );
};

export default Login;