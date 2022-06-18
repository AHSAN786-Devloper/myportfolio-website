import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

const Testimonial = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		swipeToSlide: true,
	};
	return (
		<section>
			<Container>
				<Row>
					<Col lg="12" className="mb-5 text-center">
						<h2 className="text-white">What my Client Say's</h2>
					</Col>
					<Col lg="6" className="m-auto">
						<Slider {...settings}>
							<div>
								<div className="single_testimonaial">
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Aut a illo, perspiciatis sequi alias, optio cupiditate
										illum, sit beatae odio unde velit? Ipsum nulla libero dicta
										enim ex aut nesciunt, cumque at dolore magni perferendis vel
										dolores asperiores reprehenderit harum.
									</p>
									<h6>Martin Cooper</h6>
									<p className="title">Web Developer</p>
								</div>
							</div>
							<div>
								<div className="single_testimonaial">
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Aut a illo, perspiciatis sequi alias, optio cupiditate
										illum, sit beatae odio unde velit? Ipsum nulla libero dicta
										enim ex aut nesciunt, cumque at dolore magni perferendis vel
										dolores asperiores reprehenderit harum.
									</p>
									<h6>Martin Cooper</h6>
									<p className="title">Web Developer</p>
								</div>
							</div>
							<div>
								<div className="single_testimonaial">
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Aut a illo, perspiciatis sequi alias, optio cupiditate
										illum, sit beatae odio unde velit? Ipsum nulla libero dicta
										enim ex aut nesciunt, cumque at dolore magni perferendis vel
										dolores asperiores reprehenderit harum.
									</p>
									<h6>Martin Cooper</h6>
									<p className="title">Web Developer</p>
								</div>
							</div>
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonial;
