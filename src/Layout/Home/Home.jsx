import Banner from "../../Components/Banner/Banner";
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
        </div>
    );
};

export default Home;