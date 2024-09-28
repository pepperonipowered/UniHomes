import spiels from '@/lib/constants/spiels';
import tempValues from '@/lib/constants/tempValues';
import { Image } from 'lucide-react';
import React from 'react';

const PropertyDetails = () => {
	return (
		<>
			{/* property details */}
			<div className='col-span-full border-b border-gray-300 pb-6 mr-4'>
				<p className='leading-7 [&:not(:first-child)]:mt-6'>{spiels.LOREM}</p>
				<p className='leading-7 [&:not(:first-child)]:mt-6'>{spiels.LOREM}</p>
			</div>

			{/* general */}
			<div className='flex flex-col border-b border-gray-300 pb-8 mr-4'>
				<h4 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
					General
				</h4>
				<div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2'>
					{tempValues.LISTINGS[0].amenities.map((amenity) => (
						<div
							className='flex flex-row items-center gap-3 my-2'
							key={amenity.amenity_name}
						>
							<Image />
							<div>
								<h5 className='scroll-m-20 text-lg font-semibold tracking-tight'>
									{amenity.amenity_name}
								</h5>
								<p className='text-sm text-muted-foreground'>
									Amenemenemeneties Lorem, ipsum dolor.
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default PropertyDetails;
