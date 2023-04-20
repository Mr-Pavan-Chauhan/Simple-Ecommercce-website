
import React from 'react'
import "./Header.css"
import { ShoppingBasket } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvide';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate()
    const handleAuthentication = () => {
        if (user) {
            dispatch({
                type: 'SET_USER',
                user: null
            })

            localStorage.clear()
            navigate("/");
        }
    }
    return (
        <div className='header'>
            <div className='header__nav'>
                <div className="header__option">
                    {user && user.email}
                    <div onClick={handleAuthentication}>
                        <span className='header__optionLineTwo'>
                            Sign out
                        </span>
                    </div>

                </div>
            </div>
            <div className='header__nav'>
                <Link to="/checkout">
                    <div className="header__optionBasket">

                        <ShoppingBasket />
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header