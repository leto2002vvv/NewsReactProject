export interface IFields {
	headline: string
	thumbnail: string
	shortUrl: string
}

export interface INewsItem {
	id: string
	sectionName: string
	webPublicationDate: string
	webUrl: string
	fields: IFields
}

export interface IResponse {
	results: INewsItem[]
}

export interface IApiResponse {
	response: IResponse
}
