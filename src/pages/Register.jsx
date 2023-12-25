import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submitted');
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const profileUrl=e.target.profileUrl.value;
        
        // console.log(user);
        createUser(email,password)
        .then((res)=>{
            const user=res.user;
            console.log(user);
            updateProfile(user,{
                displayName:name,
                photoURL:profileUrl

            
            })
            .then(()=>{
                console.log('updated name');
            })
            .catch((error)=>{
                console.log(error);
            })

        })
        .catch((error)=>{
            console.log(error);
        })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center 
    lg:text-left">
      <h1 className="text-3xl font-bold">Register now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
      onSubmit={handleSubmit}
       className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input 
          name="name"
          type="text" placeholder="name" className="input input-bordered w-full" required />
        </div>
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
            <span className="label-text">Profile Url</span>
          </label>
          <input type="text"
              name="profileUrl"
           placeholder="profile Url" className="input input-bordered" required />
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;