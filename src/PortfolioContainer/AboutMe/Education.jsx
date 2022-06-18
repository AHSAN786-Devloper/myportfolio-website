import React from "react";
import "./Education.css";

const Education = () => {
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th>Degree</th>
						<th>Department</th>
						<th>Institute</th>
						<th>Year</th>
						<th>CGPA/Percentage</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>B.E</td>
						<td>ELECTRONICS & COMMUNICATION</td>
						<td>ALL SAINT'S COLLEGE OF TECHNOLOGY</td>
						<td>2016</td>
						<td>7.51(CGPA)</td>
					</tr>
					<tr>
						<td>HSC</td>
						<td>MATHEMATICS</td>
						<td>M.M COLLEGE BHAGALPUR</td>
						<td>2009-2011</td>
						<td>55.2%</td>
					</tr>
					<tr>
						<td>SSC</td>
						<td>GENERAL</td>
						<td>R & P HIGH SCHOOL ASARGANJ MUNGER</td>
						<td>2009</td>
						<td>68%</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Education;
