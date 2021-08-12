import React, { useState, useEffect } from 'react';
import DisplayProducts from './DisplayProduct';
import SearchProducts from './SearchProduct';

const ProductList = () => {
    const [productList,setProductList] = useState('');
   // const [searchValues,setSearchValues] = useState({searchText:'', inStockOnly:''});
   const [ searchText, setSearchText] = useState('');
    const [inStockOnly, setInStockOnly] = useState('')

    useEffect(() => {
        fetch('/media/products.json')
        .then((response) => response.json())
        .then((productsList) => {
           let productList = productsList.productsList;
           console.log(productsList);
            setProductList(productList);
        });
    }, [productList.length])

    const searchProductHandler = (searchText,inStockOnly) => {
        console.log(searchText,inStockOnly);
        setSearchText(searchText);
        setInStockOnly(inStockOnly);
      //  setSearchValues({...searchValues,[key]:value});
    }

  

    return(
        <div>
            <h1 className= 'text-center'>Product List</h1>
            <SearchProducts searchTextChanged= {searchProductHandler} />
            <DisplayProducts productList={productList}  searchText = {searchText} inStockOnly= {inStockOnly} />
        </div>
    )
}

export default ProductList;