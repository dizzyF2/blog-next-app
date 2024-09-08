// import Image from "next/image";

import CardList from "./components/CardList";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import MenuList from "./components/MenuList";


export default function Home() {
  return (
    <>
      <Hero/>
      <Categories/>
      <div className="flex justify-between">
        <CardList/>
        <MenuList/>
      </div>
    </>
  );
}
