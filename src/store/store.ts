import { configureStore } from '@reduxjs/toolkit'

import { newsApi } from '../services/newsApi'
import newsSlice from '../slices/newsSlice'

export const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		newsReducer: newsSlice
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(newsApi.middleware)
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch