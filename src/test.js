import React from "react";

function Test(){

    function user_input(){
        const im = document.getElementById('img');
        console.log(im.files[0])
      const Reader = new FileReader()
      Reader.addEventListener("load",function(){
          console.log(this);
          document.getElementById("user_prof").setAttribute("src",this.result);
      })
      Reader.readAsDataURL(im.files[0])
       
    }

    return(
        <div>
         <input type="file" id="img" name="img" accept="image/*"></input>
            <button onClick = {user_input} >press</button>
         
                <img id="user_prof" src="" alt="" width = "10vw" height="10vw"/>
       
       
        </div>
    )
}

export default Test;