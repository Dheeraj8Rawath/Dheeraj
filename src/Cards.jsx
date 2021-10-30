import React from "react";
import Myimage from "./Image/Myimage2.jpg"
import Myimage2 from "./Image/myimage3.png"
import Myimage3 from "./Image/M.png"





const Card=()=>{
    return(
        <>

        <h1 className="Co">COURSES</h1>
        <div class="container">
            <div class="row">
                <div className="col-sm-4 Box">
                <div className="Pic">
                <img src={Myimage} width="320px" height="200px" className="DA"/>
                </div>
                <div>
                <h1>Data Analysis</h1>
                <p className="PA">Data analysis is a process of inspecting, cleansing, transforming,
                 and modelling data with the goal of discovering useful information, 
                informing conclusions, and supporting decision-making.</p>
                </div>
                
                <button className="BC">View More</button>

                </div>

                <div className="col-sm-4 Box">
                    
                <div className="Pic">
                <img src={Myimage3} width="320px" height="200px" className="FL"/>
                </div>

                <div>
                 <h1>Full Stack</h1>
                 <p className="PA">A full stack developer is an engineer who can handle all the work of databases, 
                 servers, systems engineering, and clients. Depending on the project, what customers need may be a mobile stack,
                  a Web stack, or a native application stack.</p>
                </div>
                <button className="BB">View More</button>
                </div>
        
                <div className="col-sm-4 Box">
                    
                <div className="Pic">
                <img src={Myimage2} width="320px" height="200px" className="AD"/>
                </div>

                <div>
                 <h1>Android</h1>
                 <p className="PA">Android is a mobile operating system based on a modified version of the Linux kernel 
                                 and other open source software, 
                                 designed primarily for touchscreen mobile devices such as smartphones and tablets.</p>
                </div>
                <button className="BA">View More</button>
                </div>
        
             
            </div>
            </div>


      
        </>
        
    );
};

export default Card;