import React from 'react';
import {useDispatch} from "react-redux";
import {clearControls} from "./controls-slice";

const UseControls = () => {
	const dispatch = useDispatch()

	const cleanRegion = () => dispatch(clearControls())

	return [cleanRegion]
};

export default UseControls;