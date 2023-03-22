import * as api from './config'
import {configureStore} from "@reduxjs/toolkit";
import axios from "axios";
import {themeReducer} from "./features/theme/theme-slice";
import {controlReducer} from "./features/controls/controls-slice";
import {countryReducer} from "./features/countries/countries-slice";
import {detailsReducer} from "./features/details/details-slice";

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		control: controlReducer,
		countries: countryReducer,
		details: detailsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		thunk: {
			extraArgument: {
				client: axios,
				api,
			}
		}
	})
})