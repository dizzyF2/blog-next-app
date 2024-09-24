import CardList from '@/app/components/CardList'
import MenuList from '@/app/components/MenuList'

function Blog() {
    return (
        <div>
            <h1 className='bg-[coral] text-white p-[5px_10px] text-center text-2xl font-bold'>Blog</h1>
            <div className='flex gap-12'>
                <CardList/>
                <MenuList/>
            </div>
        </div>
    )
}

export default Blog