import React from 'react'


type getCartProps = {
    key: number
    name: string
    price: string
    imgLink: string
}
const SingleCartItem = ({key, name, price, imgLink}:getCartProps) => {
    return (
        <div className='single-cart-item-wrapper'>
            <div className='single-cart-list-container'>
                <img
                    className='single-cart-image'
                    src={imgLink}
                    alt={name}
                />
                <h2 className='single-cart-item-header'>Name: {name}</h2>
                <strong>Price: $ { price}</strong>
            </div>
        </div>
    )
}

export default SingleCartItem
