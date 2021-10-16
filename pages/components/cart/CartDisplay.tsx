import React, { useState, useEffect } from 'react'
import { CloseOutlined } from '@ant-design/icons';

type cartProductType = {
    name: string
    price: string
    imgLink: string
}
type GetCartProps = {
    cartValue: number
    cartProduct: cartProductType
    setShowCartDisplay: () => void
}
const CartDisplay = ({cartValue, cartProduct, setShowCartDisplay} : GetCartProps) => {
    const [cartList, setCartList] = useState(false)
    const [allProducts, setAllProducts] = useState([{}] as cartProductType[])
    useEffect(() => {
        setAllProducts([...allProducts, cartProduct])
    }, [cartValue])
    return (
        <div className='cart-list-wrapper'>
                
            <div className='cart-list-container'>
                <span className='close-btn-wrapper'>
                    <CloseOutlined
                        className='close-btn'
                        onClick={()=> setShowCartDisplay()}
                    />
                </span>
                sdfgsdfg
                {console.log(allProducts)}
                {allProducts?.length ?
                    <div>working??
                        {allProducts.map((item) => {
                            <div key={item.name}>
                                <h1>sfasdf</h1>
                                {item.name}<br/>
                                {item.price}<br/>
                                {item.imgLink}
                            </div>
                        })}
                    </div>
                    :
                    <span>No Product has been selected</span>}
            </div>
        </div>
    )
}

export default CartDisplay
