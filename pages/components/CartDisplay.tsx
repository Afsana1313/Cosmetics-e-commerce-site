import React from 'react'
import {ShoppingCartOutlined} from '@ant-design/icons' 
type GetStyleProps = {
    style : React.CSSProperties
}
const CartDisplay = (props: GetStyleProps) => {
    return (
        <div className='cart-container' style={props.style}>
            <div className='top-cart'>
                <ShoppingCartOutlined className='custom-icon' />
            </div>
            <div className='bottom-cart'>

            </div>
        </div>
    )
}

export default CartDisplay
