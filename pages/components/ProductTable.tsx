import React from 'react'
import Loader from './Loader'
import Image from 'next/image'

type GetProductDataProps = {
    data: {
    }[]
}
const ProductTable = ({ data }: any) => {
    const {result , loading} = data
    return (
        <div className='product-table-container'>
            {
                loading ?
                    <Loader />
                    :
                    <div>
                         {result?.length 
                            ?
                            <div className='product-table-wrapper'>
                                {result.map((data: any) => (
                                    <div key={data?.id} className='single-product-item'>
                                        
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
                                            <div >
                                                <span>{data?.product_type}</span>
                                            </div>   
                                    </div> 
                                    </div>
                                )
                                )}
                            </div>
                            :
                            <div>
                                no data
                            </div>
                         }
                    </div>
          }
           
        </div>
    )
}

export default ProductTable
