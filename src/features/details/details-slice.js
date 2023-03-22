import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
	'@@details/load-country-by-name',
	(name, {extra: {client, api}}) => {
		return client.get(api.searchByCountry(name));
	}
);

export const loadNeighborsBorder = createAsyncThunk(
	'@@details/load-neighbors',
	(borders, {extra: {client, api}}) => {
		return client.get(api.filterByCode(borders))
	}
)

const initialState = {
	currentCountry: null,
	neighbors: [],
	status: 'idle',
	error: null,
}

const detailsSlice = createSlice({
	name: '@@details',
	initialState,
	reducers: {
		clearDetails: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountryByName.pending, (state) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(loadCountryByName.fulfilled, (state, action) => {
				state.status = 'idle'
				state.currentCountry = action.payload.data.at(0)
			})
			.addCase(loadCountryByName.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload || action.meta.error
			})
			.addCase(loadNeighborsBorder.fulfilled, (state, action) => {
				state.neighbors = action.payload.data.map(country => country.name)
			})
	}
})

export const selectCurrentCountry = (state) => state.details.currentCountry
export const selectDetails = (state) => state.details
export const selectNeighbors = (state) => state.details.neighbors

export const {clearDetails} = detailsSlice.actions
export const detailsReducer = detailsSlice.reducer