import React from "react";
import "./Searchbar.css";
import { BiSearch } from "react-icons/bi";
import { useGlobalContext } from "../../context";

const Searchbar = () => {
	const { searchTerm, setSearchTerm } = useGlobalContext();
	return (
		<div className="search">
			<BiSearch className="search-icon" />
			<input
				type="text"
				placeholder="Search for a country"
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
			/>
		</div>
	);
};

export default Searchbar;
