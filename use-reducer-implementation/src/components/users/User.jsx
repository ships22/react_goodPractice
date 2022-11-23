import React from 'react'
import { useReducer } from 'react'
import { ACTION_TYPES } from './action'
import './user.css'
import { INITIAL_STATE, usersReducer } from './userReducer'

function User() {
  const [state, dispatch] = useReducer(usersReducer, INITIAL_STATE)

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.ON_FETCH })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch({ type: ACTION_TYPES.ON_SUCCESS, payload: data })
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.ON_ERROR })
      })
  }
  return (
    <div>
      <h2 onClick={handleFetch}>Get Users</h2>
      <h3>{state.loading && 'Loading'}</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>{state.error && 'Something went wrong'}</span>
    </div>
  )
}

export default User
