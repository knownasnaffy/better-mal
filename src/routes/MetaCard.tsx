import { Card, CardHeader, Image } from '@nextui-org/react'

export const MetaCard = () => (
	<Card className='h-[250px] group hover:drop-shadow-lg hover:scale-105'>
		<CardHeader className='absolute z-10 top-0 flex-col h-full justify-end !items-start opacity-0 transform transition-opacity ease-in-out delay-150 duration-1000 group-hover:opacity-100 group-hover:backdrop-blur-sm bg-black/30 rounded-xl'>
			<p className='text-tiny text-white/60 uppercase font-bold'>
				What to watch
			</p>
			<h4 className='text-white font-medium text-large'>
				Stream the Acme event
			</h4>
		</CardHeader>
		<Image
			removeWrapper
			alt='Card background'
			className='z-0 w-full h-full object-cover group-hover '
			// src='https://cdn.myanimelist.net/images/manga/3/292556.jpg'
		/>
	</Card>
)
