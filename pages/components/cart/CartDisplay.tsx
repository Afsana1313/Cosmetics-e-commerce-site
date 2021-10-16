import React, { useState, useEffect } from 'react'
import { CloseOutlined } from '@ant-design/icons';

type cartProductType = {
    name: string
    price: string
    imgLink: string
}
type GetCartProps = {
    cartValue: number
    cartProduct: cartProductType[]
    setShowCartDisplay: () => void
}
const CartDisplay = ({cartValue, cartProduct, setShowCartDisplay} : GetCartProps) => {
    //const [cartList, setCartList] = useState(false)
    const [allProducts, setAllProducts] = useState([{}] as cartProductType[])
    
    /*useEffect(() => {
        window.addEventListener('click', () => {
            setShowCartDisplay()
        })
        return () => window.removeEventListener('click', () => {
            setShowCartDisplay()
        })
    },[])*/
    
    return (
        <div className='cart-list-wrapper'>
                
            <div className='cart-list-container'>
                <span className='close-btn-wrapper'>
                    <CloseOutlined
                        className='close-btn'
                        onClick={()=> setShowCartDisplay()}
                    />
                </span>
                
                {console.log(cartProduct)}
                    <div>
                        {cartProduct.map((item) => 
                            <div key={item.name}>
                                
                                {item.name}<br/>
                                {item.price}<br/>
                                {item.imgLink}
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default CartDisplay
