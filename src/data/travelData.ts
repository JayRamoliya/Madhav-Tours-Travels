import { TourPackage, TravelService, VehicleOption, Testimonial } from '../types';

export const COMPANY_DETAILS = {
  name: 'Madhav Tours & Travels',
  tagline: 'Domestic & International Tours | Hotel, Air, Train & Taxi Assistance',
  phone: '7069212494',
  phoneDisplay: '+91 70692 12494',
  whatsapp: '96878023801',
  whatsappDisplay: '+968 7802 3801',
  email: 'inquiry@madhavtoursandtravels.com',
  workingHours: 'Mon - Sun: 8:00 AM – 10:00 PM (IST)',
  address: 'Premium Travel Concierge Desk, India & Oman Operations',
  brandColors: {
    royalBlue: '#0B5CAD',
    peacockGreen: '#00A86B',
    gold: '#D4A017',
    deepRed: '#C1122F',
    softIvory: '#FAF7F0',
  }
};

export const createWhatsAppLink = (customText?: string) => {
  const defaultText = "Hi Madhav Tours & Travels, I'm interested in a travel package. Please share details and quotation.";
  const text = customText ? customText : defaultText;
  return `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`;
};

export const SERVICES_LIST: TravelService[] = [
  {
    id: 'domestic-tours',
    title: 'Domestic Tours',
    route: '/domestic-tours',
    shortDesc: 'Curated pilgrimages, serene hill retreats, coastal escapes, and royal heritage journeys across India.',
    longDesc: 'From the snow-clad peaks of Kashmir and Himachal to the tranquil backwaters of Kerala and sacred Char Dham Yatra, experience India with personalized itineraries, luxury stays, and private transportation.',
    iconName: 'MapPin',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Tailored daily schedules', 'Vetted handpicked luxury & boutique stays', 'Private chauffeurs & verified guides', 'Special assistance for senior citizens & pilgrimages'],
    features: ['Custom itinerary planning', 'Flexible pacing for families', '24/7 dedicated trip concierge', 'Local authentic dining recommendations']
  },
  {
    id: 'international-tours',
    title: 'International Tours',
    route: '/international-tours',
    shortDesc: 'Seamless overseas vacations to Dubai, Bali, Singapore, Thailand, Maldives, and Europe with custom planning.',
    longDesc: 'Embark on world-class journeys with stress-free planning. We manage your end-to-end luxury itinerary including visa guidance, hotel selection, private transfers, and bespoke experiences.',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Visa application support & consultation', 'Private airport meet & greet transfers', 'Handpicked 4-star & 5-star properties', 'Curated sightseeing without rigid group rush'],
    features: ['Dubai desert & skyline specials', 'Bali private pool villa packages', 'Europe rail & scenic journeys', 'Island hopping in Maldives & Thailand']
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking',
    route: '/hotel-booking',
    shortDesc: 'Handpicked family resorts, luxury heritage palaces, boutique stays, and executive business hotels.',
    longDesc: 'Skip confusing online portals with hidden charges. Our team secures verified hotel accommodations matching your exact preferences, dietary requirements, and budget.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Complimentary breakfast arrangements', 'Early check-in / late check-out advocacy', 'Strict hygiene and safety vetting', 'Direct hotel coordination for special requests'],
    features: ['Luxury 5-star & heritage havelis', 'Family-friendly beach & mountain resorts', 'Pilgrimage dharamshalas & VIP guest houses', 'Corporate business hotels with meeting facilities']
  },
  {
    id: 'air-ticket-booking',
    title: 'Air Ticket Booking',
    route: '/air-ticket-booking',
    shortDesc: 'Competitive fares and flight assistance for all domestic and international airline sectors.',
    longDesc: 'Save time and avoid cancellation penalties. We handle flight search, optimal routing, web check-in, seat reservations, and instant support during unexpected airline reschedules.',
    iconName: 'Plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Optimal flight combinations with zero stress', 'Baggage allowance guidance & extra meal requests', 'Instant WhatsApp notifications on schedule changes', 'Easy cancellations and refund processing'],
    features: ['Direct non-stop flight recommendations', 'Group flight booking discounts', 'Special senior citizen & infant assistance', 'Emergency travel ticketing support']
  },
  {
    id: 'train-ticket-booking',
    title: 'Train Ticket Booking',
    route: '/train-ticket-booking',
    shortDesc: 'Dedicated railway ticketing support, Tatkal coordination, and confirmed berth planning across Indian Railways.',
    longDesc: 'Navigating train reservations can be tedious. Madhav Tours & Travels assists you with train availability, optimal routes, Vande Bharat expresses, and family berth arrangements.',
    iconName: 'Train',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Expert routing for hard-to-book pilgrimage routes', 'Berth preference assistance (Lower berths for elders)', 'PNR status monitoring and boarding alerts', 'Vande Bharat, Rajdhani & Tejas Express planning'],
    features: ['Tatkal & Premium Tatkal advisory', 'Senior passenger lower berth priority tracking', 'Group pilgrimage train bookings', 'Station pickup integration with taxi services']
  },
  {
    id: 'taxi-booking',
    title: 'Taxi Booking',
    route: '/taxi-booking',
    shortDesc: 'Punctual airport transfers, city tours, and round-trip outstation cabs with verified professional chauffeurs.',
    longDesc: 'Travel in comfort with clean, air-conditioned cabs. Whether you need a reliable airport pickup at odd hours or a multi-day outstation road trip, we provide sanitized cars and courteous drivers.',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Zero surge pricing surprises', 'Commercial licensed and verified polite drivers', 'GPS tracked clean vehicles with toll clarity', 'Timely airport & railway station transfers'],
    features: ['Outstation one-way & round-trip rentals', 'Sightseeing full-day packages', 'Airport pick & drop with flight tracking', 'Clean bottled water & charging points provided']
  },
  {
    id: 'personal-taxi',
    title: 'Personal Taxi / Chauffeur',
    route: '/personal-taxi',
    shortDesc: 'Exclusive private chauffeur driven Sedans, premium SUVs, and Tempo Travellers for families and VIPs.',
    longDesc: 'Experience royal Indian hospitality with our dedicated personal taxi service. Enjoy pristine Toyota Innova Crysta, Fortuner, premium Sedans, or luxury Tempo Travellers for uninterrupted comfort.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Uniformed, experienced long-distance chauffeurs', 'Fleet of pristine Innova Crysta, Sedans & Tempo Travellers', 'Flexible stops at scenic viewpoints and quality restaurants', 'Child-friendly and elderly-accessible vehicle arrangements'],
    features: ['Toyota Innova Crysta VIP service', '12/17/26 Seater Luxury Tempo Travellers', 'Luggage carrier & generous boot capacity', 'Custom multi-city tour packages']
  },
  {
    id: 'travel-assistance',
    title: 'Travel Assistance',
    route: '/contact',
    shortDesc: 'Comprehensive travel insurance guidance, customized pilgrim routes, and dedicated 24/7 personal trip helpline.',
    longDesc: 'Every trip is backed by our proactive support team. Whenever you have a question, special requirement, or itinerary adjustment while on the road, our travel experts are just a WhatsApp message away.',
    iconName: 'Headphones',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
    benefits: ['Direct phone & WhatsApp access to your travel manager', 'Local language guidance and emergency help', 'Custom meal planning during religious trips', 'Tailor-made itineraries for special celebrations'],
    features: ['24/7 trip coordinator standby', 'Pilgrimage VIP darshan facilitation advice', 'Travel safety and medical checklist guidance', 'Hassle-free custom amendments']
  }
];

export const POPULAR_DESTINATIONS: TourPackage[] = [
  {
    id: 'char-dham',
    title: 'Sacred Char Dham Yatra',
    category: 'pilgrimage',
    destination: 'Char Dham, Uttarakhand',
    duration: '10 Nights / 11 Days',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Yamunotri, Gangotri, Kedarnath & Badrinath with VIP assistance',
    highlights: ['Helicopter & doli coordination', 'Comfortable deluxe stays along holy route', 'Experienced hill chauffeurs', 'Sattvik food arrangements'],
    inclusions: ['Private Vehicle', 'Deluxe Stays', 'Breakfast & Dinner', 'VIP Darshan Guidance'],
    bestTime: 'May to October',
    badge: 'Spiritual Sacred Tour'
  },
  {
    id: 'kashmir',
    title: 'Kashmir - Paradise on Earth',
    category: 'domestic',
    destination: 'Srinagar, Gulmarg, Pahalgam & Sonmarg',
    duration: '5 Nights / 6 Days',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Deluxe Dal Lake Houseboat, Gondola rides & Pine Valley walks',
    highlights: ['Private luxury shikara ride', 'Stay in carved cedar wood houseboats', 'Gondola Cable Car in Gulmarg', 'Pahalgam Betaab Valley excursion'],
    inclusions: ['Luxury Houseboat Stay', 'Private Chauffeur Vehicle', 'Daily Meals', 'Sightseeing'],
    bestTime: 'Round the Year (Snow & Greenery)',
    badge: 'Bestseller Domestic'
  },
  {
    id: 'kerala',
    title: 'Kerala Backwaters & Munnar Hills',
    category: 'domestic',
    destination: 'Kochi, Munnar, Thekkady, Alleppey',
    duration: '6 Nights / 7 Days',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Misty tea plantations, Ayurvedic rejuvenation & backwater cruises',
    highlights: ['Private traditional premium houseboat with chef', 'Sprawling tea garden visits', 'Spice plantation aroma tour', 'Kathakali cultural performance'],
    inclusions: ['Private Houseboat', 'Resorts with Views', 'Dedicated AC Cab', 'All Transfers'],
    bestTime: 'September to March',
    badge: 'Nature & Relax'
  },
  {
    id: 'rajasthan',
    title: 'Royal Rajasthan Heritage Circuit',
    category: 'domestic',
    destination: 'Jaipur, Jodhpur, Udaipur & Jaisalmer',
    duration: '7 Nights / 8 Days',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Palaces, Thar desert dunes, golden forts & royal hospitality',
    highlights: ['Stay in authentic heritage havelis', 'Sunset camel safari & folk music in Sam dunes', 'Boat cruise on Lake Pichola', 'Amber Fort elephant/jeep access'],
    inclusions: ['Heritage Stays', 'Private Luxury Sedan/SUV', 'Desert Camp Stay', 'Royal Breakfasts'],
    bestTime: 'October to March',
    badge: 'Royal Heritage'
  },
  {
    id: 'goa',
    title: 'Luxury Goa Beach & Heritage Escape',
    category: 'domestic',
    destination: 'North & South Goa',
    duration: '4 Nights / 5 Days',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Private beachfront villas, Portuguese quarters & luxury catamarans',
    highlights: ['5-Star beach resort stays', 'Private sunset yacht charter', 'Fontainhas Latin quarter heritage walk', 'Water sport activities coordination'],
    inclusions: ['5-Star Beach Resort', 'Airport Transfers', 'Complimentary Breakfast', 'Private Island Cruise'],
    bestTime: 'October to April',
    badge: 'Beach Getaway'
  },
  {
    id: 'dubai',
    title: 'Dubai & Abu Dhabi Luxury Extravaganza',
    category: 'international',
    destination: 'Dubai & Abu Dhabi, UAE',
    duration: '5 Nights / 6 Days',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Burj Khalifa VIP lounge, luxury desert safari & Marina yacht dinner',
    highlights: ['Burj Khalifa 124th & 148th floor access', 'VIP desert camp with barbecue & stargazing', 'Sheikh Zayed Grand Mosque private tour', 'Dhow luxury glass cruise'],
    inclusions: ['4/5-Star City Hotel', 'Private Airport Transfers', 'Tourist Visa Support', 'Desert Safari & Marina Cruise'],
    bestTime: 'November to April',
    badge: 'Global Luxury'
  },
  {
    id: 'bali',
    title: 'Enchanting Bali Island & Private Villas',
    category: 'international',
    destination: 'Ubud, Seminyak & Nusa Penida, Indonesia',
    duration: '6 Nights / 7 Days',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Private infinity pool villas, lush rice terraces & sacred temples',
    highlights: ['Private pool villa in Ubud & beach resort in Seminyak', 'Nusa Penida Kelingking beach private speedboat tour', 'Balinese spa & flower bath experience', 'Tanah Lot sunset temple view'],
    inclusions: ['Private Pool Villa', 'Dedicated Chauffeur & Car', 'Nusa Penida Tour', 'Daily Breakfast'],
    bestTime: 'April to October',
    badge: 'Romantic & Scenic'
  },
  {
    id: 'singapore',
    title: 'Futuristic Singapore & Sentosa Wonders',
    category: 'international',
    destination: 'Singapore City & Sentosa Island',
    duration: '4 Nights / 5 Days',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Marina Bay Sands, Gardens by the Bay & Universal Studios',
    highlights: ['Gardens by the Bay Cloud Forest & Flower Dome', 'Universal Studios VIP passes', 'Night Safari wildlife tram', 'Cable car to Sentosa Island'],
    inclusions: ['4-Star City Hotel', 'Sightseeing Passes', 'Airport Meet & Greet', 'Daily Breakfast'],
    bestTime: 'Year-Round',
    badge: 'Family Favorite'
  }
];

export const INTERNATIONAL_PACKAGES: TourPackage[] = [
  ...POPULAR_DESTINATIONS.filter(p => p.category === 'international'),
  {
    id: 'thailand',
    title: 'Thailand Island Bliss & Bangkok Charm',
    category: 'international',
    destination: 'Phuket, Krabi & Bangkok',
    duration: '6 Nights / 7 Days',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Phi Phi island speedboat, luxury beach resorts & shopping tours',
    highlights: ['Private speedboat to Maya Bay & Phi Phi', 'Four Island tour in Krabi', 'Chao Phraya luxury dinner cruise in Bangkok', 'Safari World with Marine Park'],
    inclusions: ['Deluxe Resorts', 'Domestic Thailand Flights Assistance', 'Private Transfers', 'Island Excursions'],
    bestTime: 'November to April',
    badge: 'Tropical Paradise'
  },
  {
    id: 'malaysia',
    title: 'Splendors of Malaysia & Langkawi',
    category: 'international',
    destination: 'Kuala Lumpur, Genting & Langkawi',
    duration: '5 Nights / 6 Days',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Petronas Twin Towers, Genting SkyWorlds cable car & beach resorts',
    highlights: ['Batu Caves Murugan temple visit', 'Genting Highlands cable car ride', 'Langkawi island mangrove tour', 'Twin Towers observation deck'],
    inclusions: ['City & Island Hotels', 'All Private Transfers', 'Cable Car Tickets', 'Daily Breakfast'],
    bestTime: 'Year-Round',
    badge: 'Family & Shopping'
  },
  {
    id: 'maldives',
    title: 'Maldives Overwater Luxury Bungalow Retreat',
    category: 'international',
    destination: 'Male Atoll Private Islands, Maldives',
    duration: '4 Nights / 5 Days',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Turquoise lagoons, private overwater villa & coral reef snorkeling',
    highlights: ['Overwater villa with direct lagoon access', 'Speedboat or Seaplane transfers included', 'Sunset dolphin cruise', 'All-inclusive gourmet dining options'],
    inclusions: ['Water Villa Stay', 'Speedboat/Seaplane Transfers', 'Full Board Meals', 'Snorkeling Gear'],
    bestTime: 'November to April',
    badge: 'Pure Luxury'
  },
  {
    id: 'europe',
    title: 'Jewels of Central Europe - Swiss & France',
    category: 'international',
    destination: 'Zurich, Lucerne, Interlaken & Paris',
    duration: '8 Nights / 9 Days',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Jungfraujoch Top of Europe, Seine river cruise & Eiffel Tower',
    highlights: ['Jungfrau cogwheel train experience', 'Mount Titlis revolving cable car & glacier cliff walk', 'Paris Eiffel Tower 2nd level entry', 'Lake Lucerne panoramic boat cruise'],
    inclusions: ['Swiss Rail Pass / Chauffeur', 'Handpicked 4-Star Hotels', 'Sightseeing Excursions', 'Visa File Preparation'],
    bestTime: 'May to October',
    badge: 'Grand European'
  }
];

export const DOMESTIC_PACKAGES: TourPackage[] = [
  ...POPULAR_DESTINATIONS.filter(p => p.category === 'domestic' || p.category === 'pilgrimage'),
  {
    id: 'himachal',
    title: 'Himachal Snow & Valley Wonders',
    category: 'domestic',
    destination: 'Shimla, Kullu, Manali & Solang Valley',
    duration: '5 Nights / 6 Days',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Pine forests, Rohtang pass snow point & mountain luxury resorts',
    highlights: ['Atal Tunnel & Solang Valley adventure tour', 'Shimla Mall Road & Jakhoo temple visit', 'River rafting in Kullu valley', 'Manali old village walk'],
    inclusions: ['Valley View Resorts', 'Dedicated AC Cab with Hill Driver', 'Daily Breakfast & Dinner', 'Sightseeing'],
    bestTime: 'March to June & Dec to Feb (Snow)',
    badge: 'Mountain Serenity'
  }
];

export const VEHICLE_FLEET: VehicleOption[] = [
  {
    id: 'sedan',
    name: 'Executive Sedan',
    type: 'Sedan',
    seating: '4 Passengers + 1 Driver',
    luggage: '2 Large Bags + 2 Small Bags',
    features: ['Plush AC Climate Control', 'Push-back Leather Seats', 'Mobile Phone Fast Chargers', 'Mineral Water & Wet Tissues'],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    idealFor: 'Couples, corporate professionals, and small families for airport runs or city tours.'
  },
  {
    id: 'suv-innova',
    name: 'Toyota Innova Crysta / Hycross',
    type: 'SUV',
    seating: '6 - 7 Passengers + 1 Chauffeur',
    luggage: '4 Large Bags + Soft Luggage',
    features: ['Captain Recliner Seats', 'Dual Zone Climate Control', 'Roof Carrier Available', 'Supreme Hill & Highway Suspension'],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    idealFor: 'Family vacations, outstation pilgrimage journeys, and comfortable long road trips.'
  },
  {
    id: 'tempo-traveller',
    name: 'Luxury Maharaja Tempo Traveller',
    type: 'Tempo Traveller',
    seating: '12 / 17 / 26 Reclining Seats',
    luggage: 'Spacious Dedicated Luggage Boot',
    features: ['2x1 Maharaja Recliners', 'Individual AC Vents & Reading Lights', 'Music & LED Entertainment Screen', 'Ample Legroom & High Roof Walkway'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    idealFor: 'Extended family reunions, group pilgrimages, wedding guest transfers, and corporate groups.'
  },
  {
    id: 'luxury-chauffeur',
    name: 'Fortuner / Premium VIP Chauffeur',
    type: 'Luxury Chauffeur',
    seating: '4 - 6 Passengers',
    luggage: '3 Large Bags',
    features: ['Elite Chauffeur in Formal Uniform', 'Complimentary Newspaper & Refreshments', 'Top Tier Acoustic Comfort', 'Strict Punctuality Guarantee'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    idealFor: 'VIP delegates, wedding groom entry, high-profile travelers, and luxury experiences.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh & Meena Parekh',
    location: 'Ahmedabad, Gujarat',
    tour: 'Char Dham Yatra Family Tour',
    comment: 'Planning Char Dham with elderly parents was worrying us, but Madhav Tours & Travels handled every detail with immense devotion. From comfortable stays close to temples to pony/helicopter coordination and sattvik food, everything was flawless.',
    verified: true
  },
  {
    id: '2',
    name: 'Sunil Mehta & Family',
    location: 'Muscat, Oman',
    tour: 'Kashmir Luxury Houseboat & Gulmarg Package',
    comment: 'We coordinated our entire trip from Muscat over WhatsApp. The transparent advice, prompt responses, and luxurious private Innova cab waiting for us at Srinagar airport made our holiday completely stress-free. Truly royal treatment!',
    verified: true
  },
  {
    id: '3',
    name: 'Dr. Anita Deshmukh',
    location: 'Mumbai, Maharashtra',
    tour: 'Dubai Family & Desert Safari Vacation',
    comment: 'Every transfer was on time, the hotel in Downtown Dubai was stunning, and our desert safari had VIP camp seating. No pushy sales or hidden charges—just honest, top-tier service. Highly recommended!',
    verified: true
  },
  {
    id: '4',
    name: 'Ketan Patel',
    location: 'Surat, Gujarat',
    tour: 'Kerala Munnar & Alleppey Houseboat',
    comment: 'The private houseboat experience in Alleppey was the highlight of our anniversary trip. The driver was very respectful, and the itinerary was perfectly paced without exhausting us. Madhav Tours is our lifetime travel partner now.',
    verified: true
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Trusted Service',
    description: 'Years of dedicated experience curating unforgettable family, couple, and spiritual journeys.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Quick Support',
    description: 'Direct WhatsApp and direct phone access to genuine human travel specialists—no robotic chatbots.',
    icon: 'Zap'
  },
  {
    title: 'Affordable Packages',
    description: 'Transparent pricing with zero hidden markups. We customize quotations precisely to your budget.',
    icon: 'BadgePercent'
  },
  {
    title: 'Customized Tours',
    description: 'Every traveler is unique. We adjust hotel tiers, vehicles, and pace to match your preferences.',
    icon: 'Sliders'
  },
  {
    title: 'Comfortable Travel',
    description: 'Pristine, sanitized vehicles with experienced chauffeurs who prioritize your safety and comfort.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Easy Inquiry Process',
    description: 'No complicated registration or payment forms. Send a quick inquiry and receive a quote in minutes.',
    icon: 'PhoneCall'
  }
];
