import Image from 'next/image'
import React from 'react'

const Movies = ({image, title}) => {
  return (
    <div className=' shadow-lg rounded-xl'>
        <h2 className=' text-xs font-bold'>{title}</h2>
        <img src={"https://image.tmdb.org/t/p/w500" + image} alt="image" className=' w-[100%] h-[30vh] mb-[1rem]  rounded-xl object-cover'/>
    </div>
  )
}

export default Movies