import { useState } from "react";  
import { useEffect } from "react";

function images (){
    let image;
    
        image = fetch('https://source.unsplash.com/400x400/?laugh')
        
    
    return image

}
export default function Card (props){
    let image = images(image)
    return (
        <div className="card">
            <img suorce={image}/>
        </div>
    )

}