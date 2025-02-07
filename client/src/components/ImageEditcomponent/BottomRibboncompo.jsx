import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CanvaZoomIn,CanvaZoomOut,onchangeCanvazoom } from '../../state_manage/redux/Canva/canvazoom/Canvazoomslice';

export default function BottomRibboncompo() {
  const zoom = useSelector((state)=>state.canvazoom.canvazoomlevel);
  const dispatch = useDispatch();
  return (
    <div className='w-full flex justify-around'>
      <div>
      BottomRibboncompo
      </div>
      <div>
       <button className='w-20 ' onClick={()=>dispatch(CanvaZoomIn())}>+</button>
       <input type="range" id="vol" value={zoom} name="vol" min="1" max="15" onChange={(e)=>dispatch(onchangeCanvazoom(e.target.value))}></input>
       <button className='w-20'  onClick={()=>dispatch(CanvaZoomOut())}>-</button>
      </div>
    </div>
  )
}
