import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./PageNotFound.css"
const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="not-found">
            <h1>404 Page Not Found</h1>
            <p>We're sorry, the page you requested could not be found   </p>
            <p>You can redirect To login page</p>
            <Button onClick={() => { navigate("/") }}>Login Page</Button>
        </div>
    )
}

export default PageNotFound