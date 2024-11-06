import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';

export interface NavItem {
	name: string;
	href: string;
	icon: React.FC;
	category?: string;
}

interface NavbarProps {
	pages: NavItem[];
	currentPage: string;
}

export const Navbar = ({ pages, currentPage }: NavbarProps) => {
	const sections = pages.reduce(
		(acc, { category = 'General', ...item }) => {
			const categoryKey = category.charAt(0).toUpperCase() + category.slice(1);
			return Object.assign(acc, {
				[categoryKey]: [...(acc[categoryKey] || []), item],
			});
		},
		{} as Record<string, Omit<NavItem, 'category'>[]>,
	);

	return (
		<Sidebar side="right" collapsible="icon">
			<SidebarContent>
				{Object.entries(sections).map(([section, items]) => (
					<Collapsible defaultOpen className="group/collapsible" key={section}>
						<SidebarGroup>
							<SidebarGroupLabel asChild>
								<CollapsibleTrigger>
									{section}
									<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
								</CollapsibleTrigger>
							</SidebarGroupLabel>
							<CollapsibleContent>
								<SidebarGroupContent className="flex flex-col gap-1">
									{items.map((item) => (
										<SidebarMenuItem key={item.name}>
											<SidebarMenuButton
												asChild
												className={`text-primary hover:bg-primary/30 ${
													currentPage === item.href ? 'bg-primary/30' : ''
												}`}
											>
												<a
													href={item.href}
													className={
														'group flex items-center gap-2 font-semibold text-xl transition-all duration-200'
													}
												>
													<item.icon />
													<span>{item.name}</span>
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarGroupContent>
							</CollapsibleContent>
						</SidebarGroup>
					</Collapsible>
				))}
			</SidebarContent>
		</Sidebar>
	);
};
