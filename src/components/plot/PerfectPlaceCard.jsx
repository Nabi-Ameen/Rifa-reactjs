import React from 'react'

const PerfectPlaceCard = ({ heading, content }) => {
    return (
        <div>
            <div className='w-32 h-32 rounded-full border border-black'>
            </div>

            <h1>{heading}</h1>
            <p> {content}</p>
        </div>
    )
}

export default PerfectPlaceCard