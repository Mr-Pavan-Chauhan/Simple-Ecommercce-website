import React from 'react'
import { useStateValue } from '../StateProvide'
import CheckoutProduct from './CheckoutProduct'
import "./CheckoutPage.css"
import BackButton from './BackButton'
const CheckoutPage = () => {
    const [{ basket, user }] = useStateValue()

    return (<>
        <BackButton />
        <div className='checkout'>
            <div >
                <h3>Hello,{user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {basket && basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />))}
            </div>

        </div>
    </>
    )
}

export default CheckoutPage