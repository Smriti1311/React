import React from 'react';
import Table from 'react-bootstrap/Table';

const DisplayProducts = (props) => {

const displayProduct = props.productList ? ( 
    props.productList.map((product,index)=>{
        if(props.inStockOnly && !product.stocked){
            return null;
        }
        if(product.category.toLowerCase().indexOf(props.searchText) === -1 && product.name.toLowerCase().indexOf(props.searchText) === -1){
            return null;
        }
      // return <ProductRow key={product.category+index} productRow = {product} deleteProduct={}/>
      return null;
    })) : <tr><td colSpan="4">No Data Found</td></tr>;


    return(
        <Table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stocked</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {displayProduct}
             </tbody>
        </Table>
    )
}

export default DisplayProducts;