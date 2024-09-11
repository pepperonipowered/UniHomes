'use client';

import { useState } from 'react';
import { LucideAlignJustify, X } from 'lucide-react';
import spiels from '@/lib/constants/spiels';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from './../ui/navigation-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';

function NavBar() {
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className='md:sticky md:top-0 md:shadow-none z-20'>
			{/* DESKTOP */}
			<div className='hidden lg:block animate-in fade-in zoom-in p-4'>
				<div className='flex justify-between mx-2 md:mx-[30px] items-center'>
					<div>
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
											<NavigationMenuTrigger>
												{item.label}
											</NavigationMenuTrigger>
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
					<div className='flex items-center gap-[6px] select-none'>
						<ModeToggle />
						<Button size='sm'>{spiels.BUTTON_SIGN_UP}</Button>
					</div>
				</div>
			</div>

			{/* MOBILE */}
			<div
				className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in ${
					menu ? 'bg-primary py-2' : ''
				}`}
			>
				<div className='flex justify-between mx-[10px] items-center'>
					<Image
						src='/logo1.png'
						alt='logo'
						width={112}
						height={28}
						className='w-[7rem]'
					/>
					<div className='flex items-center gap-[20px]'>
						{menu ? (
							<X
								className='cursor-pointer animate-in fade-in zoom-in text-black'
								onClick={toggleMenu}
							/>
						) : (
							<LucideAlignJustify
								className='cursor-pointer animate-in fade-in zoom-in'
								onClick={toggleMenu}
							/>
						)}
						<ModeToggle />
					</div>
				</div>
				{menu && (
					<div className='my-8 select-none animate-in slide-in-from-right'>
						<div className='flex flex-col gap-8 mt-8 mx-4'>
							{spiels.NAVBAR_MENU_LIST.map((item, index) => (
								<a
									key={index}
									href={item.href}
									className='hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray'
								>
									{item.label}
								</a>
							))}
							<a href='#signup'>Sign Up</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default NavBar;
