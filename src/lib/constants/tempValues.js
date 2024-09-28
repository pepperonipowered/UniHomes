const tempValues = {
	// LESSORS
	LESSORS: [
		{
			id: 1,
			name: 'John Doe',
			message:
				"Hi there! I'm available to discuss the lease terms for the apartment. Let me know your available times.",
			dorm_name: 'Sunset Residences',
			email: 'johndoe@gmail.com',
			contact: '09123456789',
			birthdate: '1990-01-15',
			address: '123 Pine St, Baguio City',
			govIdUrl: 'https://example.com/images/johndoe_gov_id.jpg',
			businessLicenseUrl:
				'https://example.com/images/johndoe_business_license.jpg',
			read: false,
		},
		{
			id: 2,
			name: 'Jane Smith',
			message:
				'Hello! I’d like to schedule a meeting to go over the details of the lease agreement. When are you free?',
			dorm_name: 'Maple Heights',
			email: 'janes@gmail.com',
			contact: '09123456723',
			birthdate: '1992-02-20',
			address: '456 Oak Ave, Baguio City',
			govIdUrl: 'https://example.com/images/johndoe_gov_id.jpg',
			businessLicenseUrl:
				'https://example.com/images/johndoe_business_license.jpg',
			read: true,
		},
		{
			id: 3,
			name: 'Emily Johnson',
			message:
				'Good day! I’m reaching out to arrange a time to talk about the lease conditions. Please share your availability.',
			dorm_name: 'Greenfield Apartments',
			email: 'emilyjohnson@gmail.com',
			contact: '09123456777',
			birthdate: '1991-03-05',
			address: '789 Maple Dr, Baguio City',
			govIdUrl: 'https://example.com/images/johndoe_gov_id.jpg',
			businessLicenseUrl:
				'https://example.com/images/johndoe_business_license.jpg',
			read: true,
		},
		{
			id: 4,
			name: 'Michael Brown',
			message:
				'Hello! I’m looking to finalize the rental details. Can we set up a time to discuss this further?',
			dorm_name: 'River View Flats',
			email: 'michbro@gmail.com',
			contact: '09123456712',
			birthdate: '1989-04-10',
			address: '321 Birch Ln, Baguio City',
			govIdUrl: 'https://example.com/images/johndoe_gov_id.jpg',
			businessLicenseUrl:
				'https://example.com/images/johndoe_business_license.jpg',
			read: true,
		},
		{
			id: 5,
			name: 'Sarah Davis',
			message:
				'Hi! I’d like to arrange a meeting to review the lease terms and conditions. When can we connect?',
			dorm_name: 'Hilltop Residences',
			email: 'sarahd@gmail.com',
			contact: '09123456569',
			birthdate: '1993-05-25',
			address: '654 Cedar St, Baguio City',
			govIdUrl: 'https://example.com/images/johndoe_gov_id.jpg',
			businessLicenseUrl:
				'https://example.com/images/johndoe_business_license.jpg',
			read: true,
		},
		{
			id: 6,
			name: 'David Wilson',
			message:
				'Hey! I’m available to go over the lease agreement details. Let me know a suitable time for you.',
			dorm_name: 'Lakeside Apartments',
			email: 'davidwil@gmail.com',
			contact: '09123986789',
			birthdate: '1994-06-30',
			address: '987 Spruce Rd, Baguio City',
			govIdUrl: 'https://example.com/images/johndoe_gov_id.jpg',
			businessLicenseUrl:
				'https://example.com/images/johndoe_business_license.jpg',
			read: false,
		},
		{
			id: 7,
			name: 'Olivia Martinez',
			message:
				'Greetings! I’d like to set up a meeting to discuss the lease terms. What times work for you?',
			dorm_name: 'Cedar Grove Apartments',
			email: 'olivmar@gmail.com',
			contact: '09323456789',
			birthdate: '1995-07-15',
			address: '246 Fir St, Baguio City',
			govIdUrl: 'https://example.com/images/johndoe_gov_id.jpg',
			businessLicenseUrl:
				'https://example.com/images/johndoe_business_license.jpg',
			read: true,
		},
		{
			id: 8,
			name: 'Rohana Loy',
			message:
				'Greetings! I’d like to set up a meeting to discuss the lease terms. What times work for you?',
			dorm_name: 'Cedar Grove Apartments',
			email: 'rohan@gmail.com',
			contact: '09323498789',
			birthdate: '1996-08-20',
			address: '369 Willow Way, Baguio City',
			govIdUrl: 'https://example.com/images/johndoe_gov_id.jpg',
			businessLicenseUrl:
				'https://example.com/images/johndoe_business_license.jpg',
			read: true,
		},
	],

	//LISTINGS
	LISTINGS: [
		{
			id: 1,
			title: 'Urban Oasis',
			description:
				'Urban Oasis is your home away from home in the heart of Baguio City, designed to provide students and young professionals with a comfortable and affordable living space. Our facility offers fully furnished rooms, high-speed internet, and modern amenities, all within walking distance of major universities and city attractions. With a vibrant community atmosphere and dedicated staff, we foster personal growth and academic success, ensuring a safe and supportive environment for all residents. Join us at Marandnest Dormitory and experience the perfect blend of comfort, convenience, and community!',
			price: 2500,
			featured: true,
			amenities: [
				{
					amenity_name: 'Air Conditioning',
					value: true,
				},
				{
					amenity_name: 'Dryer',
					value: true,
				},
				{
					amenity_name: 'Essentials',
					value: true,
				},
				{
					amenity_name: 'Heating',
					value: true,
				},
				{
					amenity_name: 'Hot Water',
					value: false,
				},
				{
					amenity_name: 'Kitchen',
					value: false,
				},
				{
					amenity_name: 'TV',
					value: true,
				},
				{
					amenity_name: 'Washer',
					value: true,
				},
				{
					amenity_name: 'Wifi',
					value: true,
				},
			],
			lessor_name: 'John Doe',
		},
		{
			id: 2,
			title: 'Maple Retreat',
			description: 'An escape from the hustle, with all the modern amenities.',
			price: 2200,
			featured: true,
			amenities: [
				{
					amenity_name: 'Air Conditioning',
					value: true,
				},
				{
					amenity_name: 'Dryer',
					value: false,
				},
				{
					amenity_name: 'Essentials',
					value: true,
				},
				{
					amenity_name: 'Heating',
					value: false,
				},
				{
					amenity_name: 'Hot Water',
					value: true,
				},
				{
					amenity_name: 'Kitchen',
					value: false,
				},
				{
					amenity_name: 'TV',
					value: true,
				},
				{
					amenity_name: 'Washer',
					value: true,
				},
				{
					amenity_name: 'Wifi',
					value: true,
				},
			],
			lessor_name: 'Jane Smith',
		},
		{
			id: 3,
			title: 'Greenfield Getaway',
			description: 'Sustainable living in the heart of the city.',
			price: 2000,
			featured: true,
			amenities: [
				{
					amenity_name: 'Air Conditioning',
					value: false,
				},
				{
					amenity_name: 'Dryer',
					value: true,
				},
				{
					amenity_name: 'Essentials',
					value: false,
				},
				{
					amenity_name: 'Heating',
					value: false,
				},
				{
					amenity_name: 'Hot Water',
					value: true,
				},
				{
					amenity_name: 'Kitchen',
					value: false,
				},
				{
					amenity_name: 'TV',
					value: true,
				},
				{
					amenity_name: 'Washer',
					value: true,
				},
				{
					amenity_name: 'Wifi',
					value: true,
				},
			],
			lessor_name: 'Emily Johnson',
		},
		{
			id: 4,
			title: 'Riverfront Haven',
			description: 'Wake up to serene riverside views every day.',
			price: 2300,
			featured: false,
			amenities: [
				{
					amenity_name: 'Air Conditioning',
					value: true,
				},
				{
					amenity_name: 'Dryer',
					value: false,
				},
				{
					amenity_name: 'Essentials',
					value: false,
				},
				{
					amenity_name: 'Heating',
					value: false,
				},
				{
					amenity_name: 'Hot Water',
					value: true,
				},
				{
					amenity_name: 'Kitchen',
					value: true,
				},
				{
					amenity_name: 'TV',
					value: false,
				},
				{
					amenity_name: 'Washer',
					value: false,
				},
				{
					amenity_name: 'Wifi',
					value: true,
				},
			],
			lessor_name: 'Michael Brown',
		},
		{
			id: 5,
			title: 'Hilltop Sanctuary',
			description: 'A peaceful sanctuary overlooking the bustling city below.',
			price: 2100,
			featured: false,
			amenities: [
				{
					amenity_name: 'Air Conditioning',
					value: true,
				},
				{
					amenity_name: 'Dryer',
					value: true,
				},
				{
					amenity_name: 'Essentials',
					value: false,
				},
				{
					amenity_name: 'Heating',
					value: false,
				},
				{
					amenity_name: 'Hot Water',
					value: false,
				},
				{
					amenity_name: 'Kitchen',
					value: false,
				},
				{
					amenity_name: 'TV',
					value: true,
				},
				{
					amenity_name: 'Washer',
					value: false,
				},
				{
					amenity_name: 'Wifi',
					value: false,
				},
			],
			lessor_name: 'Sarah Davis',
		},
	],

	// BRANCHES AND ROOMS
	BRANCHES_AND_ROOMS: [
		{
			id: 1,
			branch: 'Baguio City',
			available_rooms: [
				{
					room_id: 1,
					room_title: 'College Ladies Only Room',
					room_capacity: 4,
					lifestyle: 'Student',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: true,
				},
				{
					room_id: 2,
					room_title: 'Mixed Dormitory Room',
					room_capacity: 6,
					lifestyle: 'Student',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: true,
				},
				{
					room_id: 3,
					room_title: 'Private Room for Professionals',
					room_capacity: 1,
					lifestyle: 'Professional',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: false,
				},
				{
					room_id: 4,
					room_title: 'Private Room for Studious',
					room_capacity: 1,
					lifestyle: 'Students',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: false,
				},
			],
		},
		{
			id: 2,
			branch: 'Manila',
			available_rooms: [
				{
					room_id: 5,
					room_title: 'College Boys Only Room',
					room_capacity: 4,
					lifestyle: 'Student',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: true,
				},
				{
					room_id: 6,
					room_title: 'Premium Studio Room',
					room_capacity: 2,
					lifestyle: 'Professional',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: true,
				},
			],
		},
		{
			id: 3,
			branch: 'Cebu City',
			available_rooms: [
				{
					room_id: 7,
					room_title: 'Family Room',
					room_capacity: 5,
					lifestyle: 'Family',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: true,
				},
				{
					room_id: 8,
					room_title: 'Shared Room for Students',
					room_capacity: 8,
					lifestyle: 'Student',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: false,
				},
				{
					room_id: 9,
					room_title: 'Executive Suite',
					room_capacity: 1,
					lifestyle: 'Professional',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: true,
				},
			],
		},
		{
			id: 4,
			branch: 'La Union',
			available_rooms: [
				{
					room_id: 1,
					room_title: 'College Girls Only Room',
					room_capacity: 4,
					lifestyle: 'Student',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: true,
				},
				{
					room_id: 2,
					room_title: 'Mixed Dormitory Room',
					room_capacity: 6,
					lifestyle: 'Student',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: true,
				},
				{
					room_id: 3,
					room_title: 'Private Room for Professionals',
					room_capacity: 1,
					lifestyle: 'Professional',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: false,
				},
				{
					room_id: 4,
					room_title: 'Private Room for Studious',
					room_capacity: 1,
					lifestyle: 'Students',
					description:
						'Discover the calm and tranquility of city living in style.',
					price: 2500,
					availability: false,
				},
			],
		},
	],

	// REVIEWS
	REVIEWS: [
		{
			name: 'Jane Pale',
			review: 'The host was so hospitable and the amenities were top-notch.',
		},
		{
			name: 'John Doe',
			review:
				'Amazing experience! The location was perfect, and the amenities were top-notch.',
		},
		{
			name: 'Mary Smith',
			review:
				'I loved the cozy atmosphere. It felt like a home away from home.',
		},
		{
			name: 'Alex Johnson',
			review:
				'The views were breathtaking, and the service exceeded all expectations.',
		},
		{
			name: 'Emily Davis',
			review:
				'The cleanliness of the place was impeccable, and the staff was very friendly.',
		},
		{
			name: 'Michael Brown',
			review:
				'A fantastic getaway! The host was extremely accommodating, and the surroundings were serene.',
		},
	],

	//CAROUSEL
	CAROUSEL: [
		{
			id: 1,
			src: '/G1.jpg',
		},
		{
			id: 2,
			src: '/G1.jpg',
		},
		{
			id: 3,
			src: '/G1.jpg',
		},
		{
			id: 4,
			src: '/G1.jpg',
		},
		{
			id: 5,
			src: '/G1.jpg',
		},
	],

	//HOUSE RULES
	HOUSE_RULES: [
		{
			id: 1,
			rule: 'Check-in after 3:00 PM',
		},
		{
			id: 2,
			rule: 'Checkout before 12:00 PM',
		},
		{
			id: 3,
			rule: '6 guests maximum',
		},
	],

	SAFETY_PROPERTY: [
		{
			id: 1,
			rule: 'Carbon monoxide alarm',
		},
		{
			id: 2,
			rule: 'Smoke alarm',
		},
	],

	OTHER_INFO: [
		{
			id: 1,
			info: 'Information 1',
		},
		{
			id: 2,
			info: 'Information 2',
		},
		{
			id: 3,
			info: 'Information 3',
		},
	],

	NEARBY_PLACES: [
		{
			id: 1,
			place: 'Place 1',
			km: '999m away',
		},
		{
			id: 2,
			place: 'Place 2',
			km: '999m away',
		},
		{
			id: 3,
			place: 'Place 3',
			km: '999m away',
		},
	],
};

export default tempValues;
