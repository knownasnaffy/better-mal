import { Divider } from '@nextui-org/react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../components/SideBar'

export const sideBarItems = [
	{
		url: '/',
		title: 'Home',
		icon: (
			<svg
				width='24'
				height='24'
				fill='none'
				className='fill-current'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M5.5 3A1.5 1.5 0 0 1 7 4.5v15A1.5 1.5 0 0 1 5.5 21h-2A1.5 1.5 0 0 1 2 19.5v-15A1.5 1.5 0 0 1 3.5 3h2Zm6 0A1.5 1.5 0 0 1 13 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 8 19.5v-15A1.5 1.5 0 0 1 9.5 3h2Zm7.281 3.124 3.214 12.519a1.5 1.5 0 0 1-1.08 1.826l-1.876.48a1.5 1.5 0 0 1-1.826-1.08L13.999 7.354a1.5 1.5 0 0 1 1.08-1.826l1.876-.483a1.502 1.502 0 0 1 1.826 1.08Z'
					// fill='#fff'
				/>
			</svg>
		),
	},
	{
		url: '/discover',
		title: 'Discover',
		icon: (
			<svg
				width='24'
				height='24'
				fill='none'
				className='fill-current'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M3.25 11h-1.2A10.003 10.003 0 0 1 11 2.05v1.2a.75.75 0 0 0 1.5 0V2.013c4.957.244 8.965 4.097 9.451 8.987h-1.2a.75.75 0 0 0 0 1.5h1.237a10 10 0 0 1-9.488 9.488V20.75a.75.75 0 0 0-1.5 0v1.201c-4.89-.486-8.743-4.494-8.987-9.45H3.25a.75.75 0 0 0 0-1.5Zm11.404.526a4 4 0 0 0-2.196-2.14L8.43 7.781a.5.5 0 0 0-.65.65l1.606 4.028a4 4 0 0 0 2.14 2.195l4.325 1.854a.5.5 0 0 0 .657-.656l-1.854-4.326Z'
					// fill='#fff'
				/>
			</svg>
		),
	},
	{
		url: '/settings',
		title: 'Settings',
		icon: (
			<svg
				width='24'
				height='24'
				fill='none'
				className='fill-current'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.401-.615a.75.75 0 0 1 .85.174 9.792 9.792 0 0 1 2.204 3.792.75.75 0 0 1-.271.825l-1.242.916a1.381 1.381 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826 9.797 9.797 0 0 1-2.204 3.792.75.75 0 0 1-.848.175l-1.407-.617a1.38 1.38 0 0 0-1.926 1.114l-.169 1.526a.75.75 0 0 1-.572.647 9.518 9.518 0 0 1-4.406 0 .75.75 0 0 1-.572-.647l-.168-1.524a1.382 1.382 0 0 0-1.926-1.11l-1.406.616a.75.75 0 0 1-.849-.175 9.798 9.798 0 0 1-2.204-3.796.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.271-.826 9.793 9.793 0 0 1 2.204-3.792.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65c.717-.159 1.45-.243 2.201-.252ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'
					// fill='#fff'
				/>
			</svg>
		),
	},
]

const root = () => {
	return (
		<>
			<div className='flex flex-row h-screen overflow-hidden'>
				<SideBar />
				<Divider orientation='vertical' className='' />
				<Outlet />
			</div>
		</>
	)
}

export default root

