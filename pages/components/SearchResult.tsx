import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import ProductTable from './ProductTable'

const SearchResult = () => {
    const [data, setData] = useState({result: null, loading: false});
    const [productType, setProductType] = useState('')
    const [submit, setSubmit] = useState(false)
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
            //setSubmit(false)
       }
    }, [productType, submit])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductType(e.currentTarget.value);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setSubmit(true)
    }
    return (
        <div className='search-result-container'>
            <input
                    value={productType}
                    onChange={handleChange}
                    type='text'
                    placeholder='Search Product i.e. Lipstick, eyeliner'
                    autoComplete='on'
                />
            <div className=''>
                
                {/* <form onSubmit={handleSubmit}>
                    <input
                    value={productType}
                    onChange={handleChange}
                    type='text'
                    placeholder='Search Product i.e. Lipstick, eyeliner'
                    autoComplete='on'
                />
                    <input
                        type='submit'
                        placeholder='submit'
                    />
                </form> */}
             </div>
            <ProductTable
                data={data}
            />
        </div>
    )
}

export default SearchResult
