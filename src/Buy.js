import { buildQueries } from '@testing-library/react'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Buy () {
    return (
        <div className="shopping-cart">
            <div> 
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-trolley-images-pixabay-download-pictures-14.png" width="100" height="100"/>
                <h3><strong>Your Cart is Empty</strong></h3>
                <a className='shopping-back-button'href="/">CLICK TO CONTINUE BROWSING EVENTS</a>
            </div>
        </div>


    )
}

export default Buy