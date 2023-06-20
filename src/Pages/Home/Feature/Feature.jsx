import SectionTitles from "../../../components/SectionTitles";
import featurdIng from '../../../assets/home/featured.jpg'
 import './Feature.css'

const Feature = () => {
    return (
        <div className="feature-bg bg-fixed py-5 opacity-100  ">
            <SectionTitles heading={"FROM OUR MENU"} subHeading={"Check it Out"}></SectionTitles>
            <div className="flex p-20 px-40 ">
                <div className="w-1/2">
                    <img src={featurdIng}  className="w-96 mx-auto" alt="" />
                </div>
                <div className="w-1/2 text-white ">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Feature;