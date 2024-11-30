import { createRoot } from 'react-dom/client'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')).render(
  // interface Product {
	// 	id: number
	// 	name: string
	// 	price: number
	// 	stock: number // количество товара на складе
	// }

	// interface Customer {
	// 	id: number
	// 	name: string
	// 	email: string
	// }

	// interface Order {
	// 	id: number
	// 	customerId: number
	// 	items: { productId: number; quantity: number }[]
	// 	date: string // дата заказа в формате YYYY-MM-DD
	// }

	// interface Report {
	// 	totalRevenue: number // общая выручка
	// 	totalOrders: number // общее количество заказов
	// 	topCustomer: { name: string; email: string; totalSpent: number } // клиент, потративший больше всего
	// 	outOfStockProducts: string[] // список товаров, которые закончились на складе
	// }

	// const products: Product[] = [
	// 	{ id: 1, name: 'Laptop', price: 1000, stock: 5 },
	// 	{ id: 2, name: 'Mouse', price: 20, stock: 50 },
	// 	{ id: 3, name: 'Keyboard', price: 50, stock: 30 },
	// 	{ id: 4, name: 'Monitor', price: 200, stock: 10 },
	// 	{ id: 5, name: 'Printer', price: 150, stock: 2 },
	// ]

	// const customers: Customer[] = [
	// 	{ id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
	// 	{ id: 2, name: 'Bob Smith', email: 'bob.smith@example.com' },
	// 	{ id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com' },
	// 	{ id: 4, name: 'Diana Prince', email: 'diana.prince@example.com' },
	// ]

	// const orders: Order[] = [
	// 	{
	// 		id: 1,
	// 		customerId: 1,
	// 		items: [
	// 			{ productId: 1, quantity: 1 }, // Laptop
	// 			{ productId: 2, quantity: 2 }, // Mouse
	// 		],
	// 		date: '2024-11-01',
	// 	},
	// 	{
	// 		id: 2,
	// 		customerId: 2,
	// 		items: [
	// 			{ productId: 3, quantity: 1 }, // Keyboard
	// 			{ productId: 4, quantity: 1 }, // Monitor
	// 		],
	// 		date: '2024-11-02',
	// 	},
	// 	{
	// 		id: 3,
	// 		customerId: 3,
	// 		items: [
	// 			{ productId: 5, quantity: 3 }, // Printer (exceeds stock)
	// 			{ productId: 2, quantity: 5 }, // Mouse
	// 		],
	// 		date: '2024-11-03',
	// 	},
	// 	{
	// 		id: 4,
	// 		customerId: 4,
	// 		items: [
	// 			{ productId: 1, quantity: 2 }, // Laptop (exceeds stock)
	// 			{ productId: 4, quantity: 1 }, // Monitor
	// 		],
	// 		date: '2024-11-04',
	// 	},
	// ]

	// const generateReport = (
	// 	products: Product[],
	// 	customers: Customer[],
	// 	orders: Order[]
	// ): Report[] => {
	// 	const orderItems = orders.flatMap(i => i.items)

	// 	const totalRevenue = orderItems.map(arr1 => {
	// 		const arr2 = products.find(i => arr1.productId === i.id)
	// 		return arr2 ? arr2?.price * arr1.quantity : 0
	// 	})

	// 	const totalOrders = orders.length

	// 	const customersOrders = orders.reduce((acc, order) => {
	// 		const totalQuantity = order.items.reduce((sum, item) => {
	// 			sum += item.quantity
	// 		}, 0)
	// 		acc[order.customerId] = totalQuantity

	// 		return acc
	// 	}, {})

	// 	console.log(totalRevenue, totalOrders, customersOrders)
	// }

	// const report = generateReport(products, customers, orders)
	// console.log(report)
  <Provider store={store}>
    <App />
  </Provider>
)
