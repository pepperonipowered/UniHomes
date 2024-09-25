import { BusinessLogo } from '../components/BusinessLogo';
import { Badge } from '@/components/ui/badge';
import { LucideMessageCircle, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BusinessDetails } from '../components/BusinessDetails';
import tempValues from '@/lib/constants/tempValues';

const LessorBusinessProfileScreen = () => {
	return (
		<>
			<div className='bg-gray-200 h-[100px]' />
			<div className='section bg-gray-50 py-5 px-16'>
				<div className='grid grid-cols-4'>
					<div className='flex items-center col-span-3'>
						<div>
							<BusinessLogo />
						</div>
						<div>
							<Badge className='inline-block ml-4 py-1'>Dormitory</Badge>
							<div className='flex flex-col'>
								<h1 className='font-semibold xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl stext-left dark:text-primary-foreground ml-4'>
									{tempValues.LISTINGS[0].title}
								</h1>
								<p className='flex items-center text-muted-foreground lg:text-md ml-4'>
									<MapPin className='mr-1' height={18} width={18} />
									Baguio City | on UniHomes since 2024
								</p>
							</div>
							<div className='flex items-center pt-6'>
								<Button
									variant='link'
									className='p-l-4 flex items-center justify-start text-left'
								>
									<span className='flex items-center'>
										<Star
											className='h-4 w-4 text-yellow-500 mr-1'
											fill='currentColor'
										/>
										<p className='text-xs'>15 Reviews</p>
									</span>
								</Button>
							</div>
						</div>
					</div>

					{/* 2ND COL - visible on md and up */}
					<div className='hidden md:flex flex-col items-center justify-start col-span-1 mx-auto py-10'>
						<div className='flex flex-col items-center'>
							<Avatar className='mb-1'>
								<AvatarImage
									src='https://github.com/shadcn.png'
									alt='@shadcn'
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<h1 className='font-semibold xl:text-md text-center dark:text-primary-foreground'>
								{tempValues.LISTINGS[0].lessor_name}
							</h1>
							<p className='text-sm text-gray-700'>Proprietor</p>
						</div>
						<Button className='text-xs p-0 m-0' variant='link'>
							<LucideMessageCircle className='mr-1' height={12} width={12} />
							Contact Proprietor
						</Button>
					</div>
				</div>
			</div>

			{/* visible on sm and xs screen */}
			<div className='div md:hidden px-2 py-4'>
				<div className='flex items-center p-2 border-y py-4 justify-between'>
					<div className='flex items-center'>
						<Avatar className='mb-1'>
							<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className='flex flex-col ml-4'>
							<p className='text-sm text-gray-700'>Contact business owner</p>
							<h1 className='font-semibold xl:text-md dark:text-primary-foreground'>
								{tempValues.LISTINGS[0].lessor_name}
							</h1>
						</div>
					</div>
					<Button className='text-xs p-0 m-0 ml-auto' variant='link'>
						<LucideMessageCircle className='mr-1' height={20} width={20} />
					</Button>
				</div>
			</div>

			<BusinessDetails />
		</>
	);
};

export default LessorBusinessProfileScreen;
