import React from "react";

import { Container, Row, Col } from "reactstrap";
import "./services.css";

const Services = () => {
	const serviceData = [
		{
			icon: "ri-code-line",
			title: "Web Design",
			desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores!",
		},

		{
			icon: "ri-code-s-slash-line",
			title: "Web Development",
			desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores!",
		},

		{
			icon: "ri-qr-code-line",
			title: "App Development",
			desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores!",
		},

		{
			icon: "ri-file-search-line",
			title: "SEO",
			desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores!",
		},

		{
			icon: "ri-landscape-line",
			title: "Graphics Design",
			desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores!",
		},
		{
			icon: "ri-gallery-line",
			title: "UI/UX Design",
			desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolores!",
		},
	];

	return (
		<>
			<section id="service">
				<Container>
					<Row>
						<Col lg="12" className="services_top mb-5">
							<h2>Features</h2>
							<h4>What services I Provided</h4>
						</Col>
						{serviceData.map((item, index) => (
							<Col lg="4" md="6" sm="6" key={index} className="mb-4">
								<div className="single_service">
									<span className="service_icon">
										<i className={item.icon}></i>
									</span>
									<h2>{item.title}</h2>
									<p>{item.desc}</p>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Services;
