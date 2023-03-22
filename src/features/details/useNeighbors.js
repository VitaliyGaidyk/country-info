import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadNeighborsBorder, selectNeighbors} from "./details-slice";

const UseNeighbors = (borders) => {
	const dispatch = useDispatch()
	const neighbors = useSelector(selectNeighbors)

	useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighborsBorder(borders))
		}

	}, [borders, dispatch])

	return neighbors
};

export default UseNeighbors;