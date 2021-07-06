import { buildQueries } from '@testing-library/react'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function SingleEvent(props){


    const [event, setEvent] = useState(null)

    const getEvent = async () => {
        const API_ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*'
        try{
            const response = await fetch(API_ENDPOINT)
            const data = await response.json()

            setEvent(data._embedded.events)
        } catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getEvent()
        // eslint-disable-next-line
    },[])
    
    return(
            <div>
                <h1>hello</h1>
            </div>

    )
}

export default SingleEvent

// `https://app.ticketmaster.com/discovery/v2/events/${}?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*`