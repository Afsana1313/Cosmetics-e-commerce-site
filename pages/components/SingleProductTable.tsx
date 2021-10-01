import React from 'react'

type GetProps = {
    data: {
        name: string
        brand: string
        api_featured_image: string
        product_type: string
        price: number
    }
}
const SingleProductTable = ({data}: GetProps) => {
    return (
        <div className='single-product-item'>
                {console.log(data)}                      
            <div className='single-product-item-img'>
                <img
                    src={data?.api_featured_image}
                    alt={data?.name}
                />
            </div>
            <div className='single-product-item-text'>
                <div >
                    <span
                        style={{fontSize: 20, fontWeight: 500}}
                    >{data?.name}</span>
                </div>
                <div >
                    <span
                        style={{fontSize: 18}}
                    >{data?.brand}</span>
                </div>
                <div>
                    <span>${data?.price}</span>
                </div>
                <div >
                    <span>{data?.product_type}</span>
                </div>   
            </div>
            <div className='single-product-add-to-cart'>
                    <span>Add to cart</span>
            </div>
        </div>
    )
}

export default SingleProductTable
