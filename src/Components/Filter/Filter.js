import React from "react";
import { useGlobalContext } from "../../context";
import "./FIlter.css";

const Filter = () => {
	const { setIsFilter } = useGlobalContext();
	return (
		<select
			name="Filter by region"
			id="filter"
			onChange={e => {
				setIsFilter(e.target.value);
			}}
			defaultValue="Filter by region"
		>
			<option value="Africa">Africa</option>
			<option value="Americas">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
};

export default Filter;
