import React from 'react';

function HeroSection() {
	return (
		<section className='flex flex-col md:flex-row justify-between items-center md:items-start w-full px-4 py-8 md:px-8 md:py-16'>
			<div className='md:w-[50%] flex flex-col items-center md:items-start'>
				<p className='text-h1Mobile md:text-h1 text-black font-bold leading-tight text-center md:text-left'>
					Navigating the <br /> digital landscape <br />
					for success
				</p>
				<div className='block md:hidden my-[35px]'>
					<img
						src='/logo1.png'
						alt='microphone illustration'
						className='w-full max-w-xs'
					/>
				</div>
				<p className='text-p text-black my-[35px] text-center md:text-left'>
					Our digital marketing agency helps businesses grow and succeed online
					through a range of services including SEO, PPC, social media
					marketing, and content creation.
				</p>
			</div>
			<div className='hidden md:block'>
				<img
					src='/logo1.png'
					alt='microphone illustration'
					className='w-full max-w-md'
				/>
			</div>
		</section>
	);
}

export default HeroSection;
