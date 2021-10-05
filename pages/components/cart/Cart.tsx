import React,{useState, useEffect} from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CartList from './CartList'


type GetStyleProps = {
    style: React.CSSProperties
    cartValue: number
}
const CartDisplay = ({ style, cartValue}: GetStyleProps) => {
    const [cartList, setCartList] = useState(false)
    
    return (
       <> 
        <div
            className='cart-container'
            style={style}    
        >
            <div className='top-cart'>
                <ShoppingCartOutlined className='custom-icon' />
            </div>
            <div className='bottom-cart'>
                {cartValue}
            </div>
            </div>
          </>  
    )
}

export default CartDisplay
