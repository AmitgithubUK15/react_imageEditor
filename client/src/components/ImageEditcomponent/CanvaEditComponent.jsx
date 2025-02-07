import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { useSelector } from "react-redux";

export default function CanvaEditComponent() {
  const zoom = useSelector((state) => state.canvazoom.canvazoomlevel);
  const canvaref = useRef(null);
  const [canva, setCanva] = useState(null);

  useEffect(() => {
    // ✅ Initialize Fabric.js Canvas
    const canvas = new fabric.Canvas(canvaref.current, {
      width: 430,
      height: 520,
     
    });

    setCanva(canvas);

    // ✅ Enable Drag & Drop on Canvas
    const canvasContainer = canvaref.current.parentElement;

    canvasContainer.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    canvasContainer.addEventListener("drop", (e) => {
      e.preventDefault();

      // ✅ Get Image Data (Base64 or URL)
      const imgUrl = e.dataTransfer.getData("text") || e.dataTransfer.getData("URL");
     

      if (!imgUrl) {
        console.error("No image data found in drop event!");
        return;
      }

      // ✅ Check if Image is in Base64 Format
      if (imgUrl.startsWith("data:image")) {
        // Base64 Image Handling
        const imgElement = new Image();
        imgElement.src = imgUrl;
        imgElement.onload = () => {
          const fabricImage = new fabric.Image(imgElement, {
            left: 50,
            top: 50,
            scaleX: 0.4,
            scaleY: 0.4,
          });

          canvas.add(fabricImage);
          canvas.renderAll();
        };
      } 
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full border flex flex-col items-center">
      {/* Canvas */}
      <div className="w-full h-full p-3 flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full h-full p-2 flex justify-center items-center overflow-scroll">
          <div className="bg-white">
          <canvas
            ref={canvaref}
            style={{ transform: `scale(${zoom})` }}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
