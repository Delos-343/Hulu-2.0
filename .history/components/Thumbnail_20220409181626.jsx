import React from 'react'
import Image from 'next/image'

function Thumbnail( result ) {
  return (
    <div>
        <Image
            layout='responsive'
            height={1080}
            width={1920}
        />
    </div>
  )
}

export default Thumbnail