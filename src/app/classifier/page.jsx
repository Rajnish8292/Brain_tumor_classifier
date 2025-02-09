'use client'

import { NavAtom } from "@/assests/atoms/NavAtom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const getImageData = (file) => {
    const canvas = document.getElementById('canvas')
    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = function() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Get pixel data (RGBA format)
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const pixels = imageData.data;

        console.log("Pixel Data:", pixels);  // Each pixel has 4 values (R, G, B, A)
    };
}

export default function Page() {
    const [currPage, setCurrPage] = useRecoilState(NavAtom)
    const sendInput = (e) => {
        console.log(e.target.value)
    }
    useEffect(() => {
        setCurrPage('classifier')
    })
    return (
        <div className="classifier">
            <div className="upload-image-section">
                <h2>Click to upload MRI scan of Brain</h2>
                <input type="file" className="upload-input"  accept="image/*" onInput={sendInput} />
            </div>
            <div className="prediction-viewer-section"></div>
            <canvas id="canvas" style={{display:'none'}}></canvas>
        </div>
    )
}