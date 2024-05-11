import React from "react";
import { ScheduleButton } from "./Button";
import { ExpertButton } from "./Button";
import './one.css'

const One=()=>{

    return(
        <div className=" flex " id="oneone" >
            <div className="w-1/2 flex-col  mt-32 text-left pl-28" id="onee">
            <div className="headingg font-Lato font-extrabold text-5xl pb-4 tracking-wide" id="onee2">
            Go to extra mile </div> 
            <div className="headingg font-Lato font-extrabold text-5xl tracking-wide" id="onee2"> with Spreadsheet </div>

            <div className="text-lg text-gray-700  font-DM mt-5" id="onee3"> 
            Upskill your Business Intelligence practices.
            </div>

            <div className="flex mt-10 space-x-10" id="one2btnn">
                <div id="one2btn2">
                    <ExpertButton/>
                </div>
                <div className="font-medium" id="one2btn">

                    <ScheduleButton/>

                </div>
            </div>
       
            
            





            
        </div>
        <div className="w-1/2">
        <img src="/images/laptopone.png" className="w-full" alt="Image" />
        </div>
     </div>

    )
}

export default One;