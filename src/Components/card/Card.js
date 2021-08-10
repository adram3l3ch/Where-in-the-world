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
					<p>
						Population: <span>{country.population}</span>
					</p>
					<p>
						Region: <span>{country.region}</span>
					</p>
					<p>
						Capital: <span>{country.capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
