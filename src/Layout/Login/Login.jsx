import { useContext } from "react";
import Title from "../../Components/Title/Title";
import googleImage from "../../assets/google.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.init";
import toast from "react-hot-toast";
import loginImg from "../../assets/loginImage.jpg";
const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const signInUser = { email, password };
    console.log(signInUser);

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("User Logged in Successfully");
      })
      .catch((error) => {
        toast.error("Invalid User", error.code);
      });
  };

  // User Google login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("User Logged in Successfully");
      })
      .catch((error) => {
        toast.error("Invalid User", error.code);
      });
  };

  Title("Login");
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <img className="lg:w-3/4 w-11/12 mx-auto pt-32" src={loginImg} alt="" />
      </div>
    <div className="hero lg:pt-20 pt-6 lg:w-1/2 w-full">
        <div className="hero-content w-full flex-col">
          <div className="card shrink-0 shadow-2x w-3/4 border mx-auto">
            <form onSubmit={handleSignIn} className="card-body w-full mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#1c1c1ccd] text-[#fff] font-semibold">
                  Login
                </button>
              </div>
              <div className="text-center text-lg font-bold">Or</div>

              <button
                onClick={googleLogin}
                className="form-control flex-row justify-center gap-4 items-center p-3 mt-2 border rounded-full"
              >
                <div>
                  <img className="w-[30px]" src={googleImage} alt="" />
                </div>
                <div className="text-xl font-semibold">Signin With Google</div>
              </button>
              <div className="py-4">
                <p className="text-center font-semibold">
                  New to this account ?{" "}
                  <Link className="text-blue-500 link" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
