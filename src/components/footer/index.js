import React from 'react';
import './style.css'
import '../../bootstrap.min.css'


const Footer = () => (

	<div className="bottom  bg-dark">


			<div className="row">
				<div className="col-12 text-center">
					<div className="copyright">
						<p>© <span>2018</span> <a href="/" className="transition">D&D</a> All rights reserved.</p>

					</div>
				</div>

			</div>
			<div className="row teste ">
				<a href="https://www.facebook.com/kalleo.hipolito/"> <img src="./facebook.png" /></a>
				<a href="https://www.youtube.com/channel/UCxOjj5wiMq5XCNjnu-NmTBQ"> <img src="./youtube.png" /></a>
				<a href="https://www.instagram.com/kalleohipolito/?hl=pt-br"> <img src="./instagram.png" /></a>
				<a href="https://twitter.com/kalleohipolito"> <img src="./twitter.png" /></a>
				<a href="https://vimeo.com/user4019411"> <img src="./v.png" /></a>

			</div>


		
	</div>



);

export default Footer;