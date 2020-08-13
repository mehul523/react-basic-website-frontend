import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/img2.svg";
import Commom from "./Commom";

const Home = () => {
	return (
		<>
			<Commom
				name="Grow your business with"
				imgsrc={web}
				visit="/service"
				btname="Get Started"
			/>
		</>
	);
};

export default Home;