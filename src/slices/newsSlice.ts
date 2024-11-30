import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IApiResponse, IResponse } from '../types/QueryType'

interface NewsState {
	news: IApiResponse
}

const initialState: NewsState = {
	news: {
		response: undefined
	},
}

const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		addNews(state, action: PayloadAction<IResponse>) {
			state.news = action.payload
			console.log(state.news)
		},
	},
})

export const { addNews } = newsSlice.actions
export default newsSlice.reducer
