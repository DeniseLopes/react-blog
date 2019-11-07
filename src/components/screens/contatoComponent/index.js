import React from 'react'
import Nav from '../../nav'
import Footer from '../../footer'
import ContatoTela from '../contato/index'

class ContatoComponent extends React.Component {

    render() {
        return (
            <div className="Contato">
                <Nav />

                <ContatoTela />


                <Footer />

            </div>

        )
    }
}
export default ContatoComponent;