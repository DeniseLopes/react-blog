import React from 'react';
import './style.css'
import '../../bootstrap.min.css'


const Nav = () => (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

        <a className="navbar-brand" href="">
            <img src="/kalleo.png" id="logo"></img>
        </a>


        <ul className="navbar-nav" id="nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Postagens</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Galeria</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sobre</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contato</a>
            </li>
        </ul>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>

    </nav>


);

export default Nav;