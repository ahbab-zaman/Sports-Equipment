import Title from "../../Components/Title/Title";

const Register = () => {
  Title("Register");
  return (
    <div>
      <div className="py-4">
        <h2 className="text-3xl text-center font-semibold">Registration</h2>
      </div>

      <div>
        <div className="hero">
          <div className="hero-content w-full flex-col">
            <div className="card shrink-0 shadow-2x w-3/4 border mx-auto">
              <form className="card-body w-full mx-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your image URL"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Create Password</span>
                  </label>
                  <input
                    type="password"
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
                  <button className="btn bg-[#1c1c1ccd] text-[#fff] font-semibold">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
