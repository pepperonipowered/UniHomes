import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';

const HomeScreen = () => {
	return (
		<>
			<section className='py-4 lg:py-4 xl:py-4 px-32'>
				<Hero />
			</section>
			<section className='pt-32 pb-8 px-32'>
				<HowItWorks />
			</section>
			<section className='py-8 px-32'>
				<Stats />
			</section>
		</>
	);
};

export default HomeScreen;
