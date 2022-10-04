import React, { useState ,useEffect} from "react";
  
  
 const Cart = () => {
  const [counter, setCounter] = useState(0)
  const [disable,setdisable]=useState(true)
  const [amnt,setamnt]=useState(25)  
  const [totalamnt,settotalamnt]=useState('')  
  const [quantity,setquantity]=useState([])  

  const handleClickinc = () => {
    setCounter(counter + 1)
    setdisable(false)

  }
  const handleClickdec = () => {
           setCounter(counter - 1)
  }
    useEffect(() => {
            if(counter<=0){
                setdisable(true)
            }
            if(counter>0){
            settotalamnt(amnt*counter)
            // setquantity([...quantity,{product:"Milk",count:counter}])
            setquantity(quantity.splice(0,1,{product:"Milk",count:counter}))
            console.log({quantity})}
        }, [counter]);

  return(<>
    <div  style={{display: 'flex'}} >
        <div style={{margin:'auto',display:"flex"}}><button onClick={handleClickinc}>+</button>
        <p >{counter}</p>
        <button disabled={disable} onClick={handleClickdec}>-</button></div>
    </div>
    <h2>	&#8377;{amnt*counter}</h2>
    </>
  )

}
export default Cart