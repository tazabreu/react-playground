import React from 'react'

const UserInput = (props) => {
    const {user, onChange} = props
    return <div>
        <label>User: </label>
        <input type='text' value={user} onChange={onChange}/>
        </div>
}

export default UserInput