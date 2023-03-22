import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectControls} from "../controls/controls-slice";
import {loadCountries, selectCountriesInfo, selectVisibleCountries} from "./countries-slice";

const UseCountry = () => {
	const dispatch = useDispatch()
	const controls = useSelector(selectControls)
	const countries = useSelector(state => selectVisibleCountries(state, controls))
	const {status, error, quality} = useSelector(selectCountriesInfo)

	useEffect(() => {
		if (!quality) {
			dispatch(loadCountries())
		}

	}, [quality, dispatch])

	return [countries, {status, error, quality}]
};

export default UseCountry;