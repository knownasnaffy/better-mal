import { Tabs, Tab } from '@nextui-org/react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sideBarItems } from '../routes/Root';

export function SideBar() {
	const location = useLocation();
	const navigate = useNavigate();
	const [route, setRoute] = useState(location.pathname);
	return <nav className='relative pt-2 w-fit'>
		<Tabs
			size='lg'
			aria-label='Navigation'
			selectedKey={route}
			onSelectionChange={(key) => {
				navigate(key.toString());
				setRoute(key.toString());
			}}
			items={sideBarItems}
			color='primary'
			variant='light'
			keyboardActivation='manual'
			classNames={{
				tab: 'justify-start',
			}}
			className='-mt-1 mx-1'
		>
			{(item) => {
				return (
					<Tab
						key={item.url}
						title={<div className='flex flex-row gap-2'>
							{item.icon}
						</div>} />
				);
			}}
		</Tabs>
	</nav>;
}
