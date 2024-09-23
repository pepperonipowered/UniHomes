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
			description: 'Discover the calm and tranquility of city living in style.',
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
};

export default tempValues;
