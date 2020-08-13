import React, { useState } from "react";

const Contact = () => {
	const [data, setData] = useState({
		fullname: "",
		phone: "",
		email: "",
		msg: "",
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
			`my name is ${data.fullname}.my mobile number is ${data.phone}. my email is ${data.email}.here is what I whant to say ${data.msg}  `
		);
	};

	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Contact us</h1>
			</div>
			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<form onSubmit={formSubmit}>
							<div class="form-group">
								<label for="exampleFormControlInput1">Full Name</label>
								<input
									type="text"
									class="form-control"
									id="exampleFormControlInput1"
									value={data.fullname}
									name="fullname"
									onChange={InputEvent}
									placeholder="enter your name"
								/>
							</div>

							<div class="form-group">
								<label for="exampleFormControlInput1">Phone No</label>
								<input
									type="number"
									class="form-control"
									id="exampleFormControlInput1"
									value={data.phone}
									name="phone"
									onChange={InputEvent}
									placeholder="mobile no"
								/>
							</div>

							<div class="form-group">
								<label for="exampleFormControlInput1">Email address</label>
								<input
									type="email"
									class="form-control"
									id="exampleFormControlInput1"
									value={data.email}
									name="email"
									onChange={InputEvent}
									placeholder="name@example.com"
								/>
							</div>

							<div class="form-group">
								<label for="exampleFormControlTextarea1">Message</label>
								<textarea
									class="form-control"
									value={data.msg}
									name="msg"
									onChange={InputEvent}
									id="exampleFormControlTextarea1"
									rows="3"
								></textarea>
							</div>

							<br />
							<div className="col-12">
								<button class="btn btn-outline-primary" type="submit">
									Submit form
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
