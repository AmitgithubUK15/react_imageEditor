import React from 'react'

import './LoadingSpinner.css'
export default function LoadingSpinner() {
  return (
    <div className='w-full h-100vh flex justify-center item-center'>
      <div>
      <span  className="loader"></span>
      </div>
    </div>
  )
}
