import React, { useEffect, useState } from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { country } from '../assets/products';
import axios from 'axios';
import { baseUrl } from '../assets/baseUrl';

const Home = () => {

    const [singleUser, setSingleUser] = useState(null);
    const [user, setUser] = useState();

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

    useEffect(() => {
        setRegister({
            fullName: singleUser?.fullName || "",
            dob: singleUser?.dob || "",
            email: singleUser?.email || "",
            phone: singleUser?.phone || "",
            gender: singleUser?.gender || "Male",
            country: singleUser?.country || ""
        })
    }, [singleUser?.id])

    useEffect(() => {
        getRegisteredUsers();
    }, [])

    ///////////////////////////get Users////////////////////////////////////
    const getRegisteredUsers = async () => {
        const response = await axios.get(`${baseUrl}/registration`);
        setUser(response?.data?.data)
    }
    ////////////////get Single User////////////////////////////////////
    const gitSingleUser = async (id) => {
        const response = await axios.get(`${baseUrl}/singleRegistration/${id}`);
        setSingleUser(response?.data?.data);
    }
    ///////////////// create User//////////////////////////////////////
    const createUser = async (register) => {
        await axios.post(`${baseUrl}/registration`, register);
    }
    ////////////// update user ////////////////////////////////
    const updateUser = async (id, register) => {
        await axios.patch(`${baseUrl}/updateRegistration/${id}`, register);
    }

    //////////////// delete user /////////////////////////

    const delteSingleUser = async (id) => {
        await axios.delete(`${baseUrl}/deleteRegistration/${id}`);
        getRegisteredUsers();
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setRegister({
            ...register,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (singleUser) {
            const id = singleUser?.id;
            await updateUser(id, register)
            setSingleUser(null)
        } else {
            await createUser(register);
        }
        await getRegisteredUsers();
        setRegister(
            {
                fullName: "",
                dob: "",
                email: "",
                phone: "",
                gender: "Male",
                country: ""
            }
        )
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

                        <Button label={singleUser ? "Update" : "Submit"} type="submit" />
                    </div>
                </div>
            </form>


            <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md my-10">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <td className="px-4 py-2 border">S.No</td>
                        <td className="px-4 py-2 border">Full Name</td>
                        <td className="px-4 py-2 border">Email</td>
                        <td className="px-4 py-2 border">mobileNo</td>
                        <td className="px-4 py-2 border">Dob</td>
                        <td className="px-4 py-2 border">Gender</td>
                        <td className="px-4 py-2 border">Country</td>
                        <td className="px-4 py-2 border">Action</td>
                    </tr>
                </thead>

                <tbody>

                    {
                        user?.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td className="px-4 py-2 border">{data?.id}</td>
                                    <td className="px-4 py-2 border">{data?.fullName}</td>
                                    <td className="px-4 py-2 border">{data?.email}</td>
                                    <td className="px-4 py-2 border">{data?.phone}</td>
                                    <td className="px-4 py-2 border">{data?.dob}</td>
                                    <td className="px-4 py-2 border">{data?.gender}</td>
                                    <td className="px-4 py-2 border">{data?.country}</td>
                                    <td className="px-4 py-2 border">
                                        <button className="bg-blue-600 text-white p-2 rounded-lg" onClick={() => gitSingleUser(data?.id)}>Edit</button>
                                        <button className="bg-red-600 text-white p-2 rounded-lg" onClick={() => delteSingleUser(data?.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default Home