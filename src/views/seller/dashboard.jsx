// mobile header
import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";
// product-slider
import ProductSlider from "@/components/template/productSlider/ProductSlider";
// products from data
import { boostedBoardProducts } from "@/data/ProductSlider/BoostedBoard";

import { puddleBoardProducts } from "@/data/ProductSlider/PuddleBoard";

import { smartPhoneProducts } from "@/data/ProductSlider/Smartphone";

import { smartWatchProduct } from "@/data/ProductSlider/SmartWatch";

import { chocolateProducts } from "@/data/ProductSlider/Chocolate";

import PCRowThree from "@/components/prodcut-category/PCRowThree";

import { backpackPorduct } from "@/data/ProductSlider/Backpack";

// product category
import PCRowOne from "@/components/prodcut-category/PCRowOne";

import PCRowTwo from "@/components/prodcut-category/PCRowTwo";
// product-row
import ProductRow from "@/components/product-row/ProductRow";
// products
import { cameraProduct } from "@/data/ProductSlider/Camera";

import { BooksProduct } from "@/data/ProductSlider/Books";
// header
import Header from "@/components/template/header/Header";
// footer
import Footer from "@/components/template/footer/Footer";
// sub-menu
import Menu from "@/components/menu/Menu";
// hero
import Hero from "@/components/hero/Hero";

function Dashboard() {
  return (
    <>
      {/* Template */}
      {/* <Header /> */}
      <Menu />
      <MobileHeaderApp />
      
      <Footer />
    </>
  );
}

export default Dashboard;
