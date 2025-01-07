import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brandImage1 from "../../assets/brand1.jpg";
import brandImage2 from "../../assets/brand2.png";
import brandImage3 from "../../assets/brand13.png";
import brandImage4 from "../../assets/brand4.png";
import brandImage5 from "../../assets/brand5.png";
import brandImage6 from "../../assets/brand6.png";
import brandImage7 from "../../assets/brand7.jpg";
import brandImage8 from "../../assets/brand8.png";
import brandImage9 from "../../assets/brand9.jpg";
import brandImage10 from "../../assets/brand10.png";
import brandImage11 from "../../assets/brand11.jpg";
import brandImage12 from "../../assets/brand12.jpg";
const Brands = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center py-6">
        Our Top Brands
      </h2>
      <div className="py-8 w-full">
        <div className="w-11/12 mx-auto text-center space-y-2 ">
          <div className="slider-container py-8 ">
            <Slider {...settings} className="slick-arrow px-8">
              <div>
                <img src={brandImage1} alt="" />
              </div>
              <div>
                <img src={brandImage2} alt="" />
              </div>
              <div>
                <img src={brandImage3} alt="" />
              </div>
              <div>
                <img src={brandImage4} alt="" />
              </div>
              <div>
                <img src={brandImage5} alt="" />
              </div>
              <div>
                <img src={brandImage6} alt="" />
              </div>
              <div>
                <img src={brandImage7} alt="" />
              </div>
              <div>
                <img src={brandImage8} alt="" />
              </div>
              <div>
                <img src={brandImage9} alt="" />
              </div>
              <div>
                <img src={brandImage10} alt="" />
              </div>
              <div>
                <img src={brandImage11} alt="" />
              </div>
              <div>
                <img src={brandImage12} alt="" />
              </div>
            </Slider>
            <style>
              {`
        .slick-next,
        .slick-prev {
          background-color: #fff;
          color:white;
          border-radius: 9999px;
          padding: 10px;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .slick-next:hover,
        .slick-prev:hover {
          background-color: #F7F6F9; 
          color:#000;
          border:1px solid black
        }
        .slick-next::before,
        .slick-prev::before {
          color: #000;
          font-size:25px
        }
        `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
