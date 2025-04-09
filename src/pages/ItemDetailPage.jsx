import React from "react";
import { useParams } from "react-router-dom";
import PlasticBagPage from "./PlasticBagCatalogPage"
import PlasticCutleryPage from "./PlasticCutleryCatalogPage"
import WaterBottlePage from "./WaterBottleCatalogPage"
import FoodScrapsPage from "./FoodScrapsCatalogPage"
import AppleCorePage from "./AppleCoreCatalogPage"
import BatteryPage from "./BatteryCatalogPage"
import CardboardPage from "./CardBoardCatalogPage"
import ClothingPage from "./ClothingCatalogPage"
import GlassBottlePage from "./GlassBottleCatalogPage"
import NewspaperPage from "./NewspaperCatalogPage"
import TabletPage from "./TabletCatalogPage"
import StyrofoamCupPage from "./StyrofoamCupCatalogPage"


const ItemDetailPage = () => {
  const { itemName } = useParams();
  switch (itemName) {
    case "Plastic Bag":
      return <PlasticBagPage />;
    case "Plastic Cutlery":
      return <PlasticCutleryPage />;
    case "Water Bottle":
        return <WaterBottlePage />;
    case "Food Scraps":
        return <FoodScrapsPage />;
    case "Apple Core":
        return <AppleCorePage />;
    case "Battery":
        return <BatteryPage />;
    case "Cardboard":
        return <CardboardPage />;
    case "Clothing":
        return <ClothingPage />;
    case "Glass Bottle":
        return <GlassBottlePage/>;
    case "Tablet":
        return <TabletPage/>;
    case "Newspaper":
        return <NewspaperPage />;
    case "Styrofoam Cup":
        return <StyrofoamCupPage />;
    default:
      return <div>Item not found!</div>;
  }
};

export default ItemDetailPage;