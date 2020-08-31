import React, {useContext} from 'react'
import userContext from './UserContext'

function HomePage() {

    const user = useContext(userContext)

    return (
      <div className="App">
        <header className="App-body">
          <p>This is a basic Authentication example using React by {user.name}</p>
        </header>
      </div>
    );
}

export default HomePage
