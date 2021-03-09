import React from "react";

// main funtion returning HTML
function Two(){

    function pressed_color(id) {
        if (document.getElementById(id)){ // if not undefined
            document.getElementById(id).addEventListener("click",function(){ 
            document.getElementById(id).style.backgroundColor ="green"// upon click change color to green,effectively highlighting color
            })
        }
    }

    // rendering HTML - Carousel 
    
    return(
        <div className = "main_car"> 
            <div>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
                    <div class="carousel-inner">
                        <div class="carousel-item active ">
                            <div className = "d-flex justify-content-between first_slide " >
                                <div></div>
                                <button id = "python" onClick = {pressed_color('python')} type="button" class="btn  btn-secondary btn_siz" >Python</button>
                                <button id = "java" onClick = {pressed_color('java')} type="button" class="btn  btn-secondary btn_siz" >Java</button>
                                <button id = "Matlab" onClick = {pressed_color('Matlab')} type="button" class="btn  btn-secondary btn_siz" >Matlab</button>
                                <button id = "JavaScript" onClick = {pressed_color('JavaScript')} type="button" class="btn btn-secondary btn_siz">JavaScript</button>
                                <button id = "HTML" onClick = {pressed_color('HTML')} type="button" class="btn  btn-secondary btn_siz" >HTML</button>
                    <           div></div>
                            </div>
              
                        </div>
                        
                        <div class="carousel-item">
                            <div className = "d-flex justify-content-between first_slide " >
                                <div ></div>
                                <button id = "Soldering" onClick = {pressed_color('Soldering')} type="button" class="btn  btn-secondary btn_siz" >Soldering</button>
                                <button id = "Tinkering" onClick = {pressed_color('Tinkering')} type="button" class="btn btn-secondary btn_siz" >Tinkering</button>
                                <button id = "Metal" onClick = {pressed_color('Metal')} type="button" class="btn btn-secondary btn_siz" >Metal</button>
                                <button id = "Wood" onClick = {pressed_color('Wood')} type="button" class="btn btn-secondary btn_siz">Wood</button>
                                <button id = "Carpentry" onClick = {pressed_color('Carpentry')} type="button" class="btn  btn-secondary btn_siz" >Carpentry</button>
                                <div></div>
                            </div>
              
                        </div>
                        <div class="carousel-item">
                            <div className = "d-flex justify-content-between first_slide " >
                                <div></div>
                                <button id = "Verbal" onClick = {pressed_color('Verbal')} type="button" class="btn  btn-secondary btn_siz">Verbal</button>
                                <button id = "Written" onClick = {pressed_color('Written')} type="button" class="btn btn-secondary btn_siz" >Written</button>
                                <button id = "Reasoning" onClick = {pressed_color('Reasoning')} type="button" class="btn  btn-secondary btn_siz" >Reasoning</button>
                                <button id = "Critical" onClick = {pressed_color('Critical')} type="button" class="btn btn-secondary btn_siz" >Critical</button>
                                <button id = "Leader" onClick = {pressed_color('Leader')} type="button" class="btn  btn-secondary btn_siz">Leader</button>
                    <           div></div>
                            </div>
               
                        </div>
                    </div>
        
                    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div class= "d-flex justify-content-center">
                   <div className = "tech_skills">  Pick Your Relevant Skills</div>
               </div>
            </div>
        </div>
    )
}

export default Two;
