import {
  TourPackage,
  TravelService,
  VehicleOption,
  Testimonial,
} from "../types";

export const COMPANY_DETAILS = {
  name: "Madhav Tours & Travels",
  tagline:
    "Domestic & International Tours | Hotel, Air, Train & Taxi Assistance",
  phone: "8238927009",
  phoneDisplay: "+91 82389 27009",
  whatsapp: "918238927009",
  whatsappDisplay: "+91 82389 27009",
  email: "madhavtourstravels1@gmail.com",
  workingHours: "Mon - Sun: 8:00 AM – 10:00 PM (IST)",
  address: "Premium Travel Concierge Desk, India & Oman Operations",
  brandColors: {
    royalBlue: "#0B5CAD",
    peacockGreen: "#00A86B",
    gold: "#D4A017",
    deepRed: "#C1122F",
    softIvory: "#FAF7F0",
  },
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/madhav.tourstravels/",
    youtube: "https://www.youtube.com/channel/UCCcioLZGqIVISZ5_Xxawa2g",
  },
};

export const createWhatsAppLink = (customText?: string) => {
  const defaultText =
    "Hi Madhav Tours & Travels, I'm interested in a travel package. Please share details and quotation.";
  const text = customText ? customText : defaultText;
  return `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`;
};

export const SERVICES_LIST: TravelService[] = [
  // {
  //   id: 'domestic-tours',
  //   title: 'Domestic Tours',
  //   route: '/domestic-tours',
  //   shortDesc: 'Curated pilgrimages, serene hill retreats, coastal escapes, and royal heritage journeys across India.',
  //   longDesc: 'From the snow-clad peaks of Kashmir and Himachal to the tranquil backwaters of Kerala and sacred Char Dham Yatra, experience India with personalized itineraries, luxury stays, and private transportation.',
  //   iconName: 'MapPin',
  //   image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80',
  //   benefits: ['Tailored daily schedules', 'Vetted handpicked luxury & boutique stays', 'Private chauffeurs & verified guides', 'Special assistance for senior citizens & pilgrimages'],
  //   features: ['Custom itinerary planning', 'Flexible pacing for families', '24/7 dedicated trip concierge', 'Local authentic dining recommendations']
  // },
  // {
  //   id: 'international-tours',
  //   title: 'International Tours',
  //   route: '/international-tours',
  //   shortDesc: 'Seamless overseas vacations to Dubai, Bali, Singapore, Thailand, Maldives, and Europe with custom planning.',
  //   longDesc: 'Embark on world-class journeys with stress-free planning. We manage your end-to-end luxury itinerary including visa guidance, hotel selection, private transfers, and bespoke experiences.',
  //   iconName: 'Globe',
  //   image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
  //   benefits: ['Visa application support & consultation', 'Private airport meet & greet transfers', 'Handpicked 4-star & 5-star properties', 'Curated sightseeing without rigid group rush'],
  //   features: ['Dubai desert & skyline specials', 'Bali private pool villa packages', 'Europe rail & scenic journeys', 'Island hopping in Maldives & Thailand']
  // },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    route: "/hotel-booking",
    shortDesc:
      "Handpicked family resorts, luxury heritage palaces, boutique stays, and executive business hotels.",
    longDesc:
      "Skip confusing online portals with hidden charges. Our team secures verified hotel accommodations matching your exact preferences, dietary requirements, and budget.",
    iconName: "Building2",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Complimentary breakfast arrangements",
      "Early check-in / late check-out advocacy",
      "Strict hygiene and safety vetting",
      "Direct hotel coordination for special requests",
    ],
    features: [
      "Luxury 5-star & heritage havelis",
      "Family-friendly beach & mountain resorts",
      "Pilgrimage dharamshalas & VIP guest houses",
      "Corporate business hotels with meeting facilities",
    ],
  },
  {
    id: "homestay-booking",
    title: "Homestay Booking",
    route: "/homestay-booking",
    shortDesc:
      "Authentic homestays, mountain cottages, village retreats, and family-hosted accommodations across India.",
    longDesc:
      "Experience destinations like a local with carefully selected homestays. Enjoy warm hospitality, home-cooked meals, cultural experiences, and peaceful stays away from crowded commercial hotels.",
    iconName: "Home",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Verified and trusted host families",
      "Authentic local food experiences",
      "Budget-friendly and family-friendly options",
      "Peaceful stays in scenic locations",
    ],
    features: [
      "Hill station cottages & farm stays",
      "Village and cultural experience stays",
      "Beachside homestays & eco-lodges",
      "Long-stay and workation friendly options",
    ],
  },
  {
    id: "air-ticket-booking",
    title: "Air Ticket Booking",
    route: "/air-ticket-booking",
    shortDesc:
      "Competitive fares and flight assistance for all domestic and international airline sectors.",
    longDesc:
      "Save time and avoid cancellation penalties. We handle flight search, optimal routing, web check-in, seat reservations, and instant support during unexpected airline reschedules.",
    iconName: "Plane",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Optimal flight combinations with zero stress",
      "Baggage allowance guidance & extra meal requests",
      "Instant WhatsApp notifications on schedule changes",
      "Easy cancellations and refund processing",
    ],
    features: [
      "Direct non-stop flight recommendations",
      "Group flight booking discounts",
      "Special senior citizen & infant assistance",
      "Emergency travel ticketing support",
    ],
  },
  {
    id: "train-ticket-booking",
    title: "Train Ticket Booking",
    route: "/train-ticket-booking",
    shortDesc:
      "Dedicated railway ticketing support, Tatkal coordination, and confirmed berth planning across Indian Railways.",
    longDesc:
      "Navigating train reservations can be tedious. Madhav Tours & Travels assists you with train availability, optimal routes, Vande Bharat expresses, and family berth arrangements.",
    iconName: "Train",
    image:
      "https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Expert routing for hard-to-book pilgrimage routes",
      "Berth preference assistance (Lower berths for elders)",
      "PNR status monitoring and boarding alerts",
      "Vande Bharat, Rajdhani & Tejas Express planning",
    ],
    features: [
      "Tatkal & Premium Tatkal advisory",
      "Senior passenger lower berth priority tracking",
      "Group pilgrimage train bookings",
      "Station pickup integration with taxi services",
    ],
  },
  {
    id: "personal-taxi",
    title: "Personal Taxi / Chauffeur",
    route: "/personal-taxi",
    shortDesc:
      "Exclusive private chauffeur driven Sedans, premium SUVs, and Tempo Travellers for families and VIPs.",
    longDesc:
      "Experience royal Indian hospitality with our dedicated personal taxi service. Enjoy pristine Toyota Innova Crysta, Fortuner, premium Sedans, or luxury Tempo Travellers for uninterrupted comfort.",
    iconName: "ShieldCheck",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Uniformed, experienced long-distance chauffeurs",
      "Fleet of pristine Innova Crysta, Sedans & Tempo Travellers",
      "Flexible stops at scenic viewpoints and quality restaurants",
      "Child-friendly and elderly-accessible vehicle arrangements",
    ],
    features: [
      "Toyota Innova Crysta VIP service",
      "12/17/26 Seater Luxury Tempo Travellers",
      "Luggage carrier & generous boot capacity",
      "Custom multi-city tour packages",
    ],
  },
];

export const POPULAR_DESTINATIONS: TourPackage[] = [
  {
    id: "char-dham",
    title: "Sacred Char Dham Yatra",
    category: "pilgrimage",
    startingPrice: 64999,
    destination: "Char Dham, Uttarakhand",
    duration: "10 Nights / 11 Days",
    image: "/img/Char Dham Yatra.webp",

    tourType: "Family & Senior Citizen",
    month: "May",
    departureCity: "Ahmedabad",
    theme: "Pilgrimage",
    season: "Summer",
    days: 11,

    tagline:
      "Complete Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath & Badrinath with comfortable stays and darshan assistance",

    highlights: [
      "Visit all four sacred dhams",
      "Kedarnath trek assistance & guidance",
      "Comfortable deluxe hotels throughout the journey",
      "Experienced hill drivers and safe transportation",
      "Pure vegetarian meals",
      "Darshan and pilgrimage support",
    ],

    inclusions: [
      "AC Transportation",
      "Deluxe Hotel Stay",
      "Breakfast & Dinner",
      "Driver Allowance, Toll & Parking",
      "All Sightseeing as per Itinerary",
      "Darshan Assistance",
    ],

    bestTime: "May to June & September to October",
    badge: "Most Popular Pilgrimage Tour",
  },
  {
    id: "kashmir",
    title: "Kashmir - Paradise on Earth",
    category: "domestic",
    destination: "Srinagar, Gulmarg, Pahalgam & Sonmarg",
    duration: "5 Nights / 6 Days",
    image: "/img/Kashmir.webp",
    startingPrice: 49999,

    tourType: "Family & Couples",
    month: "April",
    departureCity: "Ahmedabad",
    theme: "Nature",
    season: "Summer",
    days: 6,

    tagline:
      "Experience the beauty of Dal Lake, Gulmarg Gondola, Pahalgam valleys and breathtaking Himalayan landscapes",

    highlights: [
      "Shikara Ride on Dal Lake",
      "Traditional Houseboat Stay in Srinagar",
      "Gulmarg Gondola Cable Car Experience",
      "Pahalgam Betaab & Aru Valley Visit",
      "Sonmarg Day Excursion",
      "Mughal Gardens & Local Sightseeing",
    ],

    inclusions: [
      "Houseboat & Hotel Accommodation",
      "Private Vehicle for Transfers & Sightseeing",
      "Breakfast & Dinner",
      "Airport Pickup & Drop",
      "All Local Sightseeing",
    ],

    bestTime: "March to October (Greenery) & December to February (Snow)",
    badge: "Most Popular Kashmir Tour",
  },
  {
    id: "kerala",
    title: "Kerala Backwaters & Munnar Hills",
    category: "domestic",
    destination: "Kochi, Munnar, Thekkady & Alleppey",
    duration: "6 Nights / 7 Days",
    image: "/img/Kerala.webp",
    startingPrice: 44999,

    tourType: "Couple & Family",
    month: "October",
    departureCity: "Mumbai",
    theme: "Nature",
    season: "Winter",
    days: 7,

    tagline:
      "Discover misty tea gardens, wildlife, spice plantations and serene backwater cruises",

    highlights: [
      "Overnight Stay in Traditional Alleppey Houseboat",
      "Scenic Tea Gardens of Munnar",
      "Thekkady Spice Plantation Tour",
      "Periyar Wildlife & Nature Experience",
      "Kathakali Cultural Show",
      "Beautiful Backwater Cruise Experience",
    ],

    inclusions: [
      "Hotel & Houseboat Accommodation",
      "Private AC Vehicle",
      "Breakfast & Dinner",
      "Airport Transfers",
      "Sightseeing as per Itinerary",
    ],

    bestTime: "September to March",
    badge: "Best Kerala Experience",
  },
  {
    id: "rajasthan",
    title: "Royal Rajasthan Heritage Circuit",
    category: "domestic",
    destination: "Jaipur, Jodhpur, Jaisalmer & Udaipur",
    duration: "7 Nights / 8 Days",
    image: "/img/Rajasthan.webp",
    startingPrice: 44999,

    tourType: "Family & Couples",
    month: "November",
    departureCity: "Ahmedabad",
    theme: "Heritage",
    season: "Winter",
    days: 8,

    tagline:
      "Explore majestic forts, royal palaces, desert landscapes and the rich cultural heritage of Rajasthan",

    highlights: [
      "Amber Fort & City Palace Tour in Jaipur",
      "Mehrangarh Fort Visit in Jodhpur",
      "Sam Sand Dunes Camel Safari & Cultural Show",
      "Luxury Desert Camp Experience in Jaisalmer",
      "Lake Pichola Boat Ride in Udaipur",
      "Traditional Rajasthani Folk Performances",
    ],

    inclusions: [
      "Hotel & Heritage Stay Accommodation",
      "Desert Camp Stay",
      "Private AC Vehicle",
      "Breakfast & Dinner",
      "All Sightseeing as per Itinerary",
      "Driver Allowance, Toll & Parking",
    ],

    bestTime: "October to March",
    badge: "Most Popular Heritage Tour",
  },
  {
    id: "goa",
    title: "Goa Beach & Heritage Escape",
    category: "domestic",
    destination: "North & South Goa",
    duration: "4 Nights / 5 Days",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    startingPrice: 29999,

    tourType: "Couple & Friends",
    month: "December",
    departureCity: "Mumbai",
    theme: "Beach",
    season: "Winter",
    days: 5,

    tagline:
      "Relax on Goa's beautiful beaches, explore Portuguese heritage and enjoy vibrant nightlife",

    highlights: [
      "North Goa Beach Sightseeing",
      "South Goa Scenic Tour",
      "Mandovi River Sunset Cruise",
      "Fontainhas Heritage Walk",
      "Beach Activities & Water Sports",
      "Local Markets & Cafés",
    ],

    inclusions: [
      "Hotel Accommodation",
      "Airport Transfers",
      "Breakfast",
      "Private AC Vehicle for Sightseeing",
      "North & South Goa Tour",
    ],

    bestTime: "October to April",
    badge: "Most Popular Beach Holiday",
  },
  {
    id: "dubai",
    title: "Dubai & Abu Dhabi Highlights",
    category: "international",
    destination: "Dubai & Abu Dhabi, UAE",
    duration: "5 Nights / 6 Days",
    image: "/img/Dubai.webp",
    startingPrice: 69999,

    tourType: "Family & Couples",
    month: "December",
    departureCity: "Mumbai",
    theme: "Luxury",
    season: "Winter",
    days: 6,

    tagline:
      "Experience iconic landmarks, desert adventures, luxury shopping and world-class attractions in the UAE",

    highlights: [
      "Burj Khalifa Observation Deck",
      "Dubai Desert Safari with BBQ Dinner",
      "Dubai Marina Dhow Cruise",
      "Dubai Mall & Fountain Show",
      "Sheikh Zayed Grand Mosque Visit",
      "Abu Dhabi City Tour",
    ],

    inclusions: [
      "4-Star Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "UAE Tourist Visa",
      "Desert Safari",
      "Marina Cruise",
      "Dubai & Abu Dhabi Sightseeing",
    ],

    bestTime: "November to April",
    badge: "Best Selling International Tour",
  },
  {
    id: "bali",
    title: "Enchanting Bali Island Escape",
    category: "international",
    destination: "Ubud, Seminyak & Nusa Penida, Indonesia",
    duration: "6 Nights / 7 Days",
    image: "/img/Bali Island.webp",
    startingPrice: 64999,

    tourType: "Couple & Honeymoon",
    month: "June",
    departureCity: "Mumbai",
    theme: "Honeymoon",
    season: "Summer",
    days: 7,

    tagline:
      "Experience private villas, tropical beaches, ancient temples and breathtaking island landscapes",

    highlights: [
      "Private Pool Villa Stay in Ubud",
      "Nusa Penida Island Day Tour",
      "Kelingking Beach Viewpoint Visit",
      "Tanah Lot Sunset Temple Experience",
      "Tegalalang Rice Terrace Tour",
      "Traditional Balinese Spa Experience",
    ],

    inclusions: [
      "Private Pool Villa Accommodation",
      "Daily Breakfast",
      "Private Airport Transfers",
      "Private Vehicle for Sightseeing",
      "Nusa Penida Tour",
      "English Speaking Driver Guide",
    ],

    bestTime: "April to October",
    badge: "Most Popular Honeymoon Destination",
  },
  {
    id: "singapore",
    title: "Futuristic Singapore & Sentosa Wonders",
    category: "international",
    destination: "Singapore City & Sentosa Island",
    duration: "4 Nights / 5 Days",
    image: "/img/Singapore.webp",
    startingPrice: 64999,

    tourType: "Family",
    month: "December",
    departureCity: "Mumbai",
    theme: "Family",
    season: "Winter",
    days: 5,

    tagline: "Marina Bay Sands, Gardens by the Bay & Universal Studios",

    highlights: [
      "Gardens by the Bay Cloud Forest & Flower Dome",
      "Universal Studios VIP passes",
      "Night Safari wildlife tram",
      "Cable car to Sentosa Island",
    ],

    inclusions: [
      "4-Star City Hotel",
      "Sightseeing Passes",
      "Airport Meet & Greet",
      "Daily Breakfast",
    ],

    bestTime: "Year-Round",
    badge: "Family Favorite",
  },
];

export const INTERNATIONAL_PACKAGES: TourPackage[] = [
  ...POPULAR_DESTINATIONS.filter((p) => p.category === "international"),
  {
    id: "thailand",
    title: "Thailand Island Bliss & Bangkok Charm",
    category: "international",
    destination: "Phuket, Krabi & Bangkok",
    duration: "6 Nights / 7 Days",
    image: "/img/Thailand.webp",
    tagline: "Phi Phi island speedboat, luxury beach resorts & shopping tours",
    startingPrice: 54999,
    highlights: [
      "Private speedboat to Maya Bay & Phi Phi",
      "Four Island tour in Krabi",
      "Chao Phraya luxury dinner cruise in Bangkok",
      "Safari World with Marine Park",
    ],
    inclusions: [
      "Deluxe Resorts",
      "Domestic Thailand Flights Assistance",
      "Private Transfers",
      "Island Excursions",
    ],
    bestTime: "November to April",
    badge: "Tropical Paradise",
    tourType: "Family",
    month: "November",
    departureCity: "Mumbai",
    theme: "Beach",
    season: "Winter",
    days: 7,
  },
  {
    id: "malaysia",
    title: "Splendors of Malaysia & Langkawi",
    category: "international",
    destination: "Kuala Lumpur, Genting & Langkawi",
    duration: "5 Nights / 6 Days",
    image: "/img/Malaysia.webp",
    tagline:
      "Petronas Twin Towers, Genting SkyWorlds cable car & beach resorts",
    startingPrice: 64999,
    tourType: "Family",
    month: "December",
    departureCity: "Mumbai",
    theme: "Nature",
    season: "Winter",
    days: 6,
    highlights: [
      "Batu Caves Murugan temple visit",
      "Genting Highlands cable car ride",
      "Langkawi island mangrove tour",
      "Twin Towers observation deck",
    ],
    inclusions: [
      "City & Island Hotels",
      "All Private Transfers",
      "Cable Car Tickets",
      "Daily Breakfast",
    ],
    bestTime: "Year-Round",
    badge: "Family & Shopping",
  },
  {
    id: "maldives",
    title: "Maldives Overwater Luxury Bungalow Retreat",
    category: "international",
    destination: "Male Atoll Private Islands, Maldives",
    duration: "4 Nights / 5 Days",
    image: "/img/Maldives.webp",
    startingPrice: 74999,

    tourType: "Couple",
    month: "January",
    departureCity: "Mumbai",
    theme: "Honeymoon",
    season: "Winter",
    days: 5,

    tagline:
      "Turquoise lagoons, private overwater villa & coral reef snorkeling",

    highlights: [
      "Overwater villa with direct lagoon access",
      "Speedboat or Seaplane transfers included",
      "Sunset dolphin cruise",
      "All-inclusive gourmet dining options",
    ],

    inclusions: [
      "Water Villa Stay",
      "Speedboat/Seaplane Transfers",
      "Full Board Meals",
      "Snorkeling Gear",
    ],

    bestTime: "November to April",
    badge: "Pure Luxury",
  },
  {
    id: "europe",
    title: "Jewels of Central Europe - Swiss & France",
    category: "international",
    destination: "Zurich, Lucerne, Interlaken & Paris",
    startingPrice: 64999,
    tourType: "Group",
    month: "May",
    departureCity: "Ahmedabad",
    theme: "Luxury",
    season: "Summer",
    days: 9,
    duration: "8 Nights / 9 Days",
    image: "/img/France.webp",
    tagline: "Jungfraujoch Top of Europe, Seine river cruise & Eiffel Tower",
    highlights: [
      "Jungfrau cogwheel train experience",
      "Mount Titlis revolving cable car & glacier cliff walk",
      "Paris Eiffel Tower 2nd level entry",
      "Lake Lucerne panoramic boat cruise",
    ],
    inclusions: [
      "Swiss Rail Pass / Chauffeur",
      "Handpicked 4-Star Hotels",
      "Sightseeing Excursions",
      "Visa File Preparation",
    ],
    bestTime: "May to October",
    badge: "Grand European",
  },
];

export const DOMESTIC_PACKAGES: TourPackage[] = [
  ...POPULAR_DESTINATIONS.filter(
    (p) => p.category === "domestic" || p.category === "pilgrimage",
  ),
  {
    id: "himachal",
    title: "Himachal Snow & Valley Wonders",
    category: "domestic",
    destination: "Shimla, Kullu, Manali & Solang Valley",
    duration: "5 Nights / 6 Days",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    startingPrice: 64999,

    tourType: "Family",
    month: "December",
    departureCity: "Delhi",
    theme: "Adventure",
    season: "Winter",
    days: 6,

    tagline: "Pine forests, Rohtang pass snow point & mountain luxury resorts",

    highlights: [
      "Atal Tunnel & Solang Valley adventure tour",
      "Shimla Mall Road & Jakhoo temple visit",
      "River rafting in Kullu valley",
      "Manali old village walk",
    ],

    inclusions: [
      "Valley View Resorts",
      "Dedicated AC Cab with Hill Driver",
      "Daily Breakfast & Dinner",
      "Sightseeing",
    ],

    bestTime: "March to June & Dec to Feb (Snow)",
    badge: "Mountain Serenity",
  },
];

export const VEHICLE_FLEET: VehicleOption[] = [
  {
    id: "sedan",
    name: "Executive Sedan",
    type: "Sedan",
    seating: "4 Passengers + 1 Driver",
    luggage: "2 Large Bags + 2 Small Bags",
    features: [
      "Plush AC Climate Control",
      "Push-back Leather Seats",
      "Mobile Phone Fast Chargers",
      "Mineral Water & Wet Tissues",
    ],
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    idealFor:
      "Couples, corporate professionals, and small families for airport runs or city tours.",
  },
  {
    id: "suv-innova",
    name: "Toyota Innova Crysta / Hycross",
    type: "SUV",
    seating: "6 - 7 Passengers + 1 Chauffeur",
    luggage: "4 Large Bags + Soft Luggage",
    features: [
      "Captain Recliner Seats",
      "Dual Zone Climate Control",
      "Roof Carrier Available",
      "Supreme Hill & Highway Suspension",
    ],
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    idealFor:
      "Family vacations, outstation pilgrimage journeys, and comfortable long road trips.",
  },
  {
    id: "tempo-traveller",
    name: "Luxury Maharaja Tempo Traveller",
    type: "Tempo Traveller",
    seating: "12 / 17 / 26 Reclining Seats",
    luggage: "Spacious Dedicated Luggage Boot",
    features: [
      "2x1 Maharaja Recliners",
      "Individual AC Vents & Reading Lights",
      "Music & LED Entertainment Screen",
      "Ample Legroom & High Roof Walkway",
    ],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    idealFor:
      "Extended family reunions, group pilgrimages, wedding guest transfers, and corporate groups.",
  },
  {
    id: "luxury-chauffeur",
    name: "Fortuner / Premium VIP Chauffeur",
    type: "Luxury Chauffeur",
    seating: "4 - 6 Passengers",
    luggage: "3 Large Bags",
    features: [
      "Elite Chauffeur in Formal Uniform",
      "Complimentary Newspaper & Refreshments",
      "Top Tier Acoustic Comfort",
      "Strict Punctuality Guarantee",
    ],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    idealFor:
      "VIP delegates, wedding groom entry, high-profile travelers, and luxury experiences.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh & Meena Parekh",
    location: "Ahmedabad, Gujarat",
    tour: "Char Dham Yatra Family Tour",
    comment:
      "Planning Char Dham with elderly parents was worrying us, but Madhav Tours & Travels handled every detail with immense devotion. From comfortable stays close to temples to pony/helicopter coordination and sattvik food, everything was flawless.",
    verified: true,
  },
  {
    id: "2",
    name: "Sunil Mehta & Family",
    location: "Muscat, Oman",
    tour: "Kashmir Luxury Houseboat & Gulmarg Package",
    comment:
      "We coordinated our entire trip from Muscat over WhatsApp. The transparent advice, prompt responses, and luxurious private Innova cab waiting for us at Srinagar airport made our holiday completely stress-free. Truly royal treatment!",
    verified: true,
  },
  {
    id: "3",
    name: "Dr. Anita Deshmukh",
    location: "Mumbai, Maharashtra",
    tour: "Dubai Family & Desert Safari Vacation",
    comment:
      "Every transfer was on time, the hotel in Downtown Dubai was stunning, and our desert safari had VIP camp seating. No pushy sales or hidden charges—just honest, top-tier service. Highly recommended!",
    verified: true,
  },
  {
    id: "4",
    name: "Ketan Patel",
    location: "Surat, Gujarat",
    tour: "Kerala Munnar & Alleppey Houseboat",
    comment:
      "The private houseboat experience in Alleppey was the highlight of our anniversary trip. The driver was very respectful, and the itinerary was perfectly paced without exhausting us. Madhav Tours is our lifetime travel partner now.",
    verified: true,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Trusted Service",
    description:
      "Years of dedicated experience curating unforgettable family, couple, and spiritual journeys.",
    icon: "ShieldCheck",
  },
  {
    title: "Quick Support",
    description:
      "Direct WhatsApp and direct phone access to genuine human travel specialists—no robotic chatbots.",
    icon: "Zap",
  },
  {
    title: "Affordable Packages",
    description:
      "Transparent pricing with zero hidden markups. We customize quotations precisely to your budget.",
    icon: "BadgePercent",
  },
  {
    title: "Customized Tours",
    description:
      "Every traveler is unique. We adjust hotel tiers, vehicles, and pace to match your preferences.",
    icon: "Sliders",
  },
  {
    title: "Comfortable Travel",
    description:
      "Pristine, sanitized vehicles with experienced chauffeurs who prioritize your safety and comfort.",
    icon: "HeartHandshake",
  },
  {
    title: "Easy Inquiry Process",
    description:
      "No complicated registration or payment forms. Send a quick inquiry and receive a quote in minutes.",
    icon: "PhoneCall",
  },
];
