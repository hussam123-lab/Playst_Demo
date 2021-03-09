import React, {useState} from 'react';
import One from "./one";
import Two from "./two";
import Three from "./three";
import Four from "./four";
import Five from "./five";


import './App.css'

// App file combining all components
function App() {
   return(
      <div className = "d-flex flex-row ">
        <div className = "left_div">
          <div  className = "left_top"> <One /> </div>
          <div className = "left_mid"></div>
          <div className = "left_bottom"> <Two /> </div> 
        </div>
        <div className = "mid_div">
      </div>
      <div className = "right_div" >
        <div className = "right_top"> <Three /> </div> 
        <div className = "middle"></div>
        <div className = "right_mid"> <Four /> </div>
        <div className = "middle_bottom"></div>
        <div className = "right_bottom"> <Five /> </div>
      </div>


    </div>

    
  );
  
}

export default App;

