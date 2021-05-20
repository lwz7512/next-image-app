import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'


const ImageWithCover = ({ coverImgStr, imgSrc, altName }) => {

  const [loaded, setLoaded] = useState(false)
  const timeRef = useRef(0)

  useEffect(() => {
    const target = document.querySelector(`#img-${altName}`)
    timeRef.current = setInterval(() => {
      if(!target) return
      if(!target.complete) return

      clearInterval(timeRef.current) // detection completed
      setLoaded(true) // hide placeholder
    }, 200)

    return () => clearInterval(timeRef.current)
  }, [])


  return (
    <>
      {!loaded && 
        <img 
          src={coverImgStr} 
          style={{objectFit: 'cover'}}
          width="100%" height="100%" 
        />
      }
      <Image
        id={`img-${altName}`}
        alt={altName}
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </>
  )
}

export default ImageWithCover