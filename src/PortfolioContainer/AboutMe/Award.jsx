import React from "react";
import "./award.css";

const Award = () => {
	return (
		<>
			<div className="award_container d-flex align-items-center flex-wrap justify-content-between">
				<div className="award_item">
					<AwardItem
						year="2015"
						title="Best Candidate in Scout Guide-"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis maxime,?"
					/>
				</div>
				<div className="award_item">
					<AwardItem
						year="2009"
						title="1st Prize in IT fest College-"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis maxime,?"
					/>
				</div>
				<div className="award_item">
					<AwardItem
						year="2015"
						title="Best Candidate in Scout Guide-"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis maxime,?"
					/>
				</div>
				<div className="award_item">
					<AwardItem
						year="2009"
						title="1st Prize in IT fest College-"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis maxime,?"
					/>
				</div>
			</div>
		</>
	);
};
const AwardItem = ({ year, title, text }) => {
	return (
		<div className="single_award ">
			<div className="award_year">{year}</div>
			<h6 className="award_title">
				{title}
				<span>{text}</span>
			</h6>
		</div>
	);
};

export default Award;
