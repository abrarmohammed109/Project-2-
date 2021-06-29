import { buildQueries } from '@testing-library/react'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function AllEvents(){

    const [events, setEvents] = useState([])
    
    const getEvents = async () => {
        const API_ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&page=3'
        try{
            const response = await fetch(API_ENDPOINT)
            const data = await response.json()

            setEvents(data._embedded.events)
        } catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
       getEvents()
    },[])
    console.log(events)
    return(
        <section>
            {events.map((event)=>{
                    return(
                    <Link to={`/details/${event.id}`} key={event.id}>   
                        <div className='event'>
                            <div className='event-image'>
                                <img style={{width: 300, height: 200}} src={event.images.[8].url} />
                            </div>
                            <div className='event-name'>

                                <h2>{event.name}</h2>
                                <h2>{event.url}</h2> 
                                <hr></hr>

                            </div>
                        </div>
                    </Link>     
                )
                    
            })}
        </section>

    )
}

export default AllEvents

