import Categories from "./Categories"
import MenuPost from "./MenuPost"


function MenuList() {
    return (
        <div className="hidden md:block flex-[2] mt-[50px]">
            <>
                <h1 className="text-[28px] capitalize font-bold">Most Popular</h1>
                <MenuPost withImage={false}/>
                <MenuPost withImage={false}/>
                <MenuPost withImage={false}/>
                <MenuPost withImage={false}/>
            </>
            <>
                <h1 className="text-[28px] capitalize font-bold">Categories</h1>
                <Categories withImage={false} className="p-[10px_25px] rounded-xl text-[12px] text-white"/>
            </>
            <>
                <h1 className="text-[28px] capitalize font-bold">editors pick</h1>
                <MenuPost withImage={true}/>
                <MenuPost withImage={true}/>
                <MenuPost withImage={true}/>
                <MenuPost withImage={true}/>
            </>
        </div>
    )
}

export default MenuList