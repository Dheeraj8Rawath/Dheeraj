import React from "react";
import myimage1 from "./Image/Dog.jpg";
import myimage5 from "./Image/Dog2.jpg";
import myimage2 from "./Image/Dog4.jpg";
import myimage3 from "./Image/Dog5.jpeg";
import myimage4 from "./Image/Dog6.jpeg";



const Boxx=()=>{
    return(
        <>
       <div className="container-fulid">

           <div className="row MainBox">


               <div className="col-sm-4 box">

               </div>


               <div className="col-sm-4 boxA">
                   <h1 className="Our">Our Clinic</h1>
                   <span>
                   Dr. Priyank Vya Pet Hospital {"&"} Diagnostic Centre dog clinic and veterinary services has 
                   its place in the list of Veterinary Clinics. Organization has an average score of 4 by NiceLocal
                    visitors and concludes its business by the following address: Dehradun, Uttarakhand 248001, opposite 
                    Sakti Medicos, Subhash Nagar, Tilak Marg. 
                   GPS coordinates are: longitude — 77°59'28.99''E (77.991387), latitude — 30°16'38.15''N (30.277264).
                   </span>
                   <div className="container-fulid">
                       <div className="row">
                   <div className="col-sm-4 boxC">
                       <img src={myimage1} width="199px" height="160px" className="mm"/>

                       <button className="bb">Pet of Month</button>
                    <p className="hi">It was with a very heavy heart that Lazy’s owner had to relocate and could not take her with him.
                         True to her name, she is very easy-going and loves to lounge around all day. She likes atte</p>
                   </div>
                   <div className="col-sm-4 boxC">
                   <img src={myimage2} width="199px" height="160px" className="mm"/>

                      <button className="bb">Hot Deals</button>
                      <p className="hi">It was with a very heavy herue to her name, she is very easy-going and
                       loves to lounge around all day. She likes atte
                      </p>

                   </div>
                   <div className="col-sm-4 boxC">
                  <img src={myimage3} width="199px" height="160px" className="mm" />

                         <button className="bb">Vedio</button>
                         <p className="hi">It was with a very heavy heart that Lazy’s owner had to relocate and 
                         could not take her with him. True to her name,
                          she is very easy-going and loves to lounge around all day. She likes atte</p>

                   </div>
                   </div>
                   </div>
               </div>

               <div className="col-sm-4 boxB">
                   <img src={myimage4} width="199px" height="160px" className="Mm" />
                   <button className="ba"> Meet our new Receptonist</button>
                    <p className="Hi">It was with a very heavy heart that Lazy’s owner had to relocate and could not take her with him. 
                    True to her name, 
                    she is very easy-going and loves to lounge around all day. She likes atte</p>
                  
               </div>
               
                   
                   
           </div>
       </div>

       <div className="container-fulid">
       <div className="row">

          <div className="col-sm-4 BigM">
               <h1 className="Pri">Dr.Priyank Vyas</h1>
               <p className="Aa">Assistant Professor at Graphic Era Deemed to be University. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,Lorem
                  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
               industry's standard dummy text ever since the 1500s, when an unknow type and scras</p>
       </div>
       <div className="col-sm-4 BigA">
              <img src={myimage5} className="I"/>
       </div>



       </div>
       </div>
        </>
    )
}

export default Boxx;