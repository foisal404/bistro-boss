import TopBanner from "../../../components/TopBanner";
import bannerImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu]=useMenu();
  const  offered= menu.filter(item=>item.category==="offered");
  const  pizza= menu.filter(item=>item.category==="pizza");
  const  dessert= menu.filter(item=>item.category==="dessert");
  const  salad= menu.filter(item=>item.category==="salad");
  const  soup= menu.filter(item=>item.category==="soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <TopBanner
        image={bannerImg}
        title="OUR MENU"
        sub_title={"WOULD YOU LIKE TO TRY A DISH"}
      ></TopBanner>
      <MenuCategory items={offered} heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></MenuCategory>
      <MenuCategory items={dessert} image={dessertImg} title={"dessert"}></MenuCategory>
      <MenuCategory items={pizza} image={pizzaImg} title={"pizza"}></MenuCategory>
      <MenuCategory items={salad} image={saladImg} title={"salad"}></MenuCategory>
      <MenuCategory items={soup} image={soupImg} title={"soup"}></MenuCategory>
    </div>
  );
};

export default Menu;
