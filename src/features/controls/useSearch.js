import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectSearch, setSearch} from "./controls-slice";

const UseSearch = () => {
	const dispatch = useDispatch()
	const search = useSelector(selectSearch)

	const handleSearch = (e) => {
		dispatch(setSearch(e.target.value))
	}

	return [search, handleSearch]
};

export default UseSearch;