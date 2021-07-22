import React from 'react';
import Table from 'react-bootstrap/Table';


const DisplayProducts = (props) => {

const displayProduct = props.productList ? ( 
    props.productList.map((product,index)=>(
        <tr key={product.category+index}>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.stocked?'In stock':'Out of stock'}</td>
            <td>{product.name}</td>
        </tr>
    ))) : <tr><td colSpan="4">No Data Found</td></tr>;


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