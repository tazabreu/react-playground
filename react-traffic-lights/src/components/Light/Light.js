import React from 'react'

const Light = (props) => {
    
    const {light, turnedOn, onClick} = props

    const style = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: light.color,
        margin: '20px',
        opacity: light.turnedOn ? '1' : '0.2'
    }

    return <div style={style} onClick={onClick}/>
}

export default Light