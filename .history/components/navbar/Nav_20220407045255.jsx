import React from 'react'
import requests from 'C:\Users\lenovo\Desktop\next-js-app\utilities\requests.js'

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