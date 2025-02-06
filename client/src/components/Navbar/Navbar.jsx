import React from 'react'

export default function Navbar() {
  return (
    
    <div className="w-full h-16 p-2 sticky top-0" 
    style={{backgroundColor:"#6b3fff", backgroundImage:"linear-gradient(to right, #6396ff, #8507ce)"}} >

        <div className="h-full flex items-center">
              <div>
                <h1>
                    <span className="text-xl font-bold text-white">
                        Navbar
                    </span>
                </h1>
              </div>
        </div>

    </div>
  )
}
