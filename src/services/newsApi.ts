import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsItem } from '../types/QueryType'

interface ApiResponse {
	results: NewsItem[]
}

interface TransformedNewsItem extends Omit<NewsItem, 'webPublicationDate'> {
	webPublicationDate: Date
}

interface TransformedApiResponse {
	results: TransformedNewsItem[]
}

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://content.guardianapis.com/search',
	}),
	endpoints: builder => ({
		getNews: builder.query<NewsItem[], string>({
			query: term => ({
				url: '',
				params: {
					'api-key': '8690dee5-991a-498f-b933-16705c41b72b',
					'show-fields': 'starRating,headline,thumbnail,short-url',
					q: term,
				},
			}),
			// transformResponse: (response: ApiResponse): TransformedApiResponse => {
			// 	return response?.map(game => ({
			// 		...game,
			// 		webPublicationDate: new Date(game.webPublicationDate),
			// 	}))
			// },
		}),
	}),
})

export const { useGetNewsQuery } = newsApi
