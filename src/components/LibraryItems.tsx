import { MetaCard } from '../routes/MetaCard';

export const LibraryItems = () => (
	<div className='grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 max-w-screen-2xl gap-4 w-full p-4'>
		<MetaCard />
		<MetaCard />
		<MetaCard />
		<MetaCard />
		<MetaCard />
		<MetaCard />
		<MetaCard />
		<MetaCard />
		<MetaCard />
	</div>
);
