'use client';

import { useState } from 'react';
import { LucideAlignJustify, X } from 'lucide-react';
import spiels from '@/lib/constants/spiels';
import Image from 'next/image';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';
import { NavbarMenu } from './NavbarMenu';

function NavBar() {
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className='md:sticky md:top-0 md:shadow-lg z-[50] bg-white bg-opacity-80 backdrop-blur-md dark:bg-card'>
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
					<NavbarMenu />
					<div className='flex items-center gap-[6px] select-none'>
						<ModeToggle />
						<Button size='sm'>{spiels.BUTTON_SIGN_UP}</Button>
					</div>
				</div>
			</div>

			{/* MOBILE */}
			<div
				className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white bg-opacity-80 backdrop-blur-md dark:bg-card py-4 animate-in fade-in zoom-in ${
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
							{spiels.NAVBAR_OVERALL_LIST.map((item, index) => (
								<a
									key={index}
									href={item.href}
									className='hover:text-card cursor-pointer flex items-center gap-2 font-[500] text-gray'
								>
									{item.label}
								</a>
							))}
							<a href='#signup'>{spiels.BUTTON_SIGN_UP}</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default NavBar;
