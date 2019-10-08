
import React from 'react'
import Nav from '../../nav'
import Footer from '../../footer'
import Conteudo from '../../postagemConteudo/index'


class Postagem extends React.Component{

    render(){
       return (
            <div className="Postagem">
              <Nav />
              <Conteudo />
              <Footer />
             
             </div>
             
        )
    }
}
export default Postagem;