import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState();

    // const fetchData = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();
    //     setProducts(data)
    // }

    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data)
    }

    useEffect(() => {
        setTimeout(() => { console.log("call after 3 seconds") }, 3000)
        fetchData()
    }, [])

    // const myPromise = new Promise((resolve, reject) => {
    //     let success = false;
    //     if (success) {
    //         resolve("Promise resolved")
    //     } else {
    //         reject("promise rejected")
    //     }
    // })

    // myPromise.then((data) => console.log(data)).catch((error) => console.log(error))




    return (
        <div>
            {
                products?.length ? <div>
                    <div className="flex flex-wrap">
                        {
                            products?.map((product, index) => {
                                return (
                                    <div key={index} className="w-3/12">
                                        <Card product={product} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> : <div>Data not found</div>
            }
        </div>
    )
}

export default Products