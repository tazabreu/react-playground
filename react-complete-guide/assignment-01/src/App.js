import React, {useState} from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'

const users = [
  'Taz',
  'Bruno',
  'Dan',
]

function App() {

  const [usersState, setUsers] = useState(users)

  const onChangeUser = index => event => {
    const updatedUsers = [...usersState]
    updatedUsers[index] = event.target.value
    setUsers(updatedUsers)
  }

  const renderUserCards = () => users.map((user, index) => {
    return <div key={index} className="user-card">
      <UserInput user={usersState[index]} onChange={onChangeUser(index)}/>
      <UserOutput user={usersState[index]}/>
    </div>
  })

  return <div className="App">
      {renderUserCards()}
    </div>

}

export default App;
