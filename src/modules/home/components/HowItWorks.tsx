import {} from '@/components/ui/card';
import spiels from '@/lib/constants/spiels';
import { WobbleCard } from '@/components/ui/wobble-card';

const HowItWorks = () => {
	return (
		<section className='my-18'>
			<div className='container'>
				<div className='flex flex-col items-center text-center'>
					<h1 className='text-pretty text-4xl font-semibold lg:text-4xl my-3'>
						{spiels.HOW_IT_WORKS}
					</h1>
					<p className='max-w-xl text-muted-foreground lg:text-lg'>
						{spiels.HERO_DESCRIPTION}
					</p>
				</div>
				<div className='mt-5 grid grid-cols-1 place-items-center gap-4 lg:grid-cols-3'>
					{spiels.HOW_IT_WORKS_CARDS.map((item, index) => (
						<WobbleCard
							containerClassName='col-span-1 lg:col-span-1 h-full bg-primary min-h-[50px] lg:min-h-[50px]'
							className=''
							key={index}
						>
							<div className='max-w-2xl'>
								<h3 className='text-left text-balance text-base md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-white'>
									{item.label}
								</h3>
								<p className='mt-4 text-left  text-base/6 text-neutral-200'>
									{item.description}
								</p>
							</div>
						</WobbleCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
