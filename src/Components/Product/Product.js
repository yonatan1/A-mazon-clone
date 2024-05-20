  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import Productcard from './Productcard'
import Classes from "./Proudct.module.css"
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
          <section className=
          {Classes.Products_container} >
        {Products?.map((singleProduct) => (
          <Productcard Product={singleProduct} key={singleProduct.id} />
        ))}
      </section>
     
    )  
  }

  export default Product
