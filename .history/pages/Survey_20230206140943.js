import { useState } from "react";

export default function Survey(){
    const [name,setName]= useState('');
    const [isActiveOne, setIsActiveOne]= useState(true);
    const [isActiveTwo, setIsActiveTwo]= useState(false);

    const passName= 

}
return(
    <div>
        <div style={{display: isActiveOne? 'block' :'none'}}>
            <h1>What is your name?</h1>
            <input
            value={name}
            onChange
        </div>
    </div>
)