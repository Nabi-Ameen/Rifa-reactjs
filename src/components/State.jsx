import React, { useState } from 'react'

const State = () => {

    const [num, setNum] = useState(20);

    const [list, setList] = useState(["Ameen", "Ali", "Khan"]);

    const addElements = () => {
        setList([
            ...list,
            "Uzair"
        ])
    }

    return (
        <div className='m-20'>
            <div className='text-xl'>
                {
                    list?.map((item, index) => <div key={index}>{item}</div>)
                }

            </div>

            <button onClick={addElements} className='bg-blue-700 text-white rounded-md px-6 py-2'>Increament</button>
        </div>
    )
}

export default State;