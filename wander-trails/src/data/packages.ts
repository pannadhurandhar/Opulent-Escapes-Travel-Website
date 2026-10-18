export type TripPackage = {
  slug: string;
  title: string;
  destination: string;
  region: 'India' | 'International';
  duration: string;
  days: number;
  price: number;
  rating: number;
  tag: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: string; detail: string }[];
};

export const packages: TripPackage[] = [
  {
    slug: 'kerala-backwater-days', title: 'Kerala, at your own pace', destination: 'Kerala', region: 'India',
    duration: '5 days / 4 nights', days: 5, price: 18900, rating: 4.9, tag: 'Slow & scenic', image: '/kerala-hero.jpg', imageAlt: 'A family looking out across Kerala backwaters from a traditional houseboat',
    description: 'A soft landing into south India: green hills, easy backwater days and time to simply watch the world drift by.',
    highlights: ['Private houseboat cruise', 'Munnar tea garden visit', 'Family-friendly stays', 'Local Kerala meals'],
    inclusions: ['4 nights in hand-picked stays', 'Breakfast each day', 'Private transfers between destinations', 'Houseboat day cruise'],
    exclusions: ['Flights and train tickets', 'Lunches and dinners unless stated', 'Personal expenses and travel insurance'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive in Kochi and settle into the old harbour quarter.' },
      { day: 'Day 2', detail: 'Drive to Munnar through tea country, with plenty of photo stops.' },
      { day: 'Day 3', detail: 'Explore tea gardens and the easy-going trails around Munnar.' },
      { day: 'Day 4', detail: 'Continue to Alleppey for a private backwater cruise and lakeside stay.' },
      { day: 'Day 5', detail: 'A slow breakfast before your onward journey.' },
    ],
  },
  {
    slug: 'goa-coast-and-colour', title: 'Goa, coast & colour', destination: 'Goa', region: 'India',
    duration: '4 days / 3 nights', days: 4, price: 14600, rating: 4.8, tag: 'Beach favourite', image: '/goa-trip.jpg', imageAlt: 'Colourful fishing boats along a sunny Goan beach',
    description: 'A sun-kissed little escape with quiet beaches, Portuguese lanes and room for everyone to do their own thing.',
    highlights: ['North Goa heritage walk', 'Beach time at your pace', 'Local market visit', 'Sunset boat ride'],
    inclusions: ['3 nights in a boutique stay', 'Daily breakfast', 'Airport transfers', 'Guided heritage walk'],
    exclusions: ['Airfare', 'Meals beyond breakfast', 'Water sports and personal expenses'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive and find your rhythm by the coast.' },
      { day: 'Day 2', detail: 'A guided walk through Fontainhas, then a free afternoon.' },
      { day: 'Day 3', detail: 'Beach day with an optional sunset boat ride.' },
      { day: 'Day 4', detail: 'Breakfast and departure.' },
    ],
  },
  {
    slug: 'manali-mountain-mornings', title: 'Manali, mountain mornings', destination: 'Manali', region: 'India',
    duration: '5 days / 4 nights', days: 5, price: 22400, rating: 4.8, tag: 'Fresh air fix', image: '/manali-trip.jpg', imageAlt: 'Snow-capped Himalayan peaks above a forested Manali valley',
    description: 'Pine-scented walks, cosy evenings and mountain views made for a family album.',
    highlights: ['Old Manali village stroll', 'Solang Valley excursion', 'Riverside picnic stop', 'Flexible family pace'],
    inclusions: ['4 nights in a mountain-view stay', 'Breakfast and dinner', 'Local sightseeing transfers', 'Driver allowance'],
    exclusions: ['Flights or train fare', 'Adventure activities', 'Lunches and personal expenses'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive in Manali and ease into the mountain air.' },
      { day: 'Day 2', detail: 'Discover the lanes, orchards and old wooden temples.' },
      { day: 'Day 3', detail: 'A scenic drive to Solang Valley with time to explore.' },
      { day: 'Day 4', detail: 'Pick a gentle riverside walk or enjoy a free day.' },
      { day: 'Day 5', detail: 'Breakfast and onward travel.' },
    ],
  },
  {
    slug: 'dubai-big-city-bright-days', title: 'Dubai, bright days together', destination: 'Dubai', region: 'International',
    duration: '5 days / 4 nights', days: 5, price: 38900, rating: 4.9, tag: 'City & desert', image: '/bali-trip.jpg', imageAlt: 'A warm tropical waterfront at sunset, representing a Dubai family escape',
    description: 'A family-friendly mix of big-city spectacle, old souks and a desert evening under open skies.',
    highlights: ['Dubai Creek abra ride', 'Desert camp evening', 'Burj Khalifa area visit', 'Flexible city time'],
    inclusions: ['4 nights in a central hotel', 'Breakfast daily', 'Airport transfers', 'Shared desert safari'],
    exclusions: ['International flights and visa', 'Lunches and dinners', 'Attraction tickets not listed'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive, check in and enjoy a relaxed first evening.' },
      { day: 'Day 2', detail: 'Explore old Dubai and cross the Creek by abra.' },
      { day: 'Day 3', detail: 'A desert safari evening with dinner at camp.' },
      { day: 'Day 4', detail: 'Free time for city sights, shopping or a pool day.' },
      { day: 'Day 5', detail: 'Breakfast and departure.' },
    ],
  },
  {
    slug: 'bali-island-days', title: 'Bali, island days', destination: 'Bali', region: 'International',
    duration: '6 days / 5 nights', days: 6, price: 42900, rating: 4.9, tag: 'Island favourite', image: '/bali-trip.jpg', imageAlt: 'A lush tropical Bali landscape with palm trees and an island pool',
    description: 'Green rice terraces, warm island hospitality and beachside pauses, balanced for a relaxed group getaway.',
    highlights: ['Ubud rice terrace visit', 'Water temple stop', 'Beachside afternoon', 'Private day touring'],
    inclusions: ['5 nights in selected stays', 'Daily breakfast', 'Airport transfers', 'Private sightseeing transfers'],
    exclusions: ['International flights and visa', 'Lunches and dinners', 'Travel insurance and personal expenses'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive in Bali and settle into your first island stay.' },
      { day: 'Day 2', detail: 'Head inland to Ubud and its green rice terraces.' },
      { day: 'Day 3', detail: 'A relaxed day around town, markets and cafés.' },
      { day: 'Day 4', detail: 'Visit a water temple and take the scenic route back.' },
      { day: 'Day 5', detail: 'Beach time, with room to add an activity.' },
      { day: 'Day 6', detail: 'Breakfast, then transfer to the airport.' },
    ],
  },
  {
    slug: 'thailand-tropical-together', title: 'Thailand, tropical together', destination: 'Thailand', region: 'International',
    duration: '6 days / 5 nights', days: 6, price: 36900, rating: 4.8, tag: 'Easy island escape', image: '/goa-trip.jpg', imageAlt: 'A bright tropical beach with traditional longtail boats, representing Thailand',
    description: 'A gentle first taste of Thailand with colourful local life, sparkling water and plenty of unplanned time.',
    highlights: ['Old town food walk', 'Island-hopping day', 'Longtail boat ride', 'Easy beach afternoons'],
    inclusions: ['5 nights in selected stays', 'Daily breakfast', 'Airport transfers', 'Shared island tour'],
    exclusions: ['International flights and visa', 'Meals beyond breakfast', 'National park and personal fees'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive and unwind close to the water.' },
      { day: 'Day 2', detail: 'Take a guided stroll through old town and local food stalls.' },
      { day: 'Day 3', detail: 'Island-hopping by boat, with a relaxed beach picnic stop.' },
      { day: 'Day 4', detail: 'A free day for swimming, exploring or doing very little.' },
      { day: 'Day 5', detail: 'Choose a local market morning or another beach day.' },
      { day: 'Day 6', detail: 'Breakfast and departure.' },
    ],
  },
  {
    slug: 'kashmir-paradise-valleys',
    title: 'Kashmir, paradise in the valleys',
    destination: 'Kashmir',
    region: 'India',
    duration: '6 days / 5 nights',
    days: 6,
    price: 24500,
    rating: 4.9,
    tag: 'Valleys & lakes',
    image: '/kashmir-trip.jpg',
    imageAlt: 'A peaceful shikara on Dal Lake in Kashmir framed by majestic Himalayan mountains',
    description: 'Crisp mountain air, serene shikara rides on Dal Lake, and alpine pine valleys across Gulmarg and Pahalgam.',
    highlights: ['Shikara ride on Dal Lake', 'Gulmarg gondola excursion', 'Pahalgam valley stroll', 'Traditional wooden houseboat stay'],
    inclusions: ['5 nights in curated stays & houseboat', 'Breakfast and dinner daily', 'Private heated vehicle transfers', 'Shikara ride on Dal Lake'],
    exclusions: ['Airfare to Srinagar', 'Gondola tickets & pony rides', 'Lunches and personal expenses'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive in Srinagar, check into a traditional lake houseboat and watch sunset over Dal Lake.' },
      { day: 'Day 2', detail: 'Explore the historic Mughal Gardens (Nishat & Shalimar Bagh) and local saffron markets.' },
      { day: 'Day 3', detail: 'Scenic drive to Gulmarg, ride the famous gondola up to Apharwat Peak.' },
      { day: 'Day 4', detail: 'Head towards Pahalgam along the Lidder River with walks through pine-scented meadows.' },
      { day: 'Day 5', detail: 'Visit Betaab Valley and Chandanwari before an evening return to Srinagar.' },
      { day: 'Day 6', detail: 'Morning breakfast on the lake and departure with warm memories.' },
    ],
  },
  {
    slug: 'singapore-city-in-a-garden',
    title: 'Singapore, city in a garden',
    destination: 'Singapore',
    region: 'International',
    duration: '5 days / 4 nights',
    days: 5,
    price: 46500,
    rating: 4.9,
    tag: 'Garden city',
    image: '/singapore-trip.jpg',
    imageAlt: 'Glowing supertrees and Marina Bay illuminated at dusk in Singapore',
    description: 'Futuristic skylines, lush biodomes, and vibrant cultural enclaves designed for every generation to enjoy together.',
    highlights: ['Gardens by the Bay & Supertrees', 'Marina Bay skyline stroll', 'Sentosa Island day out', 'Chinatown & Little India food trail'],
    inclusions: ['4 nights in a premium city stay', 'Daily buffet breakfast', 'Airport transfers', 'Gardens by the Bay conservatories pass'],
    exclusions: ['International airfare and visa', 'Lunches and dinners', 'Personal expenses & travel insurance'],
    itinerary: [
      { day: 'Day 1', detail: 'Touch down at Changi, gaze at the Jewel waterfall, and settle into your city hotel.' },
      { day: 'Day 2', detail: 'Discover the Flower Dome and Cloud Forest at Gardens by the Bay, followed by the Supertree light show.' },
      { day: 'Day 3', detail: 'A fun-filled day out across Sentosa Island with beaches, cable cars, and attractions.' },
      { day: 'Day 4', detail: 'Stroll Chinatown and Little India, sampling famous local street food and hawker classics.' },
      { day: 'Day 5', detail: 'A relaxed morning on Orchard Road before your departure transfer.' },
    ],
  },
];

export const formatINR = (price: number) => `₹${price.toLocaleString('en-IN')}`;
export const destinations = ['Kerala', 'Goa', 'Manali', 'Kashmir', 'Dubai', 'Bali', 'Thailand', 'Singapore'];
