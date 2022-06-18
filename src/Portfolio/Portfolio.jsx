import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import img01 from "../../src/assets/Home/portfolio-01.jpg";
import img02 from "../../src/assets/Home/portfolio-02.jpg";
import img03 from "../../src/assets/Home/portfolio-03.jpg";
// import img04 from "../../src/assets/Home/portfolio-04.jpg";

const portfolioData = [
	{
		imgUrl: img01,
		title: "React Landing Page",
		url: "#",
	},
	{
		imgUrl: img02,
		title: "React Landing Page",
		url: "#",
	},
	{
		imgUrl: img03,
		title: "React Landing Page",
		url: "#",
	},
];

const Portfolio = () => {
	return (
		<section>
			<Container>
				<Row>
					<Col lg="12" className="portfolio_top mb-5">
						<h6>Explore my work and give a feedback</h6>
						<h2 className="text-white">Portfolio</h2>
					</Col>
					{portfolioData.map((item, index) => (
						<Col lg="4" md="6" sm="6" key={index}>
							<div className="portfolio_card">
								<div className="portfolio_img">
									<img src={item.imgUrl} alt="error" className="w-100" />
								</div>

								<div className="portfolio_content">
									<h5>{item.title}</h5>
									<a href={item.url}>View Live</a>
									<div className="content_top"></div>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Portfolio;
