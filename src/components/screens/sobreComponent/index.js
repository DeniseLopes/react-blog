import React from 'react'
import Nav from '../../nav'
import Footer from '../../footer'
import SobreTela from '../sobre/index'

class SobreComponent extends React.Component{

    render(){
       return (
            <div className="Login">
              <Nav />
              <SobreTela />
              <Footer />
             
             </div>
             
        )
    }
}
export default SobreComponent;