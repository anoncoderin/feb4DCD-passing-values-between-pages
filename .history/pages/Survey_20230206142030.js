import { useState } from "react";
import Dashboard from "./Dashboard";

export default function Survey(){
    const [name, setName]= useState('');
    const [isActiveOne, setIsActiveOne]= useState(true);
    const [isActiveTwo, setIsActiveTwo]= useState(false);

    const passName = (event) => {
        if(event.key ==="Enter"){
            console.log("Enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }

}
