'use client';

import { motion } from 'framer-motion';
import spiels from '@/lib/constants/spiels';

const Stats = () => {
	const itemVariants = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<section className='my-10'>
			<div className='container'>
				<p className='mb-2 text-xs text-muted-foreground'>
					{spiels.STATS_LABEL}
				</p>
				<h2 className='text-pretty text-4xl font-semibold lg:text-4xl my-2'>
					{spiels.STATS_HEADER}
				</h2>
				<div className='mt-14 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-4'>
					{spiels.STATS_DATA.map((item, index) => (
						<motion.div
							className='relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5'
							key={index}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={itemVariants}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<span className='mb-4 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary md:size-12 text-white'>
								<item.avatar className='size-5 md:size-6' />
							</span>
							<div>
								<h3 className='font-bold md:mb-1 md:text-xl'>{item.label}</h3>
								<p className='text-sm text-muted-foreground md:text-base'>
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
