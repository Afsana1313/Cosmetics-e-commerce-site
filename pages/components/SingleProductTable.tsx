import React,{useState} from 'react'

type GetProps = {
    data: {
        name: string
        brand: string
        api_featured_image: string
        product_type: string
        price: string
    }
    setPrice: (a: string) => void
    productsInCart: (a: any)=> void
}
const SingleProductTable = ({ data, setPrice, productsInCart }: GetProps) => {
    const [isInCart, setInCart] = useState(false)
    const product = {
        name: data?.name,
        price: data?.price,
        imgLink: data?.api_featured_image
    }
    return (
        <div className='single-product-item'>                    
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
                    <span>${data?.price} </span>
                </div>
                <div >
                    <span>{data?.product_type}</span>
                </div>   
            </div>
            <div
                className='single-product-add-to-cart'
                onClick={() => {
                    setInCart(true)
                    setPrice(data?.price)
                    productsInCart(product)
                }}
            >
                <span>{ isInCart ? 'Added to Cart' : 'Add to cart'}</span>
            </div>
        </div>
    )
}

export default SingleProductTable
