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

import { backpackPorduct } from "@/data/ProductSlider/Backpack";

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

import App from "./get_data";






function Home() {
  return (
    <>

      <Header />
      <Menu />
      <MobileHeaderApp />
      <Hero />
      <App />

      
      <ProductSlider
        key={"books"}
        products={BooksProduct}
      />
      <ProductSlider
        key={"smartwatch"}
        products={smartWatchProduct}
      />


      <ProductSlider
        key={"runningshoes"}
        products={backpackPorduct}
      />
      <ProductSlider
        key={"smartphone"}
        products={smartPhoneProducts}
      />
      <ProductSlider
        key={"chocolate"}
        products={chocolateProducts}
      />
     
      <ProductSlider
        key={"camera"}
        products={cameraProduct}
      />
      <ProductSlider
        key={"puddleboard"}
        products={puddleBoardProducts}
      />

      <ProductSlider
        key={"boostedboard"}
        products={boostedBoardProducts}
      />
      <Footer />
    </>
  );
}

export default Home;
