import React,{useState, useEffect} from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CartList from './CartList'

type cartProductType = {
    name: string
    price: string
    imgLink: string
}
type GetStyleProps = {
    style: React.CSSProperties
    cartValue: number
    cartProduct: cartProductType
}
const CartDisplay = ({ style, cartValue, cartProduct }: GetStyleProps) => {
    const [cartList, setCartList] = useState(false)
    const [allProducts, setAllProducts] = useState([{}] as cartProductType[])
    useEffect(() => {
        setAllProducts([...allProducts, cartProduct])
    }, [cartValue])
    return (
       <> 
        <div
            className='cart-container'
            style={style}
            onClick={()=> setCartList(true)}
        >
            {cartList && <CartList />}
            <div className='top-cart'>
                <ShoppingCartOutlined className='custom-icon' />
            </div>
            <div className='bottom-cart'>
                {cartValue}
                {console.log(allProducts)}
            </div>
            </div>
          </>  
    )
}

export default CartDisplay
