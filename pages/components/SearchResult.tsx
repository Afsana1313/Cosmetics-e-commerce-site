import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import ProductTable from './ProductTable'
import Filter from './Filter'
import Cart from './cart/Cart'
import CartDisplay from './cart/CartDisplay'

type cartType = {
    name: string
    price: string
    imgLink: string
    id: number
}
const SearchResult = () => {
    const [data, setData] = useState({result: {}, loading: false});
    const [productType, setProductType] = useState('')
    const [brand, setBrand] = useState('')
    const [cartValue, setCartValue] = useState<number>(0)
    const [showCartDisplay, setShowCartDisplay] = useState(false)
    const [cartData, setCartData] = useState<cartType>({} as cartType)
    const [allProducts, setAllProducts] = useState([{}] as cartType[])

    useEffect(() => {
        if (true) {
            setData({result: data.result, loading: true})
            fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?`
                + `${!!productType ? `product_type=${(productType as string)?.toLowerCase()}` : ``}`
                + `${!!brand ? `&brand=${(brand as string)}` : ``} `)
             .then((data) => data.json())
                .then((data) => {
                  //  console.log(data)
                    setData({result: data, loading: false})
                })
       }
    }, [productType, brand])
    useEffect(() => {
       cartData?.name && setAllProducts([...allProducts, cartData])
    },[cartData])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductType(e.currentTarget.value);
    }
    const getBrand = (brand:string)=>{
        setBrand(brand);
    }
    return (
        <div className='search-result-container'>
            <Filter
                setBrandFunc = {getBrand}
            />
            <div className='product-table'>
                <input
                    value={productType}
                    onChange={handleChange}
                    type='text'
                    placeholder='Search Product i.e. Lipstick, eyeliner'
                    autoComplete='on'
                />
                   
                <ProductTable
                    data={data}
                    price={(price) => {
                        setCartValue(cartValue + price)
                    }}
                    productsInCart={(data: any)=> setCartData(data)}
                />
                <div
                   onClick={() => setShowCartDisplay(true)}
                >
                    <Cart
                        style={{ background: 'transparent' }}
                        cartValue={cartValue}
                        />
                </div>
                {
                    showCartDisplay && <CartDisplay
                    cartValue={cartValue}
                    cartProduct={allProducts}
                        setShowCartDisplay={() => setShowCartDisplay(false)}
                        removeItem={(name,price) => 
                        {
                            const newProducts = allProducts.filter(item => item.name !== name)
                            setAllProducts(newProducts)
                            const a = cartValue-parseFloat(price)
                            setCartValue(parseFloat(a.toFixed(2)))
                            // var sum: number = 0 
                            // newProducts.map(i => sum = sum + parseFloat(i.price))
                            // console.log(sum)
                            // setCartValue(sum)
                           // console.log(cartValue)
                        }
                        }
                        
                />
                }
                
              </div>  
                         
                  
        </div>
    )
}

export default SearchResult
