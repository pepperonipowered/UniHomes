import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ReviewsTab } from '../components/ReviewsTab';
import { NewProprietorsTab } from '../components/NewProprietorsTab';
import LandmarksTab from '../components/LandmarksTab';
import { PropertyTab } from '../components/PropertyTab';
import { AdminDashboardTab } from '../Analytics/AdminDashboardTab';
export function AdminDashboardScreen() {
	return (
		<div className='bg-background dark:bg-secondary h-screen'>
			<div className='mx-4 py-10 lg:pt-5'>
				<Tabs defaultValue='dashboard' className='w-full'>
					<TabsList className='grid w-full lg:w-[50%] grid-cols-5'>
						<TabsTrigger value='dashboard'>Dashboard</TabsTrigger>
						<TabsTrigger value='newProprietors'>New Proprietors</TabsTrigger>
						<TabsTrigger value='newProperty'>New Properties</TabsTrigger>
						<TabsTrigger value='reportedReviews'>Reported Reviews</TabsTrigger>
						<TabsTrigger value='landmarks'>Landmarks</TabsTrigger>
					</TabsList>
					<TabsContent value='dashboard'>
						<AdminDashboardTab />
					</TabsContent>
					<TabsContent value='newProprietors'>
						<NewProprietorsTab />
					</TabsContent>
					<TabsContent value='reportedReviews'>
						<ReviewsTab />
					</TabsContent>
					<TabsContent value='newProperty'>
						<PropertyTab />
					</TabsContent>
					<TabsContent value='landmarks'>
						<LandmarksTab />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
