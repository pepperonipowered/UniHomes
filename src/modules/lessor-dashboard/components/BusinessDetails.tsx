'use client';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import tempValues from '@/lib/constants/tempValues';
import { useState } from 'react';
import SpecificBranchListings from './SpecificBranchListings';
import BusinessReviews from './BusinessReviews';

interface BranchListings {
	id: number;
	branch: string;
	available_rooms: {
		room_id: number;
		room_title: string;
		room_capacity: number;
		lifestyle: string;
		description: string;
		price: number;
		availability: boolean;
	}[];
}
export function BusinessDetails() {
	const [specificBranchList] = useState<BranchListings[]>(
		tempValues.BRANCHES_AND_ROOMS
	);
	const [selectedBranch, setSelectedBranch] = useState<BranchListings | null>(
		null
	);

	const handleBranchClick = (branch: BranchListings) => {
		setSelectedBranch(branch);
	};

	return (
		<Tabs defaultValue='about' className='w-screen px-16 py-4'>
			<TabsList className='grid w-full grid-cols-3'>
				<TabsTrigger value='about'>About</TabsTrigger>
				<TabsTrigger value='branchesAndRooms'>
					Branches & Available Rooms
				</TabsTrigger>
				<TabsTrigger value='reviews'>Customer Reviews</TabsTrigger>
			</TabsList>

			{/* ABOUT SECTION */}
			<TabsContent value='about'>
				<Card className='bg-white'>
					<CardHeader>
						<CardTitle>About {tempValues.LISTINGS[0].title}</CardTitle>
						<CardDescription>On UniHomes since 2024</CardDescription>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							{tempValues.LISTINGS[0].description}
						</div>
					</CardContent>
				</Card>
			</TabsContent>

			{/* BRANCHES SECTION */}
			<TabsContent value='branchesAndRooms'>
				<Card className='bg-white'>
					<CardHeader>
						<CardTitle>Branches</CardTitle>
						<CardDescription>Explore our different branches</CardDescription>
					</CardHeader>
					<CardContent className='space-y-1'>
						<Carousel>
							<CarouselContent className=''>
								{specificBranchList.map((branch) => (
									<CarouselItem
										key={branch.id}
										className='lg:basis-1/4 md:basis-1/3 sm:basis-1/2 xs:basis-1/2'
										onClick={() => handleBranchClick(branch)}
									>
										{/* active card */}
										<Card
											className={`border-none ${
												selectedBranch?.id === branch.id
													? 'bg-blue-800 text-white'
													: 'bg-none'
											}`}
										>
											<CardContent className='flex h-16 items-center justify-center p-0'>
												{branch.branch}
											</CardContent>
										</Card>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>

						{/* display available rooms for selectd branch */}
						{selectedBranch ? (
							<div className='space-y-1 pt-1 pl-2'>
								<SpecificBranchListings
									listings={selectedBranch.available_rooms}
								/>
							</div>
						) : (
							<p>Please select a branch to see available rooms.</p>
						)}
					</CardContent>
				</Card>
			</TabsContent>

			{/* REVIEWS */}
			<TabsContent value='reviews'>
				<Card className='bg-white'>
					<CardHeader>
						<CardTitle>Customer Reviews</CardTitle>
						<CardDescription>Read what people have to say</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='space-y-1'>
							<BusinessReviews />
						</div>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
