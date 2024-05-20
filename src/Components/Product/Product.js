import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productcard from './Productcard'

function Product() {
    const [Products,setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
                setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })

    },[])

    return (
         <section >
      {Products?.map((singleProduct) => (
        <Productcard Product={singleProduct} key={singleProduct.id} />
      ))}
    </section>
    // <section>
    //     {
    //         Products?.map((singleProuct)=>{
    //             return <Productcard Product={singleProuct} key={singleProuct.id}/>
    //         })
    //     }
    // </section>
  )  
}

export default Product
