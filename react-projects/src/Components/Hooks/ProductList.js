import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [productList,setProductList] = useState();

    useEffect(() => {
        fetch('/media/products.json')
        .then((response) => response.json())
        .then((productList) => {
            setProductList(productList.productList);
            console.log(productList);
        })
        console.log("A", productList);
    })


    return(
        <div>
            {productList}
        </div>
    )
}

export default ProductList;