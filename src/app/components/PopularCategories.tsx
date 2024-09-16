import Categories from "./Categories"


function PopularCategories(){
    return(
        <div className="">
            <h1 className="text-2xl md:text-3xl font-bold m-[50px_0px]">
                Popular Categories
            </h1>
            <Categories withImage={true} className="flex items-center justify-center gap-[10px] text-white  p-[10px_20px] border-none rounded-lg w-full md:w-[45%] lg:w-[25%] xl:w-[10%]"/>
        </div>
    )
}

export default PopularCategories