// import Image from "next/image";

import CardList from "./components/CardList";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import MenuList from "./components/MenuList";


export default function Home() {

  
  return (
    <>
      <Hero/>
      <PopularCategories/>
      <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-20">
        <CardList/>
        <MenuList/>
      </div>
    </>
  );
}
