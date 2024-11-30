import React from 'react'
import { INewsItem } from '../../types/QueryType'

const NewsBlock: React.FC<INewsItem> = ({ sectionName, fields }) => {
	return (
		<article>
			<a href={fields.shortUrl} target='blank' className=''>
				<section className='flex justify-between m-5 w-[800px] cursor-pointer transition-all duration-200 border-2 border-transparent rounded-xl hover:border-slate-800'>
					<div className='p-2 flex flex-col gap-5 overflow-hidden'>
						<p> {sectionName} </p>
						<h1> {fields.headline} </h1>
					</div>
					<img
						src={fields.thumbnail}
						alt={fields.headline}
						className='w-1/3 rounded-lg'
					/>
				</section>
			</a>
		</article>
	)
}

export default NewsBlock
