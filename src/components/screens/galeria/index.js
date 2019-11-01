import React from 'react';
import Nav from '../../nav/index'
import Footer from '../../footer/index'
import Images from '../imagem_galeria/index'
import './style.css'

class Galeria extends React.Component {


    render() {
        return (


            <div className="Galeria">
                <Nav />
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12 col-sm col-lg col-xl divImagem">
                            <Images />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}

export default Galeria;