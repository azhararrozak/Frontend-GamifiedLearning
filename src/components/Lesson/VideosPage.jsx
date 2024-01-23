import React from 'react'
import Plyr from "plyr-react";
import "plyr-react/plyr.css"

const VideosPage = () => {

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
        src="https://www.youtube.com/embed/aL27fX5kv9U"
      ></iframe>
    </>
  )
}

export default VideosPage