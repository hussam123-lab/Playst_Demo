import React,{ useState } from "react";

// main function for literacy 

function Four(){
    const [count,setCount] = useState(0) // set count of how many user got correct to 0
    
    function Check(){ // function to determine if user identified enough incorrect words
        if (count>6){ 
            document.getElementById('literacy_review').innerHTML = "Competance In Literacy(Proven)" // if enough selected place success statement in div 
        }
        else{
            document.getElementById('literacy_review').innerHTML = "Competance In Literacy(In Progress)" // if not enough place fail statement
        }
        document.getElementById('Question_literacy').style.visibility = 'hidden' // make question invisible
        document.getElementById("div_sub").style.visibility = 'hidden' // make submit button invisible
        document.getElementById("Question_literacy_prompt").style.visibility = 'hidden' // make prompt inbisible
    }

    
    // render HTML
    return(

        <div>
            <div id = "Question_literacy">  
                Click The Incorrect Words
            </div>
            <div id = "literacy_review"></div>
            <div id = "Question_literacy_prompt" >
                A red <span onClick ={()=>{setCount(count+1)}}> foox </span> came doown the Big <span onClick ={()=>{setCount(count+1)}}> rAd </span> hill. He <span onClick ={()=>{setCount(count+1)}}> DiDd </span> not realise how <span onClick ={()=>{setCount(count+1)}}> steeep </span> it was.
            </div>
            <div id = "div_sub">
                <button onClick = {Check} id = "liter_but">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Four;