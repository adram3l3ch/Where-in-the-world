import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./Error.css";
import { useGlobalContext } from "../../context";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Filter from "../../Components/Filter/Filter";

const Error = () => {
	const { setRefresh, refresh, setSearchTerm } = useGlobalContext();
	return (
		<div className="app">
			<Navbar />
			<div className="container">
				<Searchbar />
				<div className="error">
					<h1>There is nothing to show :(</h1>
					<div className="btn">
						<Link to="/">
							<button
								className="back"
								onClick={() => {
									setSearchTerm("");
									setRefresh(!refresh);
								}}
							>
								<BsArrowLeft className="back-icon" />
								Back
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
