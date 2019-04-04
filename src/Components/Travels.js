import React from 'react'
import Travel from "./Travel"

const arrayTravels = [
    {
        destination : "Buenos Aires",
        country :"Argentina", 
        photo : "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F39add300-f147-11e7-a480-969f697997ea.jpg?crop=5094%2C2865%2C91%2C326&resize=685",
        distance : "11043 km",
    },
    {
        destination : "Tokyo",
        country : "Japan",
        photo : "https://www.ummahtrip.com/wp-content/uploads/2018/09/ummahtrip_tokyo_1-968x530.jpg",
        distance : "9710 km",
    },
    {
        destination : "Berlin",
        country : "Germany",
        photo : "https://www.railtour.ch/_images/ccd/417608/Escapade-a-Berlin-L-ile-des-musees-36819556.jpg",
        distance : "1054 km",
    },
]

function createTravel(Table){
    return Table.map(travel => {
        return <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
    })
}

const Travels = () => {
    return (createTravel(arrayTravels))
}


export default Travels;