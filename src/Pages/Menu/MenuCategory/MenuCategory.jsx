import { Link } from "react-router-dom";
import SectionTitles from "../../../components/SectionTitles";
import TopBanner from "../../../components/TopBanner";
import PopularItems from "../../Home/PopularMenu/PopularItems";


const MenuCategory = ({items,subHeading,heading,image,title,sub_title}) => {
    return (
        <div className=" py-10">
            {
                image&& <TopBanner image={image} title={title} sub_title={sub_title}></TopBanner>
            }
            {
                heading&& <SectionTitles subHeading={subHeading} heading={heading}></SectionTitles>
            }
            <div className="grid grid-cols-2 px-10 gap-10 py-10 px-20">
                {
                    items.map(item=><PopularItems key={item._id} item={item}></PopularItems>)
                }
            </div>
            <div>
                <Link to={`/order/${title}`}><button className="text-center btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;