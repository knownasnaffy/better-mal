import { Card, CardHeader, Image } from '@nextui-org/react'

export const MetaCard = () => (
	<Card className='h-[250px] group'>
		<CardHeader className='absolute z-10 top-0 flex-col h-full justify-end !items-start hidden group-hover:flex transform transition-all ease-in-out duration-1000 group-hover:backdrop-blur-sm group-hover:bg-black/30'>
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
			className='z-0 w-full h-full object-cover group-hover:grayscale'
			src='https://cdn.myanimelist.net/images/manga/3/292556.jpg'
		/>
	</Card>
)
