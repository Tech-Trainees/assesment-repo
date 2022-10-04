import React,{useState,useRef, useEffect} from 'react'

export const Ref = () => {
    const [inpval,setInpval] = useState('')
    const rendeCount = useRef(0)

    useEffect(() => {
        rendeCount.current = rendeCount.current+1
    })
  return (
    <div>
        <input type='text' value={inpval} onChange={(e)=>{setInpval(e.target.value)}} />
        <h5>{`render count : ${rendeCount.current}`}</h5>
    </div>
  )
}
