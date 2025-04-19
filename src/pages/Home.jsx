import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { country } from '../assets/products';

const Home = () => {

    const [register, setRegister] = useState(
        {
            fullName: "",
            dob: "",
            email: "",
            phone: "",
            gender: "Male",
            country: ""
        }
    );

    const handleChange = (e) => {
        const { value, name } = e.target;
        setRegister({
            ...register,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("register", register)
    }

    return (
        <div>
            {/* <SliderSection /> */}
            <form onSubmit={handleSubmit}>
                <div className='flex justify-center items-center m-4'>

                    <div className='w-9/12 flex flex-col gap-6 shadow-md p-10'>
                        <div className='flex gap-10'>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="">Full Name</label>
                                <TextInput
                                    required
                                    type="text"
                                    placeholder="Enter FullName"
                                    className="border-2 p-2 w-[300px]"
                                    name="fullName"
                                    value={register.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col flex-1'>
                                <label htmlFor="">Date of Birth</label>
                                <TextInput
                                    required
                                    type="date"
                                    placeholder="Date of Birth"
                                    className="border-2 p-2 w-[300px]"
                                    name="dob"
                                    value={register.dob}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor="">Email</label>
                                <TextInput
                                    required
                                    type="email"
                                    placeholder="Enter Email"
                                    className="border-2 p-2 w-[300px]"
                                    name="email"
                                    value={register.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col flex-1'>
                                <label htmlFor="">Enter Phone Number</label>
                                <TextInput
                                    required
                                    type="number"
                                    placeholder="Phone Number"
                                    className="border-2 p-2 w-[300px]"
                                    name="phone"
                                    value={register.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <div className='flex gap-4 flex-1'>
                                <div className='flex items-center gap-8'>
                                    <div>Gender</div>
                                    <div className='flex gap-2 items-center'>
                                        <TextInput
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={register.gender === "Male"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="">Male</label>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <TextInput
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={register.gender === "Female"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="">Female</label>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col flex-1'>
                                <label htmlFor="">Select Country</label>
                                <select
                                    required
                                    className="border-2 p-2 w-[300px]"
                                    name="country"
                                    value={register.country}
                                    onChange={handleChange}>
                                    {
                                        country?.map((item, index) => {
                                            return (
                                                <option key={index} value={item.name}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>


                            </div>
                        </div>

                        <Button label="Submit" type="submit" />
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Home