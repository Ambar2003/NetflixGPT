import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-full aspect-video r  absolute text-white bg-gradient-to-r from-black">
      <div className="my-[16%] px-12">
      <h1 className="font-bold text-4xl mx-7">{title}</h1>
      <p className="w-1/2 mx-7 text-2xl">{overview}</p>
      <div className="font-bold text-2xl m-2 my-4">
        <button className="bg-slate-400 text-2xl mx-4 rounded-lg p-4 hover:bg-slate-500">▶Play</button>
        <button className="bg-slate-400 text-2xl rounded-lg p-4 hover:bg-slate-500">ℹMore Info</button>
      </div>
    </div>
      </div>
  )
}

export default VideoTitle;
