'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
	Button,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../components/ui/shadcn-ui/import';
import { ModeToggle } from './mode-toggle';
import spiels from '@/lib/constants/spiels';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type ButtonIconProps = {
	onClose: () => void;
};

export const ButtonIcon = ({ onClose }: ButtonIconProps) => {
	return (
		<Button
			size='icon'
			onClick={onClose}
			className='bg-transparent text-black hover:text-white'
		>
			<X className='h-4 w-4' />
		</Button>
	);
};

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? `bg-white ${
							theme === 'dark' ? 'shadow-gray-800' : 'shadow-gray-300'
					  } shadow-lg`
					: 'bg-transparent'
			}`}
		>
			<div
				className={`relative z-10 flex items-center justify-between w-full px-10 py-4 ${
					theme === 'dark' ? 'shadow-gray-800' : 'shadow-gray-300'
				} shadow-sm`}
			>
				<div className='flex justify-start'>
					<Image
						src='/Logo1.png'
						alt='Logo'
						width={160}
						height={80}
						className='h-8 w-auto scale-[2]'
					/>
				</div>
				<NavigationMenu>
					<NavigationMenuList>
						{spiels.NAVBAR_MENU_LIST.map((item, index) => (
							<NavigationMenuItem key={index}>
								{item.label === 'Home' ? (
									<>
										<NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px]'>
												{spiels.NAVBAR_HOME_MENUCONTENT.map(
													(contentItem, contentIndex) => (
														<li key={contentIndex}>
															<a
																href={item.href}
																className={cn(
																	'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
																)}
															>
																<div className='text-sm font-medium leading-none'>
																	{contentItem.label}
																</div>
																<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
																	{contentItem.description}
																</p>
															</a>
														</li>
													)
												)}
											</ul>
										</NavigationMenuContent>
									</>
								) : (
									<a
										href={item.href}
										className={cn(
											'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
										)}
									>
										<div className='text-sm font-medium leading-none'>
											{item.label}
										</div>
									</a>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
				<div className='flex items-center gap-2'>
					<ModeToggle />
					<Button size='sm'>{spiels.BUTTON_SIGN_UP}</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
