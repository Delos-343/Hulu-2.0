import React from 'react'

function Results({ requests }) {
  return (
    <div>
        {requests.map(result => (
          <Thumbnail key={result.id} result={result} />
        ))}
    </div>
  )
}

export default Results