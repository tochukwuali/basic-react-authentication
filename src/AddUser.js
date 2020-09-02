import React from 'react'

export default function AddUser() {
    
    return (
        <div className="flex-large">
            <h4>Add a User</h4>
            <form>
                <label htmlFor="Name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="Email Address">Email Address</label>
                <input type="email" name="email"  />
                <button> Add New User</button>
            </form>
            
        </div>
    )
}
