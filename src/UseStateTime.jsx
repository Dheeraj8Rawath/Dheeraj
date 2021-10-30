import React,{useState} from "react";


const Time=()=>{

    let newtime= new Date().toLocaleTimeString();
    const state=useState();
    const [count,setTime]=useState(newtime);
    
    const NewClick=()=>{
        let newCtime= new Date().toLocaleTimeString();
        setTime(newCtime);
    }
    setInterval(NewClick,1000);
   

    return(
        <>
     <div className="grid justify-center">
     <h1 className="text-center">{count}</h1>
     {/* <button onClick={NewClick}>Incress</button> */}
     </div>
     </>
     );
   
};

export default Time;