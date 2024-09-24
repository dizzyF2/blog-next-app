import React from 'react'
import Pagination from './Pagination'
import Card from './Card'



async function CardList() {

    

    return (
        <div className='flex-[5] flex flex-col'>
            <div>
                <h1 className='text-2xl md:text-3xl font-bold m-[50px_0px]'>
                    Recent Posts
                </h1>
                
                    <Card/>
                
            </div>
            <Pagination/>
        </div>
    )
}

export default CardList