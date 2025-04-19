import React from 'react'
import PerfectPlaceCard from './PerfectPlaceCard'

const PerfectPlace = () => {
    return (
        <div className='mt-10'>
            <p className='text-center text-xl'>Find the Perfect Place to live in!</p>
            <p className='text-center text-lg'>Stop wondering how your life will be like in a housing society & make informed decisions with Zameen Area Guides</p>

            <div className='flex '>
                <PerfectPlaceCard heading="Take a look inside society maps" content="Conveniently browse through detailed maps of all the societies established across the country, featuring master plans, road networks, and plots." />
                <PerfectPlaceCard heading="Take a look inside society maps" content="Conveniently browse through detailed maps of all the societies established across the country, featuring master plans, road networks, and plots." />
                <PerfectPlaceCard heading="Take a look inside society maps" content="Conveniently browse through detailed maps of all the societies established across the country, featuring master plans, road networks, and plots." />
            </div>
        </div>
    )
}

export default PerfectPlace