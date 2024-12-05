import { useContext } from "react";
import Title from "../../Components/Title/Title";
import googleImage from "../../assets/google.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.init";
const Login = () => {
  const { userLogin } = useContext(AuthContext);
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
        console.log(result);
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // User Google login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  Title("Login");
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-semibold">Login</h2>
      </div>
      <div>
        <div className="hero">
          <div className="hero-content w-full flex-col">
            <div className="card shrink-0 shadow-2x w-3/4 border mx-auto">
              <form
                onSubmit={handleSignIn}
                className="card-body w-full mx-auto"
              >
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
                  <div className="text-xl font-semibold">
                    Signin With Google
                  </div>
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
    </div>
  );
};

export default Login;
