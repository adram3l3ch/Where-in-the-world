import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ country }) => {
	return (
		<Link to={`/country/${country.alpha3Code}`}>
			<div className="country">
				<div className="image">
					<img src={country.flag} alt="" />
				</div>
				<div className="details">
					<h2>{country.name}</h2>
					<h4>
						Population: <span>{country.population}</span>
					</h4>
					<h4>
						Region: <span>{country.region}</span>
					</h4>
					<h4>
						Capital: <span>{country.capital}</span>
					</h4>
				</div>
			</div>
		</Link>
	);
};

export default Card;
