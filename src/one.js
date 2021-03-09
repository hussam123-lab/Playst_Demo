
import React from "react";


function One(){
    // image submission function
        function user_input(){
            const im = document.getElementById('img'); // location of image submission

            if (im.files[0] != undefined){
                const Reader = new FileReader() // object used to read file as a URL
                Reader.addEventListener("load",function(){
                document.getElementById("user_prof").setAttribute("src",this.result); // Upon loading the file the src attribute of the image tag is set to URL stored in the file reader onject
                document.getElementById('user_prof').style.visibility = 'visible'
            })

            Reader.readAsDataURL(im.files[0]) // instantiates the File reader object using user submitted file
            document.getElementById('img').style.visibility = 'hidden' // Make input button invisible
            document.getElementById('profile_sub').style.visibility = 'hidden' // Make submit button invisible
            }
        }

    // User description submission

    function User_Desc(){
        if (document.getElementById('text_ar_left').value.length != 0 ){ //ensures user has entered text
            const desc =  document.getElementById('text_ar_left').value // gets the value inputted
            document.getElementById('text_ar_left').style.visibility = "hidden" // makes text entry invisible
            document.getElementById('description_submission').style.visibility = "hidden" // makes submit button invisble
            document.getElementById("bio_hidden").innerHTML= desc; // copies user content over to a pre styled div
        }
    }   

    function Visibility_Change(id){
        document.getElementById(id).style.visibility = 'hidden'; //function to make divs invisible
    }

// Short Description

    function Short_Desc(){
        if (document.getElementById('text_ar_left_bottom').value.length != 0){ 
            const desc = document.getElementById('text_ar_left_bottom').value
            document.getElementById('text_ar_left_bottom').style.visibility = 'hidden'
            document.getElementById('short_desc_sub').style.visibility = 'hidden'
            const descr = ' " ' + desc + ' " ';
            document.getElementById('short_desc_hidden').innerHTML = descr;
        }
    }

    // rendering HTML
    return(
        
        <div >
            <div className = "d-flex flex-row">

                <div className = "top_left_upper">
                    <input type="file" id="img" name="img" accept="image/*"></input>
                    <button id = "profile_sub" onClick = {user_input} >press here after submitting the picture</button>
                <   img  id="user_prof" src="./arrow.png" alt="Use the buttons on the left to select and upload a profile picture. First choose a file then press submit."  width = "10vw" height="10vw"/>  
                </div>

        
                <div className="top_right_upper">
                    <textarea placeholder = "Within 400 characters describe yourself and then press submit Bio" maxLength="400"  name="" id="text_ar_left" cols="55" rows="10"></textarea>
                    <button   onClick = {User_Desc} id = "description_submission" class = "description_submission">Bio Submit</button>
                </div>

                <div id = "bio_hidden" className = "bio_hidden" ></div>

            </div>
            
            <div>
                <textarea maxLength = "37" placeholder = "Within 37 characters, leave a catch phrase of yours"  name="" id="text_ar_left_bottom" cols="60" rows="5"></textarea>
                <button onClick = {Short_Desc} id="short_desc_sub">Submit Catch Phrase</button>
            </div>
            
            <div id = "short_desc_hidden" className = "short_desc_hidden"></div>
       

        </div>


    )
}

export default One;