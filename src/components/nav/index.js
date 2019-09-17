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
            <li className="nav-item" id="login">
                <a className="nav-link" href="#">Login</a>
            </li>

        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        
    </nav>


        );
        
export default Nav;