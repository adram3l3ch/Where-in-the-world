import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { useGlobalContext } from "../../context";
import Card from "../../Components/card/Card";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Filter from "../../Components/Filter/Filter";

const Home = () => {
	const { countries, isLoading, isError } = useGlobalContext();

	if (isLoading) {
		return <Loading />;
	} else if (isError || !countries.length) {
		return <Error />;
	} else {
		return (
			<div className="app">
				<Navbar />
				<div className="container">
					<div className="header">
						<Searchbar />
						<Filter />
					</div>
					<div className="countries">
						{countries.map((country, index) => {
							return <Card country={country} key={index} />;
						})}
					</div>
				</div>
			</div>
		);
	}
};

export default Home;
