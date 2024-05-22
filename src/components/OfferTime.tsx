import React,{useState} from 'react'

const OfferTime = () => {
    const [time,setTime] = useState("")

    const date = new Date()
    const hh = date.getHours()
    const mm = date.getMinutes()
    const ss = date.getSeconds()

    setTimeout(()=>{
       setTime(hh+" H: "+mm+" M: "+ss+" S ")
    },1000)
  return (
    <div>
      <div className='w-full bg-blue-50 h-14 flex flex-col items-center justify-center'>
      <h1 className='text-gray-500'>Sale Ends In <span className='text-rose-400'>{time}</span></h1>
    </div>
    </div>
  )
}

export default OfferTime
