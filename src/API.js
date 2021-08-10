const ALL_URL = "https://restcountries.eu/rest/v2/all";

const NAME_URL = "https://restcountries.eu/rest/v2/name/";

const CODE_URL = "https://restcountries.eu/rest/v2/alpha/";

const REGION_URL = "https://restcountries.eu/rest/v2/region/";

const fetchCountries = async () => {
	const response = await fetch(ALL_URL);
	const data = await response.json();
	return data;
};

const searchCountry = async (searchTerm) => {
	const response = await fetch(`${NAME_URL}${searchTerm}`);
	const data = await response.json();
	return data;
};

const fetchCountry = async (alpha) => {
	const response = await fetch(`${CODE_URL}${alpha}`);
	const data = await response.json();
	return data;
};

const filterCountries = async (filter) => {
	const response = await fetch(`${REGION_URL}${filter}`);
	const data = await response.json();
	return data;
};

export { fetchCountries, fetchCountry, searchCountry, filterCountries };
