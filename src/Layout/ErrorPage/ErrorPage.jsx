import { NavLink, useRouteError } from "react-router-dom";
import Title from "../../Components/Title/Title";

const ErrorPage = () => {
  Title("Error-page");
  const error = useRouteError();
  {
    if (error.status === 404) {
      return (
        <div className="w-full h-screen mx-auto flex justify-center items-center bg-gradient-to-r from-[#ffffff65] to-[#000] rounded-xl">
          <div className="text-center space-y-3">
            <h4 className="text-9xl font-semibold text-white">404</h4>
            <h4 className="text-5xl font-semibold text-white">
              This page doesn't exist...
            </h4>
            <p className="text-lg text-slate-200">
              The page you're looking is not existed!!!
            </p>
            <p className="text-lg text-slate-200">
              Try to going previous page for more information
            </p>
            <button className="bg-white px-4 py-2 rounded-full font-semibold hover:bg-slate-400 hover:transition-colors hover:duration-300">
              <NavLink to="/">Go Back To Home</NavLink>
            </button>
          </div>
        </div>
      );
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }
};

export default ErrorPage;
