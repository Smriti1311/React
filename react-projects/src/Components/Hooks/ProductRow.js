import React from 'react';

const ProductRow = (props) => {
        const{ category,price,stocked,name} = props.productRow;
    return(
    (<tr>
        <td>{category}</td>
        <td>{price}</td>
        <td>{stocked?'In stock':'Out of stock'}</td>
        <td>{name}</td>
      {/*</tr>  <td><button onClick = {}</td>)>Delete</button></td> */}
    </tr>)
    )
}

export default ProductRow;