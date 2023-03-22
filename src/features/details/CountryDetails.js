import React from 'react';
import {Info} from "./Info";
import UseDetails from "./useDetails";

const CountryDetails = (props) => {
	const {navigate, name} = props
	const {currentCountry, error, status} = UseDetails(name)

	return (
		<>
			{status === 'loading' && <h2>Loading...</h2>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</>
	);
};

export default CountryDetails;