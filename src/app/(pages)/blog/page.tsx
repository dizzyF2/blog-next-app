import CardList from '@/app/components/CardList'
import MenuList from '@/app/components/MenuList'


const categoryColors: { [key: string]: string } = {
    travel: 'bg-[#ff7857]',  
    food: 'bg-[#ff6347b6]',        
    style: 'bg-[#9370d8c0]',    
    fashion: 'bg-[#ff69b4b7]',    
    coding: 'bg-[#1e8fffb9]',     
    culture: 'bg-[#229722b9]',  
};

function Blog({searchParams}:{ searchParams: { page: string, cat: string } }) {

    const page = searchParams.page? parseInt(searchParams.page) || 1:1
    const { cat } = searchParams
    return (
        <div>
            <h1 className={`${categoryColors[cat] || 'bg-[coral]'} text-white p-[5px_10px] text-center text-2xl font-bold capitalize`}>{cat} Blog</h1>
            <div className='flex gap-12'>
                <CardList page={page} cat={cat}/>
                <MenuList/>
            </div>
        </div>
    )
}

export default Blog