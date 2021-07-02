import { buildQueries } from '@testing-library/react'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Search () {
    return (

        <form>
            <label htmlFor='name'>First and Last Name:</label>
            <input type='text' id='name' />

            <label htmlFor='event-name'>Event Name:</label>
            <input type='text' id='event-name'/>

            <label htmlFor='email'>Email:</label>
            <input type='text' id='email'/>
            <input type='submit' />
        </form>
    )
}

export default Search