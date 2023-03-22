import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectRegion, setRegion} from "./controls-slice";

const UseRegion = () => {
	const dispatch = useDispatch()
	const region = useSelector(selectRegion)

	const handleSelect = (region) => {
		dispatch(setRegion(region?.value || ''))
	}

	return [region, handleSelect]
};

export default UseRegion;