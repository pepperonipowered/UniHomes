import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';

const HomeScreen = () => {
	return (
		<>
			<section className='py-4 lg:py-4 xl:py-4 px-32'>
				<Hero />
			</section>
			<section className='py-14 px-32'>
				<HowItWorks />
			</section>
		</>
	);
};

export default HomeScreen;
