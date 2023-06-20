
import SectionTitles from "../../../components/SectionTitles";
import PopularItems from "./PopularItems";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu();
    const  popular= menu.filter(item=>item.category==="popular");
    return (
        <div className="py-10 px-20">
            <SectionTitles subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitles>
            <div className="grid grid-cols-2 px-10 gap-10">
            {
                popular.map(item=><PopularItems key={item._id} item={item}></PopularItems>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;