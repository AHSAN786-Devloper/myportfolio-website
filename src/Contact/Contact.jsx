import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
	const [data, setData] = useState({
		fullname: "",
		phone: "",
		email: "",
		message: "",
	});
	const InputEvent = (event) => {
		const { name, value } = event.target;

		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		alert(
			`My name is ${data.fullname}. My phone no is ${data.phone}. My Email is ${data.email}. Here I want to say ${data.message} `
		);
	};
	return (
		<>
			<div className="my-5 container_contact">
				<div className="text-center">
					<h1 className=" text">Contact Us</h1>
				</div>
				<div className="container contact_div">
					<div className="row">
						<div className="col-md-6 col-10 mx-auto">
							<form action="form" onSubmit={formSubmit}>
								<div className="mb-3">
									<label
										htmlFor="exampleFormControlInput1"
										className="form-label text-white"
									>
										Full Name
									</label>
									<input
										type="text"
										className="form-control"
										id="exampleFormControlInput1"
										name="fullname"
										value={data.fullname}
										onChange={InputEvent}
										placeholder="Enter Your Name Here"
									/>
									<label
										htmlFor="exampleFormControlInput1"
										className="form-label text-white"
									>
										Phone No
									</label>
									<input
										type="number"
										className="form-control"
										id="exampleFormControlInput1"
										name="phone"
										value={data.phone}
										onChange={InputEvent}
										placeholder="Enter Your mobile No Here"
									/>
									<label
										htmlFor="exampleFormControlInput1"
										className="form-label text-white"
									>
										Email address
									</label>
									<input
										type="email"
										className="form-control"
										id="exampleFormControlInput1"
										name="email"
										value={data.email}
										onChange={InputEvent}
										placeholder="Enter Your Email Here"
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="exampleFormControlTextarea1"
										className="form-label text-white"
									>
										Message
									</label>
									<textarea
										className="form-control"
										id="exampleFormControlTextarea1"
										name="message"
										value={data.message}
										onChange={InputEvent}
										rows="3"
									></textarea>
								</div>
								<div className="col-12">
									<button className="btn btn-outline-primary " type="submit">
										Submit form
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
