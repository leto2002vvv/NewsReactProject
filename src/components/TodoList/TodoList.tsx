import React, { useState } from 'react'

const TodoList = () => {
	interface ITodoList {
		id: number
		text: string
		completed: boolean
	}

	const [inputValue, setInputValue] = useState<string>('')
	const [todo, setTodo] = (useState<ITodoList[]> = [
		{ id: 1, text: 'Купить продукты', completed: false },
		{ id: 2, text: 'Выучить React', completed: false },
		{ id: 3, text: 'Сходить в спортзал', completed: false },
	])

	const addToDo = (e: React.FormEvent) => {
		e.preventDefault()
		setTodo(inputValue)

		const newTodo: ITodoList = {
			id: tasks.length + 1,
			text: todo,
			completed: false,
		}

		tasks.push(newTodo)
	}

	console.log(tasks)

	return (
		<article className='flex flex-col m-5 items-center'>
			<form className='flex gap-5' onSubmit={addToDo}>
				<input type='text' onChange={e => setInputValue(e.target.value)} />
				<button type='submit' className='border-zinc-500 border-2'>
					add new aim
				</button>
			</form>
			{tasks.map(item => {
				return (
					<section key={item.id} className='flex justify-center gap-4 my-2'>
						<p>{item.text}</p>
						<button>✖</button>
					</section>
				)
			})}
		</article>
	)
}

export default TodoList
