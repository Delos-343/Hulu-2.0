import React from 'react'
import requests from '..../utilities/requests'

function Nav() {
  return (
    <nav>
        <div>
          {Object.entries(requests)}
        </div>
    </nav>
  )
}

export default Nav