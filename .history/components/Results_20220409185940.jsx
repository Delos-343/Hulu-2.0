import React from 'react'
import Thumbnail from './Thumbnail'

function Results({ results }) {
  return (
    <div className='px-5 my-10'>
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
    </div>
  )
}

export default Results