import { buildQueries } from '@testing-library/react'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Search () {
    return (
        <div>
            <form>
                <input type='text'></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search