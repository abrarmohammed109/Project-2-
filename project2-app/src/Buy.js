import { buildQueries } from '@testing-library/react'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Buy () {
    return (
        <div>
            <form>
                <input type='text'></input>
                <button>Buy</button>
            </form>
        </div>
    )
}

export default Buy