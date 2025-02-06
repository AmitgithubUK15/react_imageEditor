import React from 'react'

export default function ImageSidebar() {
  return (
    <div className="w-26 h-full border " >
        <div className="h-full border-2 p-1" >
           <div className="h-full border-1 ">
             <div className="w-full px-1 ">
                <div className=" w-full border flex flex-col cursor-pointer my-5">
                   <div className="w-full flex justify-center">
                   <div >
                    {/* <font-awesome-icon :icon="['fas', 'pager']" size="lg" class="text-gray-500"/> */}
                   </div>
                   </div>
                   <div className="w-full">
                    <p className="text-center w-full">
                        <span className="text-sm text-gray-500">
                            Design
                        </span>
                    </p>
                   </div>
                </div>

                <div className=" w-full border flex flex-col cursor-pointer my-5">
                   <div className="w-full flex justify-center">
                   <div >
                    {/* <font-awesome-icon :icon="['fas', 'image']" size="lg" class="text-gray-500"/> */}
                   </div>
                   </div>
                   <div className="w-full">
                    <p className="text-center w-full">
                        <span className="text-sm text-gray-500">
                            Image
                        </span>
                    </p>
                   </div>
                </div>

                
             </div>
           </div>
        </div>
    </div>
  )
}
