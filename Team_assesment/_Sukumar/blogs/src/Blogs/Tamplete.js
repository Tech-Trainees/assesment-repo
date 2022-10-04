import React from 'react'
import './css/Templete.css'
import Footers from './Footers'
//import Footers from './Footers'
class Templete extends React.Component{
    render(){
        return(
            <div className='templete'>
            <img src='backround.jpg' alt='' className='back_img'></img>
            <h1 className='slider'>Slider HTML Template </h1>
              <input type='text' placeholder='Enter Keyword' className='inputype'></input>
              <p className='paragrah'>Best HTML Template Free Download. HTML Website Templates, Basic and Simple HTML </p><p className='paragrah2'>Templates Responsive and fully customizable with easy Drag-n-Drop HTML Website </p><p className='paragrah3'>Builderz </p>
              <Footers/>
            </div>
        )
    }
}
export default Templete