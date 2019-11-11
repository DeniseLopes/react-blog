import React from 'react'
import './style.css'
import { Parallax } from 'react-parallax';

const SobreTela = () => (
    
    <div className="container prlx ">
        <div className="card">
            <div className="row no-gutters">
                <Parallax
                    bgImage={'sobre1.jpg'}
                    strength={550}
                    renderLayer={percentage => (
                        <div className="div"
                            style={{
                                position: 'relative',
                                width: percentage * 500,
                                height: percentage * 1200,
                            }}
                        />
                    )}
                >
                </Parallax>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title">Sobre Kalleo</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    
);

export default SobreTela;