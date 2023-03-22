import React from 'react';
import {List} from "../../components/List";
import {Card} from "../../components/Card";
import useCountry from "./useCountry";
import {useNavigate} from "react-router-dom";

const CountryList = () => {
	const navigate = useNavigate()
	const [countries, {status, error}] = useCountry()

	return (
		<>
			{status === 'received' && (
				<List>
					{countries.map((country) => {
						const countryInfo = {
							img: country.flags.png,
							name: country.name,
							info: [
								{
									title: 'Population',
									description: country.population.toLocaleString(),
								},
								{
									title: 'Region',
									description: country.region,
								},
								{
									title: 'Capital',
									description: country.capital,
								},
							],
						};

						return (
							<Card
								key={country.name}
								onClick={() => navigate(`/country/${country.name}`)}
								{...countryInfo}
							/>
						);
					})}
				</List>
			)}
		</>
	);
};

export default CountryList;