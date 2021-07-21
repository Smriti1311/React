import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [productList,setProductList] = useState('');

    useEffect(() => {
        fetch('/media/products.json')
        .then((response) => response.json())
        .then((productsList) => {
           let productList = productsList.productsList;
           console.log(productsList);
            setProductList(productList);
        })
        console.log(productList);

    })

    useEffect(()=>{
        console.log(productList);
    })

    return(
        <div>
            <h1>Product List</h1>
         {productList && 
                 productList.map((product)=>(
                    <div>{product.category}</div>
                 ))
             }
         
        </div>
    )
}

export default ProductList;