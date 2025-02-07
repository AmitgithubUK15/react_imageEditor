import React, { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { dragStart } from '../../state_manage/redux/Canva/Drag&Drop/DragDropSlice';

export default function DropSideMenu() {
  const fileInput = useRef(null);
  const [imgsrc, setImgsrc] = useState([]);
  const dispatch = useDispatch();

  function OpenImage(){
    fileInput.current.click();
  }

  const handleFileInput = useCallback((files)=>{
    {
      
       if(files.length > 0 && files.length <= 9){
        
        const readFile = (file) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
          });
        };
  
        // Read all files asynchronously
        Promise.all(Array.from(files).map(readFile)).then((results) => {
          setImgsrc(results);
        });

       }
       else{
        alert("Maxmum select image 9")
       }
      }
  },[])



  return (
    <div  className="h-full w-96 border px-1 py-2">
    <div className="h-full w-full flex flex-col">

    {/* upload image */}
      <div className="w-full flex flex-col gap-3 h-28 border-b border-gray-400">
        <div className="px-2">
          <div>
           <input type="text" className='border-2 border-black p-2 w-full bg-white rounded-xl outline-none ' placeholder='Search' />
          </div>
        </div>
        <div className="w-full flex justify-center items-center px-2">
          <input onChange={(e)=>handleFileInput(e.target.files)}  type="file" multiple  hidden ref={fileInput} accept="image/png,image/gif,image/jpeg" />
          
          <button onClick={OpenImage}  className="w-full py-2 bg-blue-600 rounded-lg text-white cursor-pointer">
            Upload Images
          </button>
        </div>
      </div>

      {/* uploaded image  */}
      <div className="w-full flex flex-col gap-3 h-64 border-b border-gray-400">
        <div className="w-full flex flex-col h-full">
        {/* title */}
          <div className="px-2">
            <h2>
              <span className="text-sm text-gray-500">Uploaded images</span>
            </h2>
          </div>

          {/* image grid  */}
          <div className="w-full h-full px-1 overflow-hidden p-1">
            <div className="h-full  grid grid-cols-3  gap-2 overflow-x-scroll " style={{scrollbarWidth:"none"}}>
              {imgsrc &&  imgsrc.map((val,i)=>(
                <div key={i} className="w-full h-24 p-1 flex items-center justify-center">
                <img  draggable onDrag={(e)=>dispatch(dragStart(e))}  src={val} alt="Uploaded Image" className="h-full w-full object-cover rounded" />
              </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  )
}
