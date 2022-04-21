import React from 'react'
import Thumbnail from './Thumbnail'

function Results({ results }) {
  return (
    <div>
        {results.map(result => (
          <Thumbnailmbnail key={result.id} result={result} />
        ))}
    </div>
  )
}

export default Results