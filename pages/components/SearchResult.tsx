import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import ProductTable from './ProductTable'
import Filter from './Filter'

const SearchResult = () => {
    const [data, setData] = useState({result: null, loading: false});
    const [productType, setProductType] = useState('')
    useEffect(() => {
        if (true) {
            setData({result: data.result, loading: true})
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?`
                + `${!!productType ? `product_type=${(productType as string)?.toLowerCase()}` : ``}`)
             .then((data) => data.json())
                .then((data) => {
                   // console.log(data)
                    setData({result: data, loading: false})
                })
       }
    }, [productType])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductType(e.currentTarget.value);
    }
    return (
        <div className='search-result-container'>
            <Filter
            />
            <div className='product-table'>
                <input
                            value={productType}
                            onChange={handleChange}
                            type='text'
                            placeholder='Search Product i.e. Lipstick, eyeliner'
                            autoComplete='on'
                        />
                   
                        <ProductTable
                            data={data}
                        />
              </div>  
                         
                  
        </div>
    )
}

export default SearchResult
