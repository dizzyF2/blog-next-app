import React from 'react'
import Pagination from './Pagination'



async function CardList() {

    

    return (
        <div className='flex flex-col'>
            <div>
                <h1 className='text-2xl md:text-3xl font-bold m-[50px_0px]'>
                    Recent Posts
                </h1>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Pagination/>
        </div>
    )
}

export default CardList