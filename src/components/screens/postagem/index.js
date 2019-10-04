
import React from 'react'
import Nav from '../../nav'
import ImagemP from './imagemP'
import Footer from '../../footer'


class Postagem extends React.Component{

    render(){
       return (
            <div className="Postagem">
              <Nav />
              <ImagemP />
              <Footer/>
             </div>
        )
    }
}
export default Postagem;