import NewsBlock from '../NewsBlock/NewsBlock'

import { useAppSelector } from '../../hooks/reduxHooks'

const NewsList = () => {
	const news = useAppSelector(state => state.newsReducer.news)
	console.log(news)

	return (
		<>
			<ul>
				{news ? (
					news.response.results.map(item => {
						return <NewsBlock key={item.id} {...item} />
					})
				) : (
					<div>loading...</div>
				)}
			</ul>
		</>
	)
}

export default NewsList
