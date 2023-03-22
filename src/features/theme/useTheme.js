import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "./theme-slice";

const UseTheme = () => {
	const dispatch = useDispatch()
	const theme = useSelector(state => state.theme);

	const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return [theme, toggleTheme]
};

export default UseTheme;