import React from 'react'
import Loader from './Loader'
import SingleProductTable from './SingleProductTable'
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
                                    <SingleProductTable
                                        data={data}
                                        key={data.id}
                                    />
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
