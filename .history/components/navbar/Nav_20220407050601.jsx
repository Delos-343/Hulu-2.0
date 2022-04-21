import React from 'react'
import requests from '../utils/requests'

function Nav() {
  return (
    <nav>
        <div>
          {Object.entries(requests).map([key, { title, url }] )}
        </div>
    </nav>
  )
}

export default Nav