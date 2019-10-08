import React from 'react';
import './style.css'
import '../../bootstrap.min.css'

const Sidebar = () => (

    <div className="container-fluid">  
         <div className=" row side center">
            <div className="div1 col col-sm-12 col-md-4">
                <div className="img1"></div>
                <p className="pdiv">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to 
                      make a type specimen.</p>
            </div>

            <div className="div2 col col-sm-12 col-md-4 ">
                <div className="img2"></div>
                <p className="pdiv">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s Ipsum has been the industry's.</p>
            </div>

            <div className="div2 col col-sm-12 col-md-4 ">
                <div className="img3"></div>
                <p className="pdiv">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to 
                      make a type.</p>
            </div>

            

         </div>
        </div>

);
export default Sidebar ;