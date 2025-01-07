import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sports.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram (1).png";
import youtube from "../assets/youtube (1).png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center place-items-stretch items bg-base-200 text-base-content rounded p-6">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center items-baseline lg:p-6 p-2">
          <div>
            <div className="flex items-center justify-start gap-3">
              <img className="w-10" src={logo} alt="" />
              <h2 className="text-xl font-bold">Sports Gear</h2>
            </div>
            <ul className="grid grid-cols-2 justify-start justify-items-start gap-4 mt-4">
              <li className="relative group">
                <NavLink to="/">Home</NavLink>
                <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <NavLink to="/allEquipment">All Equipments</NavLink>
                <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <NavLink to="/addEquipment">Add Equipments</NavLink>
                <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <NavLink to="/myList">My Equipment List</NavLink>
                <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>

          <nav className="flex justify-center items-center gap-4 lg:mt-0 mt-4">
            <div className="flex flex-col gap-3 text-start">
              <h2 className="text-lg font-semibold">Contact with us</h2>
              <p className="font-semibold">
                Email :{" "}
                <Link
                  to="https://mail.google.com/mail/?view=cm&to=ahbabtahmim@example.com"
                  className="text-orange-500"
                >
                  ahbabtahmim@gmail.com
                </Link>
              </p>
              <p className="font-semibold">
                Address :{" "}
                <span className="text-orange-500 ">Subid Bazar, Sylhet</span>
              </p>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <Link to="https://www.facebook.com/profile.php?id=100015172482884&mibextid=ZbWKwL">
                    <img className="w-8" src={facebook} alt="" />
                  </Link>
                </a>
                <Link to="/https://www.instagram.com/ahbab_xaman?igsh=ejFjZnQ5M3RiODUx">
                  <img className="w-8" src={instagram} alt="" />
                </Link>
                <Link to="/https://www.youtube.com">
                  <img className="w-8" src={youtube} alt="" />
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <aside className="lg:-mt-12 -mt-6 lg:place-items-center place-items-baseline ">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="font-bold">SportsGear</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
