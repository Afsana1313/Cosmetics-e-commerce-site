import React,{useState, useEffect} from 'react'
import Loader from './Loader'
import SingleProductTable from './SingleProductTable'
import Image from 'next/image'

type GetProductDataProps = {
    data: {
        result: any
        loading: boolean
    }
    price: (a: number) => void
    productsInCart: (data: any) => void
}
const ProductTable = ({ data, price, productsInCart }: GetProductDataProps) => {
    const { result, loading } = data
    const [totalPrice, setTotalPrice] = useState<number>(0)
    useEffect(() => {
        price(totalPrice)
    }, [totalPrice])
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
                                {result.map((data: any) =>
                                (
                                    <SingleProductTable
                                        data={data}
                                        key={data.id}
                                        setPrice={(a) => {
                                            console.log(totalPrice + parseFloat(a))
                                            setTotalPrice(totalPrice + parseFloat(a))
                                        }}
                                        productsInCart={(data: any)=> productsInCart(data)}
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
