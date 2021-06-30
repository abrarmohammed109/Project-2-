import { buildQueries } from '@testing-library/react'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function About () {
    return (
        <div>
            <form>
                <input type='text'></input>
                <button>About</button>
            </form>
        </div>
    )
}

export default About