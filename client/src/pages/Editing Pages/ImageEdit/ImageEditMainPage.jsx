import React from 'react'
import ImageSidebar from '../../../components/SideBar/ImageSidebar'
import EditingLayoutWraper from '../../../components/ImageEditcomponent/EditingLayoutWraper'

export default function ImageEditMainPage() {
  return (
    <div style={{height:'90%'}} className=' w-full bg-gray-100 py-1 px-3 border'>
      <div className='w-full h-full flex'>
       {/* sidebar for editing tool */}
       <ImageSidebar />
       {/* -- this editing wraper */}
        <EditingLayoutWraper />
      </div>
    </div>
  )
}
