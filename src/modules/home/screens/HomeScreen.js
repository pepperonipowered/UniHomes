import { TracingBeam } from '@/components/ui/tracing-beam';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

const HomeScreen = () => {
	return (
		<>
			<TracingBeam>
				<section>
					<Hero />
				</section>
				<section className='py-16 px-32 xl:py-10 md:py-8'>
					<HowItWorks />
				</section>
				<section className='py-16 px-32 xl:py-10 md:py-8'>
					<Stats />
				</section>
				<section className='py-16 px-32 xl:py-10 md:py-8'>
					<Testimonials />
				</section>
			</TracingBeam>
		</>
	);
};

export default HomeScreen;
