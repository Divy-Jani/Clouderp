import React from 'react'
import './three.css'

function Three() {
  return (
    <div className="p-20 flex" id="three0">

        <div className="w-1/2" id="three1">
            <img src="/images/three_image.png" alt="" />

        </div> 
        
        <div className="w-1/2 flex-col pt-24 pl-24" id="three2">
            <div className='text-4xl font-Lato font-bold text-left' id="three3">
            Highlight Information 
            </div>
            <div className='text-lg/loose font-normal font-DM text-justify pt-6'  id="three4"   >
            With the conditional formatting option, you can effortlessly <br/>detect critical issues and identify patterns and trends. Easy! <br/> It can help you to notice your important data first.
            </div>

        </div>


    </div>
    

  )
}

export default Three