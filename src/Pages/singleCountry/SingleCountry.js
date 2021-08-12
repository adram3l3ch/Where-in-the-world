import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import { useGlobalContext } from "../../context";
import "./SingleCountry.css";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const SingleCountry = () => {
	const { code } = useParams();
	const { fetchCountry, setIsLoading, setIsError, isLoading, isError } =
		useGlobalContext();
	const [country, setCountry] = useState("");

	useEffect(() => {
		setIsLoading(true);
		async function country() {
			try {
				setIsError(false);
				let countryData = await fetchCountry(code);
				setCountry(countryData);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
			}
		}
		country();
	}, [code, fetchCountry, setIsError, setIsLoading]);

	if (isLoading) {
		return <Loading />;
	} else if (country && !country.hasOwnProperty("message")) {
		console.log(country);
		return (
			<div className="app">
				<Navbar />
				<div className="container">
					<div className="btn">
						<Link to="/">
							<button className="back">
								<BsArrowLeft className="back-icon" />
								Back
							</button>
						</Link>
					</div>
					<div className="flex-container">
						<div className="flag">
							<img src={country.flag} alt="" />
						</div>
						<div className="data">
							<h1>{country.name}</h1>
							<div className="details">
								<div className="left">
									<p>
										Native Name:{" "}
										<span>{country.nativeName}</span>
									</p>
									<p>
										Population:{" "}
										<span>{country.population}</span>
									</p>
									<p>
										Region: <span>{country.region}</span>
									</p>
									<p>
										Sub Region:{" "}
										<span>{country.subregion}</span>
									</p>
									<p>
										Capital: <span>{country.capital}</span>
									</p>
								</div>
								<div className="right">
									<p>
										Top Level Domain:{" "}
										<span>
											{country.topLevelDomain.join(",")}
										</span>
									</p>
									<p>
										Currencies:{" "}
										<span>
											{country.currencies
												.map((item) => item.name)
												.join(", ")}
										</span>
									</p>
									<p>
										Languages:{" "}
										<span>
											{country.languages
												.map((item) => item.name)
												.join(", ")}
										</span>
									</p>
								</div>
							</div>
							<div className="borders">
								<p>Border Countries:</p>
								{country.borders.map((border) => {
									return (
										<Link to={`/country/${border}`}>
											<div className="border">
												{border}
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Error />;
	}
};

export default SingleCountry;
