import React from 'react'
import SingleCartItem from './SingleCartItem';
import { CloseOutlined } from '@ant-design/icons';

type cartProductType = {
    name: string
    price: string
    imgLink: string
    id: number
  
}
type GetCartProps = {
    cartValue: number
    cartProduct: cartProductType[]
    setShowCartDisplay: () => void
    removeItem: (name: string, price: string) => void
}
const CartDisplay = ({cartValue, cartProduct, setShowCartDisplay, removeItem} : GetCartProps) => {
    return (
        <div className='cart-list-wrapper'>
                
            <div className='cart-list-container'>
                <span className='close-btn-wrapper'>
                    <span>Cart</span>
                    <CloseOutlined
                        className='close-btn'
                        onClick={()=> setShowCartDisplay()}
                    />                 
                </span>
                
                {console.log(cartProduct)}
                    <div>
                        {cartProduct.map((item,index) => 
                            <>
                                {item.name && <SingleCartItem
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    imgLink={item.imgLink}
                                    removeItem={(e, name, price)=> removeItem(name,price)}
                                />
                                }
                            </>
                        )}
                </div>
                <div
                    className='cart-list-total-cost-container'>
                    <div className='left'>Total
                    </div>
                    <div className='right'>{cartValue}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDisplay
