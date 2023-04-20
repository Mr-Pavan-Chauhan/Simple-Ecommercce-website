import React from 'react'
import { toast } from 'react-toastify'
import { useStateValue } from '../StateProvide'
import "./CheckoutProduct.css"

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue()
    const removeFromTheBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
        toast.success("Items removed from your cart succesfully")
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (<p>⭐</p>))}
                </div>
                <button onClick={removeFromTheBasket}> remove from the cart </button>
            </div>
        </div>
    )
}

export default CheckoutProduct