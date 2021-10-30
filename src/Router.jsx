import React from "react";

const Rout=()=>{
    return(
        <>
        <switch>
            <Route exact path="/" component={First}/>
            <Route exact path="/Aboutus" component={about}/>

        </switch>
        </>
    )
}