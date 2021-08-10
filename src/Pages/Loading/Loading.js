import React from "react";
import "./Loading.css";
import { FaGlobeAsia } from "react-icons/fa";

const Loading = () => {
	return (
		<div className="app">
			<div className="container">
				<div className="loading">
					<div className="circle">
						<FaGlobeAsia />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
