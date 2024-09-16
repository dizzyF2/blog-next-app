import CardList from "./components/CardList";
import Hero from "./components/Hero";
import MenuList from "./components/MenuList";
import PopularCategories from "./components/PopularCategories";


export default function Home() {
  return (
    <div className="mt-16">
      <Hero/>
      <PopularCategories/>
      <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-20">
        <CardList/>
        <MenuList/>
      </div>
    </div>
  );
}
