import React, { useState, useEffect } from 'react';
import DisplayProducts from './DisplayProduct';
import DisplayProduct from './DisplayProduct';

const ProductList = () => {
    const [productList,setProductList] = useState('');

    useEffect(() => {
        fetch('/media/products.json')
        .then((response) => response.json())
        .then((productsList) => {
           let productList = productsList.productsList;
           console.log(productsList);
            setProductList(productList);
        });
        console.log(productList);
    }, [productList.length])

    return(
        <div>
            <h1>Product List</h1>
            <DisplayProducts productList={productList} />
        </div>
    )
}

export default ProductList;