// API Keys (Replace with your own keys)
const WEATHER_API_KEY = 'your_openweather_api_key_here'; // Get from https://openweathermap.org/api

// Sample destinations data with 42 destinations (12 Tamil Nadu + 10 India + 20 International)
const destinations = [
    // Tamil Nadu Destinations (12)
    {
        id: 1,
        name: "Madurai Meenakshi Temple",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 9.9196, lng: 78.1193 },
        tags: ["spiritual", "historical", "architecture"],
        description: "The Meenakshi Amman Temple is a historic Hindu temple located in Madurai, dedicated to Goddess Meenakshi and Lord Sundareswarar. It's famous for its stunning architecture and vibrant festivals.",
        image: "https://media.istockphoto.com/id/179661402/photo/inside-of-meenakshi-hindu-temple-madurai-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=Zdsmiye6ASYll6Ku8B7i7-l2cgtOsq18780FYhX4SnM=",
        highlights: ["Thousand Pillar Hall", "Musical Pillars", "Porthamarai Kulam", "Temple Museum", "Evening ceremonies"]
    },
    {
        id: 2,
        name: "Rameswaram",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 9.2880, lng: 79.3129 },
        tags: ["spiritual", "beach", "historical"],
        description: "Rameswaram is a sacred island town known for the Ramanathaswamy Temple and as one of the Char Dham pilgrimage sites. It's connected to mainland India by the Pamban Bridge.",
        image: "https://media.istockphoto.com/id/2200798380/photo/drone-aerial-shot-of-the-iconic-pamban-bridge-indias-first-sea-bridge-stretching-over-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cw-ZJ-P1wOTvQHHNYctrtYq_WhNiUYDR3QvdVLrxkLM=",
        highlights: ["Ramanathaswamy Temple", "Pamban Bridge", "Dhanushkodi Beach", "Agni Theertham", "Adam's Bridge view"]
    },
    {
        id: 3,
        name: "Kanyakumari",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 8.0883, lng: 77.5385 },
        tags: ["beach", "spiritual", "sunrise"],
        description: "Kanyakumari is India's southernmost tip where the Arabian Sea, Bay of Bengal, and Indian Ocean meet. Famous for spectacular sunrise and sunset views over the ocean.",
        image: "https://images.unsplash.com/photo-1610902552120-c577dbde88a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D",
        highlights: ["Vivekananda Rock", "Thiruvalluvar Statue", "Sunrise point", "Kumari Amman Temple", "Mahatma Gandhi Memorial"]
    },
    {
        id: 4,
        name: "Ooty",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 11.4102, lng: 76.6950 },
        tags: ["mountain", "nature", "tea"],
        description: "Ooty, the Queen of Hill Stations, is nestled in the Nilgiri Hills offering beautiful landscapes, botanical gardens, and colonial-era charm.",
        image: "https://images.unsplash.com/photo-1711553186815-8fbc95d02155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9vdHl8ZW58MHx8MHx8fDA%3D",
        highlights: ["Botanical Gardens", "Ooty Lake", "Nilgiri Mountain Railway", "Tea Museum", "Doddabetta Peak"]
    },
    {
        id: 5,
        name: "Kodaikanal",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 10.2381, lng: 77.4892 },
        tags: ["mountain", "nature", "lake"],
        description: "Kodaikanal, the Princess of Hill Stations, is known for its pristine lakes, waterfalls, and lush forests in the Palani Hills.",
        image: "https://media.istockphoto.com/id/999899214/photo/thick-tall-mystery-pine-forest.webp?a=1&b=1&s=612x612&w=0&k=20&c=EE2h7jDc4IiwcL5STty9sCYUDfqCZQmM8pOEyh--LkA=",
        highlights: ["Kodaikanal Lake", "Coaker's Walk", "Pillar Rocks", "Bryant Park", "Silver Cascade Falls"]
    },
    {
        id: 6,
        name: "Mahabalipuram",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 12.6168, lng: 80.1920 },
        tags: ["historical", "beach", "architecture"],
        description: "Mahabalipuram is a UNESCO World Heritage Site famous for its 7th-8th century Hindu monuments, rock-cut temples, and shore temples.",
        image: "https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFoYWJhbGlwdXJhbXxlbnwwfHwwfHx8MA%3D%3D",
        highlights: ["Shore Temple", "Pancha Rathas", "Arjuna's Penance", "Krishna's Butterball", "Dance Festival"]
    },
    {
        id: 7,
        name: "Chennai",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 13.0827, lng: 80.2707 },
        tags: ["city", "beach", "cultural"],
        description: "Chennai, the capital of Tamil Nadu, is known for its rich cultural heritage, beautiful beaches, and as the gateway to South India.",
        image: "https://images.unsplash.com/photo-1637080618498-b4a1cad84ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoZW5uYWl8ZW58MHx8MHx8fDA%3D",
        highlights: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "Santhome Cathedral", "Covelong Beach"]
    },
    {
        id: 8,
        name: "Coimbatore",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 11.0168, lng: 76.9558 },
        tags: ["city", "shopping", "nature"],
        description: "Coimbatore, the Manchester of South India, is surrounded by Western Ghats and known for textile industries and proximity to hill stations.",
        image: "https://images.unsplash.com/photo-1555609971-da67ecf8c6c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29pbWJhdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
        highlights: ["Marudamalai Temple", "Black Thunder Water Park", "Siruvani Waterfalls", "Eachanari Vinayagar Temple", "TNAU Botanical Garden"]
    },
    {
        id: 9,
        name: "Yercaud",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 11.7758, lng: 78.2097 },
        tags: ["mountain", "nature", "coffee"],
        description: "Yercaud is a serene hill station in the Eastern Ghats known for its coffee plantations, orange groves, and scenic viewpoints.",
        image: "https://media.istockphoto.com/id/2186952684/photo/lake-view-in-yercaud.webp?a=1&b=1&s=612x612&w=0&k=20&c=mLP4BSjBaaBoV87Sfdook-cbEN843ckdpHsgXs22X00=",
        highlights: ["Yercaud Lake", "Killiyur Falls", "Pagoda Point", "Botanical Garden", "Coffee Plantations"]
    },
    {
        id: 10,
        name: "Chettinad",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 10.1490, lng: 78.7797 },
        tags: ["cultural", "architecture", "food"],
        description: "Chettinad region is famous for its unique architecture, vibrant culture, and especially its aromatic and spicy Chettinad cuisine.",
        image: "https://images.unsplash.com/photo-1668749543729-9fbd709751ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hldHRpbmFkJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fHwy",
        highlights: ["Chettinad Mansions", "Culinary experiences", "Athangudi Tiles", "Karaikudi heritage", "Local handicrafts"]
    },
    {
        id: 11,
        name: "Hogenakkal Falls",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 12.1167, lng: 77.7667 },
        tags: ["nature", "adventure", "waterfall"],
        description: "Hogenakkal Falls is often called the 'Niagara of India' where the Kaveri River plunges creating spectacular waterfalls and offering coracle rides.",
        image: "https://media.istockphoto.com/id/103991896/photo/hogenakkal-falls.webp?a=1&b=1&s=612x612&w=0&k=20&c=hi_m1KsDyoi2Br835sz0Xzh2oMrJeeobmtvR26JlGyw=",
        highlights: ["Coracle boat rides", "Waterfall views", "Fish therapy", "Carbonatite rocks", "Picnic spots"]
    },
    {
        id: 12,
        name: "Courtallam",
        country: "India",
        state: "Tamil Nadu",
        coordinates: { lat: 8.9306, lng: 77.2758 },
        tags: ["nature", "waterfall", "ayurveda"],
        description: "Courtallam is known as the 'Spa of South India' with numerous therapeutic waterfalls believed to have medicinal properties.",
        image: "https://media.istockphoto.com/id/2218525401/photo/lush-greenery-and-powerful-waters-at-main-falls-courtallam-coutrallam-main-falls-tamilnadu.webp?a=1&b=1&s=612x612&w=0&k=20&c=PXDo37AatHQAZS3OMf_Qj8DjFKNDSi8gnKwsNRg6Y8I=",
        highlights: ["Main Falls", "Five Falls", "Shenbaga Devi Temple", "Bathing in waterfalls", "Herbal baths"]
    },
    {
        id: 13,
        name: "Taj Mahal",
        country: "India",
        state: "Uttar Pradesh",
        coordinates: { lat: 27.1751, lng: 78.0421 },
        tags: ["historical", "architecture", "romantic"],
        description: "The Taj Mahal is an ivory-white marble mausoleum in Agra, built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop",
        highlights: ["Sunrise view", "Marble inlay work", "Yamuna River backdrop", "Mughal gardens", "Moonlight viewing"]
    },
    {
        id: 14,
        name: "Goa",
        country: "India",
        state: "Goa",
        coordinates: { lat: 15.2993, lng: 74.1240 },
        tags: ["beach", "party", "portuguese"],
        description: "Goa is India's smallest state known for its stunning beaches, Portuguese heritage, vibrant nightlife, and delicious seafood cuisine.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop",
        highlights: ["Calangute Beach", "Basilica of Bom Jesus", "Dudhsagar Falls", "Flea markets", "Water sports"]
    },
    {
        id: 15,
        name: "Kerala Backwaters",
        country: "India",
        state: "Kerala",
        coordinates: { lat: 9.4981, lng: 76.3388 },
        tags: ["nature", "relaxation", "houseboat"],
        description: "The Kerala backwaters are a network of interconnected canals, rivers, lakes, and inlets perfect for houseboat cruises.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhJTIwYmFja3dhdGVyc3xlbnwwfDB8MHx8fDI%3D",
        highlights: ["Houseboat stay", "Alleppey canals", "Traditional Kerala cuisine", "Village tours", "Bird watching"]
    },
    {
        id: 16,
        name: "Jaipur",
        country: "India",
        state: "Rajasthan",
        coordinates: { lat: 26.9124, lng: 75.7873 },
        tags: ["historical", "architecture", "shopping"],
        description: "Jaipur, the Pink City, is the capital of Rajasthan known for its magnificent palaces, forts, and vibrant markets.",
        image: "https://images.unsplash.com/photo-1578999935853-4ec5fa6c1f60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphaXB1cnxlbnwwfDB8MHx8fDI%3D",
        highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Local handicrafts"]
    },
    {
        id: 17,
        name: "Ladakh",
        country: "India",
        state: "Ladakh",
        coordinates: { lat: 34.1526, lng: 77.5771 },
        tags: ["mountain", "adventure", "buddhist"],
        description: "Ladakh is a high-altitude desert region in the Himalayas known for its breathtaking landscapes and Buddhist monasteries.",
        image: "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqMWn40ojqWCpazyRuz4MDSWbPPRY2EtfaGMyhsQSyc=",
        highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill", "Monasteries", "River rafting"]
    },
    {
        id: 18,
        name: "Varanasi",
        country: "India",
        state: "Uttar Pradesh",
        coordinates: { lat: 25.3176, lng: 82.9739 },
        tags: ["spiritual", "historical", "cultural"],
        description: "Varanasi is one of the world's oldest continually inhabited cities and the spiritual capital of India on the Ganges River.",
        image: "https://images.unsplash.com/photo-1650341278999-d1b5142cfe30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJpc2hpa2VzaHxlbnwwfDB8MHx8fDI%3D",
        highlights: ["Ganga Aarti", "Boat ride on Ganges", "Ancient temples", "Spiritual ceremonies", "Silk weaving"]
    },
    {
        id: 19,
        name: "Munnar",
        country: "India",
        state: "Kerala",
        coordinates: { lat: 10.0889, lng: 77.0595 },
        tags: ["mountain", "nature", "tea"],
        description: "Munnar is a picturesque hill station in Kerala known for its sprawling tea plantations and misty mountains.",
        image: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVubmFyfGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Tea plantation tours", "Eravikulam National Park", "Mattupetty Dam", "Neelakurinji flowers", "Spice plantations"]
    },
    {
        id: 20,
        name: "Rishikesh",
        country: "India",
        state: "Uttarakhand",
        coordinates: { lat: 30.0869, lng: 78.2676 },
        tags: ["spiritual", "adventure", "yoga"],
        description: "Rishikesh, the Yoga Capital of the World, is famous for its ashrams, yoga centers, and adventure sports.",
        image: "https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmlzaGlrZXNofGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Yoga and meditation", "River rafting", "Lakshman Jhula", "Evening Ganga Aarti", "Beatles Ashram"]
    },
    {
        id: 21,
        name: "Andaman Islands",
        country: "India",
        state: "Andaman and Nicobar",
        coordinates: { lat: 11.7401, lng: 92.6586 },
        tags: ["beach", "adventure", "island"],
        description: "The Andaman Islands are known for their pristine beaches, coral reefs, and water sports activities.",
        image: "https://media.istockphoto.com/id/1480901115/photo/andaman-island.webp?a=1&b=1&s=612x612&w=0&k=20&c=KwYZAWYwir2q2FEaf1t2KtA20gVlqtraLMAdLt7GRTY=",
        highlights: ["Scuba diving", "Radhanagar Beach", "Cellular Jail", "Limestone caves", "Glass bottom boat rides"]
    },
    {
        id: 22,
        name: "Udaipur",
        country: "India",
        state: "Rajasthan",
        coordinates: { lat: 24.5854, lng: 73.7125 },
        tags: ["romantic", "historical", "lake"],
        description: "Udaipur, the City of Lakes, is known for its beautiful lakes, majestic palaces, and romantic ambiance.",
        image: "https://media.istockphoto.com/id/1343698822/photo/udaipur-city-palace-beside-beautiful-lake-pichola-at-udaipur-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZEj2EfXW2qNwZ8GKEjBIU_ixuwtV5FXW76-Ead_PUZY=",
        highlights: ["Lake Pichola", "City Palace", "Jag Mandir", "Traditional cuisine", "Boat rides"]
    },

    // International Destinations (20)
    {
        id: 23,
        name: "Santorini",
        country: "Greece",
        coordinates: { lat: 36.3932, lng: 25.4615 },
        tags: ["beach", "historical", "romantic"],
        description: "Santorini is a stunning island in the Aegean Sea, known for its white-washed buildings and breathtaking sunsets.",
        image: "https://images.unsplash.com/photo-1696519669474-3001c0e2b548?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FudG9yaW5pfGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Oia sunset views", "Red Beach", "Ancient Thera ruins", "Wine tasting tours", "Volcanic hot springs"]
    },
    {
        id: 24,
        name: "Swiss Alps",
        country: "Switzerland",
        coordinates: { lat: 46.8182, lng: 8.2275 },
        tags: ["mountain", "adventure", "winter"],
        description: "The Swiss Alps offer some of the most spectacular mountain scenery in Europe with pristine lakes and charming villages.",
        image: "https://images.unsplash.com/photo-1593186344142-ef775a6e596f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpc3MlMjBhbHBzfGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Jungfraujoch - Top of Europe", "Matterhorn peak", "Interlaken adventure sports", "Lucerne Lake", "Cogwheel train rides"]
    },
    {
        id: 25,
        name: "Kyoto",
        country: "Japan",
        coordinates: { lat: 35.0116, lng: 135.7681 },
        tags: ["city", "historical", "cultural"],
        description: "Kyoto, Japan's former capital, is famous for its classical Buddhist temples, gardens, and traditional wooden houses.",
        image: "https://media.istockphoto.com/id/497450573/photo/kyoto-japan-skyline.webp?a=1&b=1&s=612x612&w=0&k=20&c=9xOtUTbQ9qVO5wl0c19-fuWTTFfJvNGDG1dWlzafIjs=",
        highlights: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji (Golden Pavilion)", "Gion district", "Traditional tea ceremonies"]
    },
    {
        id: 26,
        name: "Bali",
        country: "Indonesia",
        coordinates: { lat: -8.4095, lng: 115.1889 },
        tags: ["beach", "adventure", "spiritual"],
        description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, and beautiful beaches.",
        image: "https://images.unsplash.com/photo-1580100586938-02822d99c4a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFsaSUyMGJlYWNofGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Uluwatu Temple", "Tegallalang Rice Terraces", "Ubud Monkey Forest", "Waterfalls trekking", "Traditional Balinese massage"]
    },
    {
        id: 27,
        name: "New York City",
        country: "USA",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        tags: ["city", "shopping", "cultural"],
        description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.",
        image: "https://images.unsplash.com/photo-1572402554573-3380b6197404?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3JTIweW9yayUyMGNpdHl8ZW58MHwwfDB8fHwy",
        highlights: ["Statue of Liberty", "Central Park", "Times Square", "Broadway shows", "Metropolitan Museum of Art"]
    },
    {
        id: 28,
        name: "Machu Picchu",
        country: "Peru",
        coordinates: { lat: -13.1631, lng: -72.5450 },
        tags: ["historical", "mountain", "adventure"],
        description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, renowned for its sophisticated dry-stone walls.",
       image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFjaHUlMjBQaWNjaHV8ZW58MHwwfDB8fHwy",
        highlights: ["Inca Trail trek", "Sun Gate sunrise", "Temple of the Sun", "Huayna Picchu hike", "Sacred Valley tours"]
    },
    {
        id: 29,
        name: "Sydney",
        country: "Australia",
        coordinates: { lat: -33.8688, lng: 151.2093 },
        tags: ["city", "beach", "modern"],
        description: "Sydney is best known for its harbourfront Sydney Opera House with a distinctive sail-like design.",
        image: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5fGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Sydney Opera House", "Bondi Beach", "Sydney Harbour Bridge", "Royal Botanic Garden", "Taronga Zoo"]
    },
    {
        id: 30,
        name: "Banff National Park",
        country: "Canada",
        coordinates: { lat: 51.4968, lng: -115.9281 },
        tags: ["mountain", "adventure", "nature"],
        description: "Banff National Park is Canada's oldest national park, established in 1885 in the Rocky Mountains.",
        image: "https://images.unsplash.com/photo-1595014755677-84da53f3a44e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFuZmYlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHwwfDB8fHwy",
        highlights: ["Lake Louise", "Moraine Lake", "Icefields Parkway", "Banff Gondola", "Johnston Canyon"]
    },
    {
        id: 31,
        name: "Paris",
        country: "France",
        coordinates: { lat: 48.8566, lng: 2.3522 },
        tags: ["city", "historical", "romantic"],
        description: "Paris is a major European city and a global center for art, fashion, gastronomy and culture.",
        image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHwwfDB8fHwy",
        highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées", "Seine River cruise"]
    },
    {
        id: 32,
        name: "Bora Bora",
        country: "French Polynesia",
        coordinates: { lat: -16.5004, lng: -151.7415 },
        tags: ["beach", "luxury", "island"],
        description: "Bora Bora is a small South Pacific island known for its scuba diving and luxurious resorts.",
        image: "https://images.unsplash.com/photo-1672812407183-001d3533f49a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9yYSUyMGJvcmF8ZW58MHwwfDB8fHwy",
        highlights: ["Overwater bungalows", "Matira Beach", "Mount Otemanu", "Lagoon snorkeling", "Shark and ray feeding"]
    },
    {
        id: 33,
        name: "Rome",
        country: "Italy",
        coordinates: { lat: 41.9028, lng: 12.4964 },
        tags: ["historical", "cultural", "food"],
        description: "Rome, the Eternal City, is famous for its ancient ruins, Renaissance art, and delicious Italian cuisine.",
       image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfDB8MHx8fDI%3D",
        highlights: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum", "Italian gelato"]
    },
    {
        id: 34,
        name: "Dubai",
        country: "UAE",
        coordinates: { lat: 25.2048, lng: 55.2708 },
        tags: ["city", "modern", "luxury"],
        description: "Dubai is known for its ultramodern architecture, luxury shopping, and vibrant nightlife scene.",
        image: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHwwfDB8fHwy",
        highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall", "Desert safari", "Gold Souk"]
    },
    {
        id: 35,
        name: "Istanbul",
        country: "Turkey",
        coordinates: { lat: 41.0082, lng: 28.9784 },
        tags: ["historical", "cultural", "shopping"],
        description: "Istanbul straddles Europe and Asia and is known for its historic sites, bazaars, and Turkish baths.",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SXN0YW5idWx8ZW58MHwwfDB8fHwy",
        highlights: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Bosphorus cruise", "Turkish delight"]
    },
    {
        id: 36,
        name: "Bangkok",
        country: "Thailand",
        coordinates: { lat: 13.7563, lng: 100.5018 },
        tags: ["city", "cultural", "food"],
        description: "Bangkok is Thailand's capital known for ornate temples, vibrant street life, and bustling markets.",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2tva3xlbnwwfDB8MHx8fDI%3D",
        highlights: ["Grand Palace", "Wat Arun", "Floating markets", "Street food", "Chatuchak Market"]
    },
    {
        id: 37,
        name: "Rio de Janeiro",
        country: "Brazil",
        coordinates: { lat: -22.9068, lng: -43.1729 },
        tags: ["beach", "city", "carnival"],
        description: "Rio de Janeiro is known for its Carnival festival, samba music, and stunning beaches like Copacabana and Ipanema.",
        image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach", "Carnival", "Samba shows"]
    },
    {
        id: 38,
        name: "Cape Town",
        country: "South Africa",
        coordinates: { lat: -33.9249, lng: 18.4241 },
        tags: ["mountain", "beach", "wildlife"],
        description: "Cape Town is known for its harbor, natural setting, and landmarks like Table Mountain and Cape Point.",
        image: "https://images.unsplash.com/photo-1591742708307-ce49d19450d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FwZSUyMHRvd258ZW58MHwwfDB8fHwy",
        highlights: ["Table Mountain", "Robben Island", "Cape of Good Hope", "Penguin colonies", "Wine tours"]
    },
    {
        id: 39,
        name: "Tokyo",
        country: "Japan",
        coordinates: { lat: 35.6762, lng: 139.6503 },
        tags: ["city", "modern", "cultural"],
        description: "Tokyo is Japan's busy capital mixing ultramodern and traditional, from neon-lit skyscrapers to historic temples.",
        image: "https://images.unsplash.com/photo-1615049364575-de41cf3db694?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        highlights: ["Sensoji Temple", "Shibuya Crossing", "Tsukiji Market", "Tokyo Tower", "Cherry blossoms"]
    },
    {
        id: 40,
        name: "London",
        country: "UK",
        coordinates: { lat: 51.5074, lng: -0.1278 },
        tags: ["city", "historical", "cultural"],
        description: "London is the capital of England, known for its history, royal palaces, and world-class museums.",
        image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Buckingham Palace", "Tower of London", "British Museum", "London Eye", "West End shows"]
    },
    {
        id: 41,
        name: "Singapore",
        country: "Singapore",
        coordinates: { lat: 1.3521, lng: 103.8198 },
        tags: ["city", "modern", "food"],
        description: "Singapore is a global financial center with tropical climate, multicultural population, and amazing food scene.",
        image: "https://images.unsplash.com/photo-1600664356348-10686526af4f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Hawker centers", "Orchard Road"]
    },
    {
        id: 42,
        name: "Hong Kong",
        country: "China",
        coordinates: { lat: 22.3193, lng: 114.1694 },
        tags: ["city", "shopping", "food"],
        description: "Hong Kong is a vibrant metropolis known for its skyscrapers, shopping, and dim sum cuisine.",
        image: "https://images.unsplash.com/photo-1594973782943-3314fe063f68?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmclMjBrb25nfGVufDB8MHwwfHx8Mg%3D%3D",
        highlights: ["Victoria Peak", "Star Ferry", "Temple Street Night Market", "Disneyland", "Dim sum tasting"]
    }
];
// Global variables
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = 'all';
let currentSearch = '';
let map;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Load destinations
    displayDestinations(destinations);
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize theme
    initializeTheme();
    
    // Show home section by default
    showSection('home');
}

// Set up event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
            
            // Update active nav link
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Search functionality
    document.getElementById('search-button').addEventListener('click', performSearch);
    document.getElementById('search-input').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Filter functionality
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const tagValue = this.getAttribute('data-tag');
            applyFilter(tagValue);
            
            // Update active filter
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Modal close
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('destination-modal');
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Display destinations in the grid
function displayDestinations(destinationsArray) {
    const grid = document.getElementById('destinations-grid');
    grid.innerHTML = '';
    
    if (destinationsArray.length === 0) {
        grid.innerHTML = '<p class="no-results">No destinations found matching your criteria.</p>';
        return;
    }
    
    destinationsArray.forEach(destination => {
        const isFavorited = favorites.includes(destination.id);
        const card = createDestinationCard(destination, isFavorited);
        grid.appendChild(card);
    });
}

// Create a destination card element
function createDestinationCard(destination, isFavorited) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.setAttribute('data-id', destination.id);
    
    // Create tags HTML
    const tagsHTML = destination.tags.map(tag => 
        `<span class="tag ${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`
    ).join('');
    
    // Create location text (include state if available)
    const locationText = destination.state ? 
        `${destination.name}, ${destination.state}, ${destination.country}` : 
        `${destination.name}, ${destination.country}`;
    
    card.innerHTML = `
        <img src="${destination.image}" alt="${locationText}" class="destination-image" 
             onerror="handleImageError(this, ${JSON.stringify(destination).replace(/"/g, '&quot;')})">
        <div class="destination-content">
            <div class="destination-header">
                <div>
                    <h3 class="destination-name">${destination.name}</h3>
                    <p class="destination-country">${destination.state ? destination.state + ', ' : ''}${destination.country}</p>
                </div>
                <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" aria-label="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}">
                    ${isFavorited ? '❤️' : '🤍'}
                </button>
            </div>
            <p class="destination-description">${destination.description}</p>
            <div class="destination-tags">
                ${tagsHTML}
            </div>
        </div>
    `;
    
    // Add event listeners to the card
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('favorite-btn')) {
            openDestinationModal(destination);
        }
    });
    
    // Add event listener to favorite button
    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleFavorite(destination.id, favoriteBtn);
    });
    
    return card;
}

// Handle image loading errors
function handleImageError(imgElement, destination) {
    console.warn(`Failed to load image for ${destination.name}, using fallback`);
    
    // Try a fallback service
    const fallbackUrl = getFallbackImageUrl(destination);
    imgElement.src = fallbackUrl;
    imgElement.alt = `${destination.name} - ${destination.country}`;
    
    // If the fallback also fails, use SVG placeholder
    imgElement.onerror = function() {
        this.onerror = null; // Prevent infinite loop
        this.src = getSVGPlaceholder(destination);
    };
}

function getFallbackImageUrl(destination) {
    // Use Picsum as fallback with seed based on destination name
    const seed = destination.name.toLowerCase().replace(/\s+/g, '');
    return `https://picsum.photos/seed/${seed}/600/400`;
}

function getSVGPlaceholder(destination) {
    const colors = {
        beach: { bg: '#89daff', text: '#003366' },
        mountain: { bg: '#6dadb5', text: '#1f4021' },
        city: { bg: '#c0c0c0', text: '#333333' },
        historical: { bg: '#d4b896', text: '#5d4037' },
        adventure: { bg: '#a5d6a7', text: '#1b5e20' },
        spiritual: { bg: '#ffecb3', text: '#e65100' },
        cultural: { bg: '#b2dfdb', text: '#004d40' },
        nature: { bg: '#c8e6c9', text: '#1b5e20' },
        architecture: { bg: '#f8bbd9', text: '#880e4f' },
        food: { bg: '#ffab91', text: '#bf360c' },
        shopping: { bg: '#e1bee7', text: '#4a148c' },
        romantic: { bg: '#f8bbd9', text: '#880e4f' },
        portuguese: { bg: '#ffd180', text: '#e65100' },
        houseboat: { bg: '#bbdefb', text: '#0d47a1' },
        buddhist: { bg: '#ffecb3', text: '#e65100' },
        modern: { bg: '#e0e0e0', text: '#212121' },
        winter: { bg: '#b3e5fc', text: '#01579b' },
        luxury: { bg: '#ffecb3', text: '#e65100' },
        carnival: { bg: '#f8bbd9', text: '#880e4f' },
        wildlife: { bg: '#c8e6c9', text: '#1b5e20' },
        ayurveda: { bg: '#b2dfdb', text: '#004d40' },
        waterfall: { bg: '#bbdefb', text: '#0d47a1' },
        sunrise: { bg: '#ffd180', text: '#e65100' },
        coffee: { bg: '#ffab91', text: '#bf360c' }
    };
    
    const primaryTag = destination.tags[0];
    const color = colors[primaryTag] || colors.beach;
    
    return `data:image/svg+xml;base64,${btoa(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${color.bg}"/>
            <text x="50%" y="50%" font-family="Arial" font-size="16" text-anchor="middle" 
                  dominant-baseline="middle" fill="${color.text}">
                ${destination.name}
            </text>
        </svg>
    `)}`;
}

// Open destination modal
function openDestinationModal(destination) {
    const modal = document.getElementById('destination-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Create tags HTML
    const tagsHTML = destination.tags.map(tag => 
        `<span class="tag ${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`
    ).join('');
    
    // Create highlights HTML
    const highlightsHTML = destination.highlights.map(highlight => 
        `<li>${highlight}</li>`
    ).join('');
    
    const isFavorited = favorites.includes(destination.id);
    
    // Create location text for modal
    const locationText = destination.state ? 
        `${destination.name}, ${destination.state}, ${destination.country}` : 
        `${destination.name}, ${destination.country}`;
    
    modalContent.innerHTML = `
        <div class="modal-body">
            <img src="${destination.image}" alt="${locationText}" class="modal-image"
                 onerror="handleImageError(this, ${JSON.stringify(destination).replace(/"/g, '&quot;')})">
            <div class="modal-header">
                <h2 class="modal-title">${destination.name}</h2>
                <p class="modal-subtitle">${destination.state ? destination.state + ', ' : ''}${destination.country}</p>
                <div class="destination-tags">
                    ${tagsHTML}
                </div>
            </div>
            <p class="modal-description">${destination.description}</p>
            <div class="modal-highlights">
                <h3>Highlights</h3>
                <ul class="highlights-list">
                    ${highlightsHTML}
                </ul>
            </div>
            <div class="weather-section">
                <h3>Current Weather</h3>
                <div class="weather-info">
                    <div class="weather-icon">⏳</div>
                    <div class="weather-details">
                        <p>Loading weather data...</p>
                    </div>
                </div>
            </div>
            <div class="map-section">
                <h3>Location</h3>
                <div id="destination-map"></div>
            </div>
            <div class="modal-actions">
                <button class="modal-favorite-btn ${isFavorited ? 'favorited' : ''}">
                    ${isFavorited ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
                </button>
            </div>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    
    // Initialize map
    initializeMap(destination.coordinates);
    
    // Fetch weather data
    fetchWeatherData(destination.coordinates);
    
    // Add event listener to modal favorite button
    const modalFavoriteBtn = modalContent.querySelector('.modal-favorite-btn');
    modalFavoriteBtn.addEventListener('click', function() {
        toggleFavorite(destination.id);
        modalFavoriteBtn.classList.toggle('favorited');
        modalFavoriteBtn.innerHTML = favorites.includes(destination.id) ? 
            '❤️ Remove from Favorites' : '🤍 Add to Favorites';
        
        // Update the card favorite button if it exists
        const cardFavoriteBtn = document.querySelector(`.destination-card[data-id="${destination.id}"] .favorite-btn`);
        if (cardFavoriteBtn) {
            cardFavoriteBtn.classList.toggle('favorited');
            cardFavoriteBtn.innerHTML = favorites.includes(destination.id) ? '❤️' : '🤍';
            cardFavoriteBtn.setAttribute('aria-label', 
                favorites.includes(destination.id) ? 'Remove from favorites' : 'Add to favorites');
        }
        
        // Update favorites section if visible
        if (document.getElementById('favorites').classList.contains('active')) {
            displayFavorites();
        }
    });
}

// Initialize map for destination
function initializeMap(coordinates) {
    // Check if map already exists and remove it
    if (map) {
        map.remove();
    }
    
    // Create new map
    map = L.map('destination-map').setView([coordinates.lat, coordinates.lng], 10);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add marker
    L.marker([coordinates.lat, coordinates.lng]).addTo(map)
        .bindPopup('Destination Location')
        .openPopup();
}


// Fetch weather data from OpenWeatherMap API
async function fetchWeatherData(coordinates) {
    try {
        // For demo purposes, we'll use a mock response if no API key is provided
        if (WEATHER_API_KEY === 'your_openweather_api_key_here') {
            // Mock weather data for demonstration
            setTimeout(() => {
                displayWeatherData({
                    temperature: Math.round(Math.random() * 30 + 10),
                    description: 'Partly cloudy',
                    icon: '02d',
                    humidity: Math.round(Math.random() * 40 + 50),
                    windSpeed: Math.round(Math.random() * 10 + 5)
                });
            }, 500);
            return;
        }
        
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${WEATHER_API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        
        displayWeatherData({
            temperature: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.weather-info').innerHTML = `
            <p>Weather data temporarily unavailable</p>
        `;
    }
}

// Display weather data in modal
function displayWeatherData(weather) {
    const weatherInfo = document.querySelector('.weather-info');
    weatherInfo.innerHTML = `
        <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
        </div>
        <div class="weather-details">
            <p><strong>${weather.temperature}°C</strong> - ${weather.description}</p>
            <p>Humidity: ${weather.humidity}%</p>
            <p>Wind: ${weather.windSpeed} km/h</p>
        </div>
    `;
}

// Toggle favorite status
function toggleFavorite(destinationId, buttonElement) {
    const index = favorites.indexOf(destinationId);
    
    if (index === -1) {
        // Add to favorites
        favorites.push(destinationId);
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
    }
    
    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update button if provided
    if (buttonElement) {
        buttonElement.classList.toggle('favorited');
        buttonElement.innerHTML = favorites.includes(destinationId) ? '❤️' : '🤍';
        buttonElement.setAttribute('aria-label', 
            favorites.includes(destinationId) ? 'Remove from favorites' : 'Add to favorites');
    }
    
    // Update favorites section if visible
    if (document.getElementById('favorites').classList.contains('active')) {
        displayFavorites();
    }
}

// Display favorites
function displayFavorites() {
    const favoritesGrid = document.getElementById('favorites-grid');
    const noFavorites = document.getElementById('no-favorites');
    
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = '';
        noFavorites.style.display = 'block';
        return;
    }
    
    noFavorites.style.display = 'none';
    
    const favoriteDestinations = destinations.filter(dest => favorites.includes(dest.id));
    favoritesGrid.innerHTML = '';
    
    favoriteDestinations.forEach(destination => {
        const card = createDestinationCard(destination, true);
        favoritesGrid.appendChild(card);
    });
}

// Apply filter to destinations
function applyFilter(tag) {
    currentFilter = tag;
    filterAndSearchDestinations();
}

// Perform search
function performSearch() {
    currentSearch = document.getElementById('search-input').value.toLowerCase();
    filterAndSearchDestinations();
}

// Filter and search destinations
function filterAndSearchDestinations() {
    let filteredDestinations = destinations;
    
    // Apply tag filter
    if (currentFilter !== 'all') {
        filteredDestinations = filteredDestinations.filter(dest => 
            dest.tags.includes(currentFilter)
        );
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredDestinations = filteredDestinations.filter(dest => 
            dest.name.toLowerCase().includes(currentSearch) || 
            dest.country.toLowerCase().includes(currentSearch) ||
            (dest.state && dest.state.toLowerCase().includes(currentSearch)) ||
            dest.description.toLowerCase().includes(currentSearch) ||
            dest.tags.some(tag => tag.includes(currentSearch))
        );
    }
    
    displayDestinations(filteredDestinations);
}

// Show section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // If showing favorites, update the display
    if (sectionId === 'favorites') {
        displayFavorites();
    }
}

// Close modal
function closeModal() {
    document.getElementById('destination-modal').style.display = 'none';
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-icon').textContent = '☀️';
    }
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        document.querySelector('.theme-icon').textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        document.querySelector('.theme-icon').textContent = '🌙';
    }
}

// Contact Form Functionality
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessage = document.getElementById('form-message');
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'block';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        formMessage.innerHTML = 'Thank you for your message! We\'ll get back to you within 24 hours.';
        formMessage.className = 'form-message success';
        
        // Reset button state
        btnText.style.display = 'block';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.innerHTML = '';
            formMessage.className = 'form-message';
        }, 5000);
        
    }, 2000);
}

// Update the initializeApp function to include contact form setup
function initializeApp() {
    // Load destinations
    displayDestinations(destinations);
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize theme
    initializeTheme();
    
    // Setup contact form
    setupContactForm();
    
    // Show home section by default
    showSection('home');
}


