import React from 'react';
import Nav from '../../nav/index'
import Footer from '../../footer/index'
import Image from '../imagem_galeria/index'
import './style.css'

class Galeria extends React.Component {


    render() {
        return (

            <div className="Galeria">
                <Nav />
                <div className="row ">
                    <div className="col-md-12 divImagem">
                        <Image />
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default Galeria;