import React from 'react'
import DropSideMenu from '../SideBar/DropSideMenu'
import CanvaEditComponent from './CanvaEditComponent'

export default function EditViewcomponent() {
  return (
    <div className=' w-full h-full flex '>
      {/* this component for Drop side menu bar */}
      <DropSideMenu />

      {/* this component is Canva editing page */}
      <CanvaEditComponent />
    </div>
  )
}
