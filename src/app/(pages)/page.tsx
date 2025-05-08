import CardList from "../components/CardList";
import Hero from "../components/Hero";
import MenuList from "../components/MenuList";
import PopularCategories from "../components/PopularCategories";


export default function Home({searchParams}:{ searchParams: { page: string, cat: string } }) {

  const page = searchParams.page? parseInt(searchParams.page) || 1:1
  const { cat } = searchParams
  return (
    <div className="my-16">
      <Hero/>
      <PopularCategories/>
      <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-20">
        <CardList page={page} cat={cat} />
        <MenuList/>
      </div>
    </div>
  );
}
