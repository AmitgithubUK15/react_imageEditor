import React from 'react'
import EditViewcomponent from './EditViewcomponent'
import BottomRibboncompo from './BottomRibboncompo'

export default function EditingLayoutWraper() {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-full flex flex-col'>
            {/* this component for editing view */}
            <div style={{height:"95%"}}>
                <EditViewcomponent />
            </div>
            
            {/* this component for Bottom ribbon */}
            <BottomRibboncompo />
        </div>
    </div>
  )
}
