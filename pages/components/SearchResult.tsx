import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import ProductTable from './ProductTable'
import Filter from './Filter'
import CartDisplay from './CartDisplay'

const SearchResult = () => {
    const [data, setData] = useState({result: {}, loading: false});
    const [productType, setProductType] = useState('')
    const [brand, setBrand] = useState('')
    useEffect(() => {
        if (true) {
            setData({result: data.result, loading: true})
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?`
                + `${!!productType ? `product_type=${(productType as string)?.toLowerCase()}` : ``}`
                + `${!!brand ? `&brand=${(brand as string)}` : ``} `)
             .then((data) => data.json())
                .then((data) => {
                   // console.log(data)
                    setData({result: data, loading: false})
                })
       }
    }, [productType,brand])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductType(e.currentTarget.value);
    }
    const getBrand = (brand:string)=>{
        setBrand(brand);
    }
    return (
        <div className='search-result-container'>
            <Filter
                setBrandFunc = {getBrand}
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
                <CartDisplay
                
                />
              </div>  
                         
                  
        </div>
    )
}

export default SearchResult
