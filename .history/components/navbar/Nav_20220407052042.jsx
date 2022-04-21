import React from 'react'
import req from '...../utils/requests'

function Nav() {
  return (
    <nav>
        <div>
          {Object.entries(req).map(([key, { title, url }]) => (
            <h2> {title} </h2>
          ))}
        </div>
    </nav>
  )
}

export default Nav