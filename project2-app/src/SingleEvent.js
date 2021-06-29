import React from 'react'
import {useEffect,useState} from 'react'

function SingleEvent(props){

    console.log(props.match.params.id)

    const [event, setEvent] = useState([])

    const getEvent = async () => {
        const API_ENDPOINT = 'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*'
        try{
            const response = await fetch(API_ENDPOINT+props.match.params.id)
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