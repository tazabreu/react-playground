import React from 'react'

const UserOutput = (props) => {
    const {user} = props
    return <p>This is {`<UserOutput/>`} for user: {user}</p>
}

export default UserOutput