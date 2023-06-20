import TopBanner from "../../../components/TopBanner";
import orderImage from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
    

    const categories=["salad","pizza","soup","dessert","drinks"]
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu]=useMenu();
    const  drinks= menu.filter(item=>item.category==="drinks");
    const  pizza= menu.filter(item=>item.category==="pizza");
    const  dessert= menu.filter(item=>item.category==="dessert");
    const  salad= menu.filter(item=>item.category==="salad");
    const  soup= menu.filter(item=>item.category==="soup");
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Order</title>
        </Helmet>
      <TopBanner image={orderImage} title={"our shop"}></TopBanner>
      <div className="px-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <div className="text-center">
                <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soups</Tab>
                <Tab>Desserts</Tab>
                <Tab>Drinks</Tab>
                </TabList>
            </div>
            <TabPanel>
                <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={dessert}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={drinks}></OrderTab>
            </TabPanel>
            
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
