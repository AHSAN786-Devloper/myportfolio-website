import React from "react";
import { NavLink } from "react-router-dom";
import web from "../../src/assets/Home/logo2.jpeg";
import "./Navbar.css";
const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg" id="header">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/">
						<img src={web} alt="logo" className="image-logo" />
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon "></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">
									About Me
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/service">
									Services
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/experience">
									Experience
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/portfolio">
									PortFolio
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/testimonial">
									Testimonial
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/contact">
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
