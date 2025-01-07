import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-base-200 py-6 px-2">
      <div className="w-11/12 mx-auto space-y-2">
        <h3 className="text-lg font-bold text-[#B5BE2D]">WE ARE SPORTS GEAR</h3>
        <h2 className="text-3xl font-bold">
          Leading Sports and Fitness Sports in Bangladesh
        </h2>
        <div className="py-4 space-y-2">
          <h4 className="text-xl font-bold">SINCE 2001</h4>
          <p className="text-gray-500">
            Over the last 81 years, our focus has always been-and will continue
            to be-delivering a quality experience with our equipment. We
            understand that our products are an investment and we source them to
            keep pace with your own long-term fitness goals.
          </p>
        </div>
        <div className="py-4 space-y-2">
          <h4 className="text-xl font-bold">OUR STRENGTH, OUR PARTNERS</h4>
          <p className="text-gray-500">
            A wide variety of fitness goods and equipment from around to globe
            to meet the needs of our clients.
          </p>
        </div>
        <Link to="/aboutUs">
          <li className="font-semibold relative group list-none hover:cursor-pointer w-[12%]">
            <a>MORE ABOUT US</a>
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
        </Link>
      </div>
    </div>
  );
};

export default About;
