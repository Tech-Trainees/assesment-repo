import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement,increment } from './counterSlice'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div style={{textAlign:'center'}}>
        <div>
            <div>{count}</div>
           
            <button aria-label='Decrement-val' onClick={() => dispatch(decrement())}>-</button> &nbsp;
            <button aria-label='Increment-val' onClick={() => dispatch(increment())}>+</button>
         
            <div className='web_comp1 msite_comp1'>
                {/* <input type='number' onChange={() => dispatch(incrByAmt())} /> */}
            </div>
        </div>
    </div>
  )
}
