import { buildQueries } from '@testing-library/react'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function AllEvents(){

    const [events, setEvents] = useState([])
    
    const getEvents = async () => {
        const API_ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&page=20'
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
                     
                        <div className='event'>
                            <div className='event-image'>
                                <img style={{width: 300, height: 200}} src={event.images[8].url} />
                            </div>
                            <div className='event-name'>
                                <h2><a href={event.url} target="_blank"> {event.name}</a></h2>
                                <h3>Date: {event.dates.start.localDate}</h3>
                                <h3>Location: {event._embedded.venues[0].name}</h3>
                                <hr></hr>
                            </div>
                        </div>
                        
                )
                    
            })}
        </section>

    )
}

export default AllEvents


{/* <Link to={`/details/${event.id}`} key={event.id}>  
</Link>  */}