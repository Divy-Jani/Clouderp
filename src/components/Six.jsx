import React from 'react'
import './six.css'

function Six() {
  return (

    <div className="flex-col">
       <div className='font-Lato font-bold text-4xl pt-20' id="six1">
       Stop recording transactions manually
        </div>



        <div className='pt-6 text-lg font-DM text-gray-600' id="six2">

        Spreadsheet integrated with other NextcloudERP’s app
        </div>

        
        
        <div className="flex justify-evenly pt-14 px-96" id="six3">
                <div className=" lg:flex-col lg:items-center lg:justify-center">
                  <div className="bg-lavendar h-20 w-20 rounded-2xl flex justify-center items-center" id="six4" >
                    <img src="/images/coins.png" alt="" className="h-10" />
                  </div>
                  <div className='text-lg font-bold font-DM pt-4'>Sales</div>
                </div>
                <div className="flex-col items-center justify-center">
                  <div className="flex justify-center">
                    <div className="bg-pinkish h-20 w-20 rounded-2xl flex justify-center items-center">
                    <img src="/images/coins.png" alt="" className="h-10" />
                  </div></div>
                  <div className='text-lg font-bold font-DM pt-4'>Accounting</div>
                </div>
                <div className="flex-col items-center justify-center">
                <div className="flex justify-center">
                <div className="bg-lavendar h-20 w-20 rounded-2xl flex justify-center items-center">
                    <div className="flex justify-center"><img src="/images/coins.png" alt="" className="h-10" /></div>
                  </div>
                </div>
                  <div className='text-lg font-bold font-DM pt-4'>Subscriptions</div>
                </div>
                <div className="flex-col items-center justify-center">
                  <div className="flex justify-center">
                  <div className="bg-pinkish h-20 w-20 rounded-2xl flex justify-center items-center">
                    <img src="/images/coins.png" alt="" className="h-10" />
                  </div>
                  </div>
                  <div className='text-lg font-bold font-DM pt-4'>Documents</div>
                </div>
          </div>


    </div>
    




  )
}

export default Six