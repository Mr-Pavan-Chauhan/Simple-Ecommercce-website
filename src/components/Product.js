import React from 'react'
import { toast } from 'react-toastify';
import { useStateValue } from '../StateProvide';
import "./Product.css"

const Product = ({ id, title, price, rating, image }) => {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            }
        })
        toast.success("Item Added to your Cart")
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (<p>⭐</p>))}
                </div>
            </div>
            <img
                src={image}
                alt='' />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product