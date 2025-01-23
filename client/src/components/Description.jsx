import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-grat-500 mb-8'>Turn your imagination into visuals</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row item-center'>
            <img src={assets.OIP} alt="" className='  items-center drop-shadow w-80 xl:w-96 rounded-lg  hover:scale-105 transition-all duration-700 '/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-gray-600'>Easily bring your ideas to life with our free AI image generator. Whether you need Stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it,describe it, and watch it come to life instantly.</p>
                <p className='text-gray-600 mt-4'>Simply type in a text prompt, and our cutting-edge Al will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>

            </div>
        </div>
    
    </div>
  )
}

export default Description
