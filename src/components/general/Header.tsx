import { useSidebar } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';
import type React from 'react';
import { Button } from '../ui/button';

interface HeaderProps {
	logo: string;
	page: string;
}

const Header: React.FC<HeaderProps> = ({ page, logo }) => {
	const { toggleSidebar } = useSidebar();
	return (
		<div className="flex items-center justify-between p-4">
			<a href="/" className="flex items-center transition-all duration-200">
				<img
					src={logo}
					alt="Logo"
					className="h-14 w-14 transition-opacity duration-200 hover:opacity-50"
				/>
			</a>

			<Button
				onClick={toggleSidebar}
				data-sidebar="trigger"
				variant="ghost"
				size="icon"
			>
				<Menu size={24} />
				<span className="sr-only">Open Sidebar</span>
			</Button>
		</div>
	);
};

export default Header;
