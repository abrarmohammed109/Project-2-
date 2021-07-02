import React, { useEffect } from 'react'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'

function PageFive(){

    
    const [events, setEvents] = useState([])
    
    const getEvents = async () => {
        const API_ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&page=120'
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
                                <button className='button'>Buy</button>
                                <hr></hr>
                            </div>
                        </div>
                        
                )
                    
            })}
            <div className='pages'>
                <NavLink to='/page2' className='pg2' activeStyle={{fontWeight: "bold", color: "red"}}><p>2</p></NavLink>
                <NavLink to='/page3' className='pg3' activeStyle={{fontWeight: "bold", color: "red"}}><p>3</p></NavLink>
                <NavLink to='/page4' className='pg4' activeStyle={{fontWeight: "bold", color: "red"}}><p>4</p></NavLink>
                <NavLink to='/page5' className='pg5' activeStyle={{fontWeight: "bold", color: "red"}}><p>5</p></NavLink>
                <NavLink to='/page6' className='pg6' activeStyle={{fontWeight: "bold", color: "red"}}><p>6</p></NavLink>
                <NavLink to='/page7' className='pg7' activeStyle={{fontWeight: "bold", color: "red"}}><p>7</p></NavLink>
                <NavLink to='/page8' className='pg8' activeStyle={{fontWeight: "bold", color: "red"}}><p>8</p></NavLink>
                <NavLink to='/page9' className='pg9' activeStyle={{fontWeight: "bold", color: "red"}}><p>9</p></NavLink>
                <p className='pg3'>{`>>`}</p>

                
            </div>
        </section>
    )
}

export default PageFive