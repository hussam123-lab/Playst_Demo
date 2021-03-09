import React from "react";

// main function for numerical competency
function Three(){
  
    function make_hidden(id){ //function to make divs invisible
        document.getElementById(id).style.visibility = 'hidden' // makes div invisible
    }
    function next_Question(){ // function to generate next question
        var correct = 0 // initialise the number of answers correct
        let user_ans = document.getElementById('user_ans').value; // get the value user inputs 
        if (user_ans == 2){
            correct += 1 // if answer is correct increment tracker
        }
        document.getElementById('Question_number').innerHTML = 'Question 2' // changes the question to Question 2
        document.getElementById('Question_desc').innerHTML = "2*2" // Changes question from addition to multiplication
        document.getElementById('sub').addEventListener("click",function(){ 
            let user_ans = document.getElementById('user_ans').value; // get value user submitted upon the user clicking submit
            if(user_ans == 4){
                correct+=1 // if correct increment tracker
            }
            if (correct == 2){ 
                document.getElementById('result').innerHTML = "Competance In Numeracy(Proven)" // checks whether user has gotten two correct and if so displays attained maessage
            }

            else{
                document.getElementById('result').innerHTML = "Competance In Numeracy(In Progress)" // if two weren't correct not proven
            }
           
            document.getElementById('sub').style.visibility = 'hidden' // makes question invisible
            document.getElementById('txt_area').style.visibility = 'hidden' // makes input box invisible 
            document.getElementById('Question_number').style.visibility = 'hidden'  // makes question invisible
            document.getElementById('Question_desc').style.visibility = 'hidden' // makes description invisible
        })

    }
    
    // render HTML

    return(
        <div>
            <div  id = "Question_number">
                Question 1
            </div>
            <div id = "result"></div>
            <div id = "Question_desc">
                1+1
            </div>
        
            <div id = "txt_area" className = "Question_answer">
                <textarea name="" id="user_ans" cols="30" rows="1" > </textarea>
            </div>
            <div className = "Question_answer">
                <button id = "sub" onClick = {next_Question} >
                    Submit
                </button>
            </div>
             
        </div>
    )
}

export default Three;