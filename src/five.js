import React, { useState } from "react";

function Five(){
    let [count,setCount] = useState(1) // count acts as pointer
    function change_color() { // function to change color on command
        let ls = ['green','red','brown','#F6E9F2','white','blue'] // list of all possible colors
        setCount(count+1) // increment pointer
        if (count==7){ 
            setCount(count = 1) // handles error case reset pointer to first index and cycle through
        }

        const colour = ls[count] // index colors 
        document.getElementById('change_color').style.backgroundColor = colour // change back ground color of the box
    }
    
    // render HTML
    
    return(
        <div onClick = {change_color} id = "change_color">
            Click here to change color of background
        </div>
    )
}

export default Five;