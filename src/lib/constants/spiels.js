import { Star, User, Users2, Warehouse } from 'lucide-react';

/* eslint-disable sort-keys */
const spiels = {
	// Home
	HERO_DESCRIPTION:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
	HOW_IT_WORKS: 'How It Works',
	HOW_IT_WORKS_CARDS: [
		{
			label: 'Search Property',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
		},
		{
			label: 'Explore Property',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
		},
		{
			label: 'Choose Property',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
		},
	],
	STATS_LABEL: 'STATS',
	STATS_HEADER: 'Here are some stats to look at',
	STATS_DATA: [
		{
			label: 'Clients',
			stat: '21K',
			description: '+21 since last hour',
			avatar: User,
		},
		{
			label: 'Properties',
			stat: '1200',
			description: '+21 since last hour',
			avatar: Warehouse,
		},
		{
			label: 'Lessors',
			stat: '100',
			description: '+21 since last hour',
			avatar: Users2,
		},
		{
			label: 'Ratings',
			stat: '200',
			description: '+21 since last hour',
			avatar: Star,
		},
	],
	TESTIMONIALS_LABEL: 'TESTIMONIALS',
	TESTIMONIALS_HEADER: 'Meet our happy clients',

	// Buttons
	BUTTON_BACK: 'Back',
	BUTTON_BOOK_NOW: 'Book Now',
	BUTTON_CANCEL: 'Cancel',
	BUTTON_CONTINUE: 'Continue',
	BUTTON_CONFIRM: 'Confirm',
	BUTTON_DEACTIVATE: 'Deactivate',
	BUTTON_DEACTIVATE_ACCOUNT: 'Deactivate Account',
	BUTTON_DELETE: 'Delete',
	BUTTON_EXPLORE_NOW: 'Explore Now',
	BUTTON_FILTER: 'Filter',
	BUTTON_LEARN_MORE: 'Learn More',
	BUTTON_LOGIN: 'Login',
	BUTTON_NEXT: 'Next',
	BUTTON_PROCEED: 'Proceed',
	BUTTON_RESET_FILTER: 'Reset Filters',
	BUTTON_SAVE: 'Save',
	BUTTON_SEND_RESET_REQUEST: 'Send Reset Request',
	BUTTON_SET_APPOINTMENT: 'Set Appointment',
	BUTTON_SIGN_IN: 'Sign In',
	BUTTON_SIGN_UP: 'Sign Up',
	BUTTON_SUBMIT: 'Submit',
	BUTTON_VIEW: 'View',
	BUTTON_VIEW_ALL: 'View all',

	//Navbar
	NAVBAR_MENU_LIST: [
		{
			label: 'Home',
			href: '#home',
			description: 'Description for Home',
		},
		{
			label: 'Listings',
			href: '#listings',
			description: 'Description for Listings',
		},
		// For logged in users
		{
			label: 'Messages',
			href: '#messages',
			description: 'Description for Messages',
		},
		{
			label: 'Favorites',
			href: '#favorites',
			description: 'Description for Favorites',
		},
	],

	NAVBAR_HOME_MENUCONTENT: [
		{
			label: 'Introduction',
			description: 'What is UniHomes?',
		},
		{
			label: 'Features',
			description: 'How it works',
		},
		{
			label: 'Reviews and Ratings',
			description: 'Testimonials',
		},
	],
};

export default spiels;
