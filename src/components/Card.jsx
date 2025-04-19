import React from 'react'

import { FaStar } from "react-icons/fa6";
const Card = (props) => {

    const { product } = props;

    return (
        <div className='m-5 border'>
            <div className='bg-gray-100 p-4'>
                <img src={product.image} alt="" />
            </div>

            <div className='p-3'>
                <p className='text-gray-500 text-lg'>{product.title}</p>

                <div className='flex items-center justify-between py-2'>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>

                <div className='flex items-center'>
                    <div className='flex items-center text-yellow-400'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <div>
                        {product.rating?.rate}
                    </div>
                    <div className='ml-3'>
                        {product.rating?.count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card