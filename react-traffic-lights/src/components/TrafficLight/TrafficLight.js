import React, { useState } from 'react'
import Light from '../Light/Light'

const style = {
    display: 'inline-block',
    backgroundColor: 'black',
    color: 'white',
    margin: '10px',
    padding: '10px'
}

const TrafficLight = (props) => {
    
    const {lights} = props
    const [lightsState, setLights] = useState(lights.map(light => { return {...light, turnedOn: false}}))

    const turnOn = (index) => () => {
        const newLightsState = lightsState.map(light => {
            return {...light, turnedOn: false}
        })
        newLightsState[index].turnedOn = true;
        setLights(newLightsState)
    }

    return <div style={style}>
        {lightsState.map((light, index) => <Light light={light} turnedOn={lightsState[index].turnedOn} onClick={turnOn(index)}/>)}
    </div>
}

export default TrafficLight