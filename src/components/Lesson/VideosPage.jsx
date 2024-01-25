import React from 'react'
import Plyr from "plyr-react";
import "plyr-react/plyr.css"

const VideosPage = ({urlVideo}) => {

  const videoSrc = {
    type: "video",
    sources: [
      {
        src: "wDMTaLZ-XX0",
        provider: "youtube"
      }
    ]
  };

  return (
    <>
        <iframe
        width="860"
        height="484"
        src={`https://www.youtube.com/embed/${urlVideo}`}
      ></iframe>
      <div className='border w-full p-2'>
        <h1 className='text-xl font-bold'>Komentar</h1>
        <div className='border'>
          <h3 className='font-bold text-sm'>Nama Komentar</h3>
          <p>Ini Koment</p>
        </div>
      </div>
    </>
  )
}

export default VideosPage