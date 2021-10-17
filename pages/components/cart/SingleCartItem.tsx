import React from 'react'
import Image from 'next/image'

type getCartProps = {
    key: number
    name: string
    price: string
    imgLink: string
    removeItem: (event: React.MouseEvent, name: string, price: string) => void
}
const SingleCartItem = ({key, name, price, imgLink, removeItem}:getCartProps) => {
    return (
        <div className='single-cart-item-wrapper'>
            <div className='single-cart-list-container'>
                <img
                    className='single-cart-image'
                    src={imgLink}
                    alt={name}
                />
                <h2 className='single-cart-item-header'>Name: {name}</h2>
                <strong>Price: $ {price}</strong>
                <div>
                    <button
                      onClick={e => removeItem(e, name, price)}
                    >Delete
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default SingleCartItem
