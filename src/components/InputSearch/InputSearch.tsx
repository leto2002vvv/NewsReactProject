import React, { useState } from 'react'
import { useGetNewsQuery } from '../../services/newsApi'
import { addNews } from '../../slices/newsSlice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHooks'

const InputSearch = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const [term, setTerm] = useState<string>('')
	const { data, isLoading, isFetching } = useGetNewsQuery(term)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()


	const handleSetTerm = (e: React.FormEvent) => {
		e.preventDefault()

		setTerm(inputValue)

		if (term && data) {
			dispatch(addNews(data))
			navigate('/news')
		}
	}

	console.log(term)


	return (
		<div className='flex gap-5'>
			<input
				type='text'
				className='bg-transparent outline-none border-2 border-gray-600 w-[500px] rounded-md py-1 hover:bg-gray-600 active:backdrop-blur-sm transition-all duration-300'
				onChange={e => setInputValue(e.target.value)}
			/>
			<button
				type='button'
				className='border-2 border-gray-600 px-6 rounded-md py-1 hover:bg-gray-600 transition-all active:backdrop-blur-sm duration-300'
				onClick={handleSetTerm}
			>
				search
			</button>
		</div>
	)
}

export default InputSearch
