import React from "react";
import "./Skills.css";

const frontendskills = [
	{
		title: "HTML5",
		width: "85%",
		percentage: "85%",
	},
	{
		title: "CSS3",
		width: "70%",
		percentage: "70%",
	},
	{
		title: "JAVASCRIPT",
		width: "65%",
		percentage: "65%",
	},
	{
		title: "JQUERY",
		width: "50%",
		percentage: "50%",
	},
	{
		title: "BOOTSTRAP",
		width: "65%",
		percentage: "65%",
	},
	{
		title: "CHAKRA-UI",
		width: "50%",
		percentage: "50%",
	},
	{
		title: "REACT-JS",
		width: "60%",
		percentage: "60%",
	},
	{
		title: "REACT-QUERY",
		width: "60%",
		percentage: "60%",
	},
	{
		title: "REDUX",
		width: "50%",
		percentage: "50%",
	},
];

const Skills = () => {
	return (
		<div className="skills_wrapper d-flex gap-5">
			<div className="frontend_skill w-50">
				<h2 className="text-white text-center">FRONT-END SKILLS</h2>
				{frontendskills.map((item, index) => (
					<div className="skill_data">
						<div className="skill_title d-flex align-item-center justify-content-between">
							<h6>{item.title}</h6>
							<span>{item.percentage}</span>
						</div>
						<div className="skill_bar">
							<span
								className="skill_bar-percentage"
								style={{ width: `${item.percentage}` }}
							></span>
						</div>
					</div>
				))}
				;
			</div>
		</div>
	);
};

export default Skills;
