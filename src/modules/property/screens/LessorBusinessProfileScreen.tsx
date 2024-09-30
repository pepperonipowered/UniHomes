import { BusinessLogo } from '../../property/components/BusinessLogo';
import { Badge } from '@/components/ui/badge';
import { LucideMessageCircle, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BusinessDetails } from '../../property/components/BusinessDetails';
import tempValues from '@/lib/constants/tempValues';
import ResponsiveLayout from '@/components/ResponsiveLayout';

const LessorBusinessProfileScreen = () => {
	const { title, lessor_name } = tempValues.LISTINGS[0];

	return (
		<ResponsiveLayout className='h-screen'>
			<div className='xl:w-full xl:flex xl:justify-center'>
				<div className='xl:w-[1250px]'>
					<div className='dark:text-white h-[100px] md:h-[70px] lg:h-[1px]' />

					{/* Business Profile Section */}
					<div className='section py-5 px-4'>
						<div className='grid grid-cols-4'>
							{/* Left Column: Business Logo and Info */}
							<div className='flex items-center col-span-3 w-[580px] xl:w-full'>
								<BusinessLogo />
								<div className='pt-4 w-full'>
									<Badge className='inline-block ml-4 py-1 mb-2'>
										Dormitory
									</Badge>
									<div className='flex flex-col'>
										<h1 className='font-semibold xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-left dark:text-white ml-4'>
											{title}
										</h1>
										<p className='flex items-center text-muted-foreground lg:text-md ml-4'>
											<MapPin className='mr-1' height={18} width={18} />
											Baguio City | on UniHomes since 2024
										</p>
									</div>
									<div className='flex items-center pt-6'>
										<Button
											variant='link'
											className='flex items-center justify-start text-left p-l-4'
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

							{/* Right Column: Lessor Info (visible on md and up) */}
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
										{lessor_name}
									</h1>
									<p className='text-sm text-gray-700'>Proprietor</p>
								</div>
								<Button className='text-xs p-0 m-0' variant='link'>
									<LucideMessageCircle
										className='mr-1'
										height={12}
										width={12}
									/>
									Contact Proprietor
								</Button>
							</div>
						</div>
					</div>

					{/* Mobile View: Lessor Info (visible on sm and xs) */}
					<div className='md:hidden px-8 py-4'>
						<div className='flex items-center p-2 border-y py-4 justify-between'>
							<div className='flex items-center'>
								<Avatar className='mb-1'>
									<AvatarImage
										src='https://github.com/shadcn.png'
										alt='@shadcn'
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div className='flex flex-col ml-4'>
									<p className='text-sm text-gray-700'>
										Contact business owner
									</p>
									<h1 className='font-semibold xl:text-md dark:text-primary-foreground'>
										{lessor_name}
									</h1>
								</div>
							</div>
							<Button className='text-xs p-0 m-0 ml-auto' variant='link'>
								<LucideMessageCircle className='mr-1' height={20} width={20} />
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Business Details Section */}
			<BusinessDetails />
		</ResponsiveLayout>
	);
};

export default LessorBusinessProfileScreen;
