import { ArrowDownRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import spiels from '@/lib/constants/spiels';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { Globe } from './Globe';

const Hero = () => {
	const words = [
		{
			text: 'Welcome',
		},
		{
			text: 'to',
		},
		{
			text: 'UniHomes',
			className: 'text-primary dark:text-primary',
		},
	];
	return (
		<section>
			<div className='container'>
				<div className='grid items-center gap-8 lg:grid-cols-2'>
					<div className='flex flex-col items-center text-center lg:items-start lg:text-left sm:pt-44'>
						<Badge variant='outline'>
							New Release
							<ArrowDownRight className='ml-2 size-4' />
						</Badge>

						<TypewriterEffectSmooth words={words} />

						<p className='mb-8 max-w-xl text-muted-foreground lg:text-xl'>
							{spiels.HERO_DESCRIPTION}
						</p>
						<div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
							<Button className='w-full sm:w-auto'>
								{spiels.BUTTON_EXPLORE_NOW}
							</Button>
							<Button variant='outline' className='w-full sm:w-auto'>
								{spiels.BUTTON_LEARN_MORE}
								<ArrowDownRight className='ml-2 size-4' />
							</Button>
						</div>
					</div>
					{/* <HeroGallery /> */}
					{/* Need to fix globe responsiveness */}
					<Globe />
				</div>
			</div>
		</section>
	);
};

export default Hero;
