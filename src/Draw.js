
import React from 'react';
import './App.css'

const Draw = (props) => {

    let numbers = [...props.numbers]
    let index = props.index
    let finish = props.finish

if(index === numbers.length){

    finish = true
    
   }

   console.log(props)
    
    return (
        <>
        <button type="button" class="btn btn-success" onClick={props.draw}>Losuj</button><br/>
   
        <span>
        {finish ? numbers[numbers.length-1] : numbers[index]}
                
        </span>
       
        </>
     );

}
 
export default Draw;