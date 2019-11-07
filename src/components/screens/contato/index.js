import React from 'react'
import './style.css'


const ContatoTela = () => (

    <body>
        <section class="contact pt-100 pb-100" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 mx-auto text-center">
                        <div class="section-title mb-100 ">
                            <p>Olá!!</p>
                            <h4>Entre em contato com Kalléo</h4>
                        </div>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-8">
                        <form action="#" class="contact-form">
                            <div class="row">
                                <div class="col-xl-6">
                                    <input type="text" id="env" placeholder="nome" />
                                </div>
                                <div class="col-xl-6">
                                    <input type="text" id="env" placeholder="email" />
                                </div>
                                <div class="col-xl-6">
                                    <input type="text" id="env" placeholder="assunto" />
                                </div>
                                <div class="col-xl-6">
                                    <input type="text" id="env" placeholder="telefone" />
                                </div>
                                <div class="col-xl-12">
                                    <textarea placeholder="menssagem" cols="30" rows="10"></textarea>
                                    <input type="submit" className="bg-warning" value= "Enviar" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4">
                        <div class="single-contact ">
                            <i class="fa fa-map-marker bg-warning"></i>
                            <h5>Address</h5>
                            <p>661 Lefferts, NY 11203, USA</p>
                        </div>
                        <div class="single-contact">
                            <i class="fa fa-phone bg-warning"></i>
                            <h5>Phone</h5>
                            <p>(+1) 517 397 7100</p>
                        </div>
                        <div class="single-contact">
                            <i class="fa fa-envelope bg-warning"></i>
                            <h5>Email</h5>
                            <p>infor@personal.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>

);

export default ContatoTela;