import React from "react";
import "./About.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/Home/photo1.png";
import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";

const About = () => {
	const [aboutFilter, setAboutFilter] = useState("ABOUT");
	return (
		<>
			<section id="about">
				<Container>
					<Row>
						<Col lg="12" className="mb-5 text-white about_text">
							<h2>About Me</h2>
						</Col>
						<Col lg="4" md="3">
							<div className="about_btns">
								<button
									className={`about_btn ${
										aboutFilter === "ABOUT" ? "about_btn-active" : ""
									}`}
									onClick={() => setAboutFilter("ABOUT")}
								>
									About Me
								</button>
								<button
									className={`about_btn ${
										aboutFilter === "EDUCATION" ? "about_btn-active" : ""
									}`}
									onClick={() => setAboutFilter("EDUCATION")}
								>
									Education
								</button>
								<button
									className={`about_btn ${
										aboutFilter === "SKILLS" ? "about_btn-active" : ""
									}`}
									onClick={() => setAboutFilter("SKILLS")}
								>
									Skills
								</button>
								<button
									className={`about_btn ${
										aboutFilter === "AWARD" ? "about_btn-active" : ""
									}`}
									onClick={() => setAboutFilter("AWARD")}
								>
									Award
								</button>
							</div>
						</Col>
						<Col lg="8" md="9">
							{aboutFilter === "ABOUT" && (
								<div className="about_content_wrapper d-flex gap-5">
									<div className="about_img w-25">
										<img src={aboutImg} alt="error" className="w-100" />
									</div>
									<div className="about_content w-75">
										<h2>I'm Ahsan Tech</h2>
										<p>
											Hi there, it’s Md Ahsan Alam. My educational background
											possesses a bachelor’s degree in Electronics &
											Communication engineering. I am passionate about websites.
											I like to play with codes and produce the best output from
											my work. I have a decent command over web languages like
											HTML, CSS, JavaScript, and ReactJS.
										</p>

										<div className="social_links">
											<h6>Connect with me:</h6>
											<span>
												<a href="/">
													<i class="ri-facebook-fill"></i>
												</a>
											</span>
											<span>
												<a href="/">
													<i class="ri-linkedin-fill"></i>
												</a>
											</span>
											<span>
												<a href="/">
													<i class="ri-instagram-line"></i>
												</a>
											</span>
											<span>
												<a href="/">
													<i class="ri-github-fill"></i>
												</a>
											</span>
										</div>
									</div>
								</div>
							)}
							{aboutFilter === "EDUCATION" && <Education />}

							{aboutFilter === "SKILLS" && <Skills />}

							{aboutFilter === "AWARD" && <Award />}
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default About;
