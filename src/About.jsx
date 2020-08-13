import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/img.svg";
import Commom from "./Commom";

const About = () => {
	return (
		<>
			<Commom
				name="Welcome to About page"
				imgsrc={web}
				visit="/contact"
				btname="Contact Now"
			/>
		</>
	);
};

export default About;
