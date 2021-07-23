import React, { Fragment, useEffect, useReducer, useState } from 'react';
import Form, { FormCheck, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const SearchProducts = (props) => {

    const [ inputValues, setInputValues] = useState({searchProduct:'', inStockCheck:false})

    const searchProductHandler = (event) => {
        console.log(event.target);
       let name = event.target.name;
       let value = event.target.type==='checkbox'? event.target.checked : event.target.value;
      setInputValues({...inputValues,[name]:value})
    }

    const {searchProduct, inStockCheck} = inputValues;
    const searchProductProp = props.searchTextChanged;

    useEffect(()=>{
        searchProductProp(searchProduct, inStockCheck)
    },[inputValues])
        
        
     /*   ,(name,value)=>{
          props.searchTextChanged(name,value)
      });
    }*/

    return (
        <Fragment >
            <div className=' d-flex justify-content-center align-items-center ' >
                <FormGroup >
                    <FormLabel>Search Text</FormLabel>
                    <FormControl type='input' size='lg' placeholder='Enter product to search' name='searchProduct' value={inputValues.searchProduct} onChange={searchProductHandler} />
                </FormGroup>
            </div>
            <div className=' d-flex justify-content-center align-items-center '>
                <FormGroup>
                    <FormCheck type='checkbox' name='inStockCheck' label='Search in stock items only' onChange={searchProductHandler} checked={inputValues.inStockCheck}></FormCheck>
                </FormGroup>
            </div>
        </Fragment>
    )
}

export default SearchProducts;