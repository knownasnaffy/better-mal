import { Button, Input } from '@nextui-org/react'

const Discover = () => {
	return (
		<>
			<div className='flex flex-col w-full items-center p-2 overflow-auto'>
				<div className='flex flex-row w-full max-w-screen-sm gap-2'>
					<Input
						placeholder='Search...'
						size='sm'
						variant='flat'
						fullWidth
						radius='lg'
					/>
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
				</div>
			</div>
		</>
	)
}

export default Discover
