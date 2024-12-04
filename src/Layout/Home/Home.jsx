import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import ProductSection from "../../Components/ProductSection/ProductSection";
import SportsCategory from "../../Components/SportsCategory/SportsCategory";

const Home = () => {
    return (
        <div>
            {/* Banner section */}
           <div>
           <Banner></Banner>
           </div>
            {/* Product section */}
            <div>
                <ProductSection></ProductSection>
            </div>
            {/* Sports category */}
            <div>
                <SportsCategory></SportsCategory>
            </div>
            {/* Brands sections */}
            <div>
            <Brands></Brands>
            </div>
            {/* About section */}
            <div>
                <About></About>
            </div>
        </div>
    );
};

export default Home;