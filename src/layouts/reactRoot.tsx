import Footer from '@/components/general/footer';
import Header from '@/components/general/header';
import { Navbar } from '@/components/general/navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Command, Home } from 'lucide-react';
import type React from 'react';

interface ReactRootProps {
	children: React.ReactNode;
	page: string;
}

const pages = [
	{
		name: 'Home',
		href: '/',
		icon: Home,
		category: 'General',
	},
	{
		name: 'Blog',
		href: '/blog',
		icon: Command,
		category: 'General',
	},
];

const ReactRoot: React.FC<ReactRootProps> = ({ children, page }) => {
	return (
		<SidebarProvider>
			<div className="flex h-[100vh] max-h-[100dvh] w-full flex-col">
				<Header page={page} logo="/favicon.svg" />
				<main className="flex-grow">{children}</main>
				<Footer />
			</div>

			<Navbar pages={pages} currentPage={page} />
		</SidebarProvider>
	);
};

export default ReactRoot;
