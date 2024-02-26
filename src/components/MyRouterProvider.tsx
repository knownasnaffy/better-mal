import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Root from '../routes/Root'
import ErrorPage from '../routes/ErrorPage'
import Library from '../routes/Library'
import Discover from '../routes/Discover'
import { NextUIProvider } from '@nextui-org/react'
const router = createBrowserRouter([
	{
		element: (
			<NextUIProvider>
				<Outlet />
			</NextUIProvider>
		),
		errorElement: (
			<NextUIProvider>
				<ErrorPage />
			</NextUIProvider>
		),
		children: [
			{
				path: '/',
				element: <Root />,
				children: [
					{ index: true, element: <Library /> },
					{ path: 'discover', element: <Discover /> },
				],
			},
		],
	},
])

function MyRouterProvider() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default MyRouterProvider
