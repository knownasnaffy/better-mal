import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
} from '@nextui-org/react'
import { LibraryItems } from '../components/LibraryItems'
import { useState } from 'react'

const Library = () => {
	const [query, setQuery] = useState('')
	return (
		<>
			<div className='flex flex-col w-full items-center p-4 overflow-auto scrollbox'>
				<div className='flex flex-row w-full max-w-screen-sm gap-2'>
					<Input
						placeholder='Search...'
						size='sm'
						variant='flat'
						fullWidth
						radius='lg'
						isClearable
						value={query}
						onValueChange={setQuery}
						onClear={() => setQuery('')}
					/>
					<Dropdown>
						<DropdownTrigger>
							<Button isIconOnly variant='flat' size='lg'>
								<svg
									width='24'
									height='24'
									fill='none'
									className='fill-current'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10 16h4a1 1 0 0 1 .117 1.993L14 18h-4a1 1 0 0 1-.117-1.993L10 16h4-4Zm-2-5h8a1 1 0 0 1 .117 1.993L16 13H8a1 1 0 0 1-.117-1.993L8 11h8-8ZM5 6h14a1 1 0 0 1 .117 1.993L19 8H5a1 1 0 0 1-.117-1.993L5 6h14H5Z'
										// fill='#fff'
									/>
								</svg>
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label='Static Actions'>
							<DropdownItem key='last-read'>Last read</DropdownItem>
							<DropdownItem key='latest-chapter'>Latest chapter</DropdownItem>
							<DropdownItem key='edit'>Edit file</DropdownItem>
							<DropdownItem
								key='delete'
								className='text-danger'
								color='danger'
							>
								Delete file
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<Button isIconOnly variant='flat' size='lg'>
						<svg
							width='24'
							height='24'
							fill='none'
							className='fill-current'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.75 13A2.25 2.25 0 0 1 11 15.25v3.5A2.25 2.25 0 0 1 8.75 21h-3.5A2.25 2.25 0 0 1 3 18.75v-3.5A2.25 2.25 0 0 1 5.25 13h3.5Zm10 0A2.25 2.25 0 0 1 21 15.25v3.5A2.25 2.25 0 0 1 18.75 21h-3.5A2.25 2.25 0 0 1 13 18.75v-3.5A2.25 2.25 0 0 1 15.25 13h3.5Zm-10-10A2.25 2.25 0 0 1 11 5.25v3.5A2.25 2.25 0 0 1 8.75 11h-3.5A2.25 2.25 0 0 1 3 8.75v-3.5A2.25 2.25 0 0 1 5.25 3h3.5Zm10 0A2.25 2.25 0 0 1 21 5.25v3.5A2.25 2.25 0 0 1 18.75 11h-3.5A2.25 2.25 0 0 1 13 8.75v-3.5A2.25 2.25 0 0 1 15.25 3h3.5Z'
								// fill='#fff'
							/>
						</svg>
					</Button>
				</div>
				<LibraryItems />
			</div>
		</>
	)
}

export default Library
