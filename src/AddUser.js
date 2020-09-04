import React, {useContext, useState} from 'react'
import {UserContext} from './GlobalState'

export default function AddUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('yes')
    
    const { addUser } = useContext(UserContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const newUser =  {
            id: Math.floor(Math.random() * 100000000),
            name,
            email,
            status
    }

    addUser(newUser)
    setEmail('')
    setName('')
 }   

    return (
      <div className="flex-large">
        <h4>Add a User</h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="Email Address">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="choose">Are you coming ?</label>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            {/* <option disabled selected>
              Are you coming ?
            </option> */}
            <option value="Yes" selected>Yes</option>
            <option value="No">No</option>
          </select>
          <button> Add New User</button>
        </form>
      </div>
    );
}
