
import { useContext } from "react";
import img from "../assets/img/banner.jpg"
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import SectionUserHome from "../components/SectionUserHome";
const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className="mb-3 ">
            <h2 className="text-2xl text-center mb-2">
                Welcome to the Task Management Website
            </h2>
            <div className="hero min-h-screen" style={{backgroundImage:`url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">
        This is a task management website
      </h1>
      <p className="mb-5">
        to manage your tasks please login or register,click on get started button to get started today
      </p>
      <Link to={user?'/dashboard':'/login'} className="btn btn-primary">
        Lets Explore
        </Link>
    </div>
  </div>
            </div>
            <SectionUserHome/>
        </div>
    );
};

export default Home;