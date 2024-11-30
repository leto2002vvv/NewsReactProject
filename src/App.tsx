import { BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import NewsList from './components/NewsList/NewsList'
import InputSearch from './components/InputSearch/InputSearch'
import TodoList from './components/TodoList/TodoList'

function App() {
	const [data, setData] = useState({})

	const API_URL = 'https://jsonplaceholder.typicode.com'

	useEffect(() => {
		const getPosts = async () => {
			try {
				const res = await axios({
					url: `${API_URL}/posts`,
					method: 'get',
					params: { limit: 10 },
				})
				setData(res)
			} catch (error) {
				if (axios.isAxiosError) {
				}
			}
		}

		getPosts()
	}, [])

	console.log(data)

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<InputSearch />} />
					<Route path='/news' element={<NewsList />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
