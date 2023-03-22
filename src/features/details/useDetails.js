import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearDetails, loadCountryByName, selectDetails} from "./details-slice";

const UseDetails = (name) => {
	const dispatch = useDispatch()
	const details = useSelector(selectDetails);

	useEffect(() => {
		dispatch(loadCountryByName(name))

		return () => {
			dispatch(clearDetails())
		}
	}, [name, dispatch])

	return details;
};

export default UseDetails;