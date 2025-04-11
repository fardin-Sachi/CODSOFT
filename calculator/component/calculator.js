"use client"
import React, { useEffect, useState } from 'react'

export default function Calculator() {
    const [displayString, setDisplayString] = useState("")
    const [afterCalculation, setAfterCalculation] = useState(false)

    const handleClick = function (key){
        setDisplayString(displayString+key)
        if(key==="AC" || afterCalculation) {
            setDisplayString(0)
            setAfterCalculation(false)
        }
        if((displayString === "0" || afterCalculation) && key !== "0"){
            setDisplayString(key)
        }

        if(key==="="){
            setDisplayString(eval(displayString))
            setAfterCalculation(true)
        }
    }

  return (
    <div className="flex flex-col justify-center m-52">
      <div className="border">
        <div id="display" className="flex justify-end-safe border h-8">
            {displayString}
        </div>
        
        <div className="grid grid-cols-4 gap-2 border py-10 justify-items-center">

            <div className="flex justify-center">
                <button onClick={()=>handleClick("7")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 7 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("8")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 8 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("9")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 9 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("AC")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> AC </button>
            </div>

            <div className="">
                <button onClick={()=>handleClick("4")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 4 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("5")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 5 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("6")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 6 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("-")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> - </button>
            </div>

            <div className="">
                <button onClick={()=>handleClick("1")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 1 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("2")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 2 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("3")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 3 </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("+")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> + </button>
            </div>

            <div className="">
                <button onClick={()=>handleClick("*")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> * </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("/")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> / </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick(".")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> . </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("=")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> = </button>
            </div>
            <div className="">
                <button onClick={()=>handleClick("0")} className='text-lg hover:bg-amber-200 border rounded-lg p-3 w-14 h-14'> 0 </button>
            </div>
            
        </div>

      </div>
    </div>
  )
}
