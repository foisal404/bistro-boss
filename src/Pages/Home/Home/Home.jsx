import { Helmet } from "react-helmet";
import Categories from "../../../Layout/Categories/Categories";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner/>
            <Categories/>
            <PopularMenu/>
            <Feature/>
            <Testimonial/>
        </div>
    );
};

export default Home;