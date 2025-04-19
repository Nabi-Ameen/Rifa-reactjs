import React from 'react'
const ExplorCard = (data) => {
    const { icon, Address, title } = data

    return (
        <div className='m-2'>
            <div className='flex gap-6'>
                <div className='bg-yellow-200 w-20 h-20 rounded-md flex justify-center items-center hover:border-2 border-yellow-600 text-3xl text-yellow-600'>
                    {icon}
                </div>
                <div className='w-40'>
                    <h3 className='hover:text-yellow-400 text-xl'>{Address}</h3>
                    <p className='text-gray-400 text-[16px]'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default ExplorCard