import React from "react";
import "./experience.css";

import { Container, Row, Col } from "reactstrap";

const Experience = () => {
	const experienceData = [
		{
			year: "2021-22",
			level: "Jr. FrontEnd Developer",
			comp: "Capital Technology Okhla Jamia Nagar New Delhi.",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore libero aliquam saepe corporis sapiente?",
		},
		{
			year: "2021-22",
			level: "Jr. FrontEnd Developer",
			comp: "Capital Technology Okhla Jamia Nagar New Delhi.",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore libero aliquam saepe corporis sapiente?",
		},
	];
	return (
		<section>
			<Container className="text-white ">
				<Row>
					<Col lg="12" className="mb-5">
						<h2>Experience</h2>
					</Col>
					<div className="single_experience-container gap-4">
						{experienceData.map((item, index) => (
							<Col lg="6" md="6" sm="6" className="mb-4">
								<div className="single_experience " key={index}>
									<span className="experience_icon">
										<i class="ri-briefcase-line"></i>
									</span>
									<h6>{item.year}</h6>
									<h5>{item.level}</h5>
									<h6>{item.comp}</h6>
									<p>{item.desc}</p>
								</div>
							</Col>
						))}
					</div>
				</Row>
			</Container>
		</section>
	);
};

export default Experience;
