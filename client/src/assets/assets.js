import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import flag1 from './flag1.png'
import flag2 from './flag2.jpeg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import flight2 from './flight2.jpg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import restaurantEatIcon from './restaurantEatIcon.svg'
import restaurantNoodleIcon from './restaurantNoodleIcon.svg'
import restaurantMenuIcon from './restaurantMenuIcon.svg'
import restaurentWaiterIcon from './restaurentWaiterIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {

    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    flight2,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    restaurantNoodleIcon,
    restaurantMenuIcon,
    restaurentWaiterIcon,
    restaurantEatIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "goa",
    "kerala,india",
];


export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "Tripzy has completely transformed the way I plan my trips. From finding top-rated hotels to exploring local restaurants and attractions, everything is available in one place.I never book a trip without checking Tripzy first!" },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "What I love most about Tripzy is the ability to compare prices across different booking sites. I’ve saved a lot just by checking deals through the platform. Plus, reading real traveler reviews gives me confidence that I’m making the right choice — it’s like getting insider tips before you travel!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Thanks to TripAdvisor, I found some incredible restaurants and local experiences I would have missed otherwise. Whether I’m exploring a new city or looking for the best nearby spots, the user ratings and photos make it so much easier to decide. It's my go-to travel guide!" }
];


export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
    "restaurantNoodle": assets.restaurantNoodleIcon,
    "restaurantMenu": assets.restaurantMenuIcon,
    "restaurentWaiter": assets.restaurentWaiterIcon,   
    "restaurantEat": assets.restaurantEatIcon,
};


export const allData =[

 {"_id": "67f76393197ac559e4089b73",

   " description ": "East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese heritage",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop",
   " ratingg": 4.5,


   from: 'BOM',
      fromCity: 'Mumbai',
      to: 'GOI',
      toCity: 'Goa',
      price: 4324,
      airline: 'IndiGo',
      duration: '1h 30m',
      departure: '08:45',
      arrival: '10:15',
      aircraft: 'A320',
      type: 'Nonstop',
      category: 'Economy',
      stops: 0,
      isDirect: true,
       

     "titles": "Baga Beach",
       "imagess": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
        "ratinggg":4.3,
       "like":  "Beach",
       "descriptions": "Popular beach with water sports and nightlife",

         "hotelName": "Taj Exotica Resort & Spa",
       "hotelImage":  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
        "hotelRating": 4.8,
        "hotelPrice":  "₹15,000/night",
       "hotelType":  "Luxury Resort",


       "restarentsName": "Thalassa",
        "restarentsImages": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
       " restarentsRating": 4.5,
        "restarentsCuisine": "Greek, Seafood",
        "restarentsPrices": "₹₹₹",

  
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "city": "goa",
     " categories": ["Beaches", "Nightlife", "Food & Drink", "Adventure Sports", "Heritage"],
     "flag":[flag1],
          "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
         "amenitie": ["restaurantMenu", "restaurentWaiter", "restaurantEat"],
        "isAvailable": true,
       

    "__v": 0}, 
    
    {"_id": "67f76393197ac559e4089b73",


   " description": "East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese heritage",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop",
   " ratingg": 4.5,


      from: 'DEL',
      fromCity: 'Delhi',
      to: 'GOI',
      toCity: 'Goa',
      price: 5849,
      airline: 'Air India',
      duration: '2h 45m',
      departure: '14:30',
      arrival: '17:15',
      aircraft: 'Boeing 737',
      type: 'Nonstop',
      category: 'Economy',
      stops: 0,
      isDirect: true,

     "titles": "Anjuna Market",
       "imagess": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
        "ratinggg": 4.1,
       "like":  "Shopping",
       "descriptions": "Famous flea market with local crafts",


         "hotelName": "The Leela Goa",
       "hotelImage":  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop",
        "hotelRating": 4.7,
        "hotelPrice":  "₹12,000/night",
       "hotelType":  "Luxury Resort",


       "restarentsName": "La Plage",
        "restarentsImages": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop",
       " restarentsRating": 4.6,
        "restarentsCuisine": "French, Continental",
        "restarentsPrices": "₹₹₹₹",

    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "city": "goa",
     " categories": ["Beaches", "Nightlife", "Food & Drink", "Adventure Sports", "Heritage"],
          "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
         "amenitie": ["restaurantMenu", "restaurentWaiter", "restaurantEat"],      
        "isAvailable": true,
    "__v": 0}, 
    
    {"_id": "67f76393197ac559e4089b73",
   " description ": "East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese heritage",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop",
     " ratingg": 4.5,
   
      from: 'BLR',
      fromCity: 'Bangalore',
      to: 'GOI',
      toCity: 'Goa',
      price: 5989,
      airline: 'SpiceJet',
      duration: '1h 45m',
      departure: '11:20',
      arrival: '13:05',
      aircraft: 'Boeing 737',
      type: 'Nonstop',
      category: 'Economy',
      stops: 0,
      isDirect: true,

     "titles": "Dudhsagar Falls",
       "imagess": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop",
        "ratinggg": 4.6,
       "like":  "Nature",
       "descriptions": "Spectacular four-tiered waterfall",


         "hotelName": "Grand Hyatt Goa",
       "hotelImage":  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
        "hotelRating": 4.6,
        "hotelPrice":  "₹10,000/night",
       "hotelType":  "Luxury Resort",

       "restarentsName": "Gunpowder",
        "restarentsImages": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
       " restarentsRating": 4.4,
        "restarentsCuisine": "South Indian, Regional",
        "restarentsPrices": "₹₹₹",

    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "city": "goa",
     " categories": ["Beaches", "Nightlife", "Food & Drink", "Adventure Sports", "Heritage"],
          "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
         "amenitie": ["restaurantMenu", "restaurentWaiter", "restaurantEat"],
        "isAvailable": true,
    "__v": 0},
    
    {"_id": "67f76393197ac559e4089b73",

   " description ": "East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese heritage",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop",
   " ratingg": 4.5,


     "titles": "Basilica of Bom Jesus",
       "imagess": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
        "ratinggg": 4.7,
       "like":  "Heritage",
       "descriptions": "UNESCO World Heritage Site housing St. Francis Xavier's remains",


         "hotelName": "W Goa",
       "hotelImage":  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop",
        "hotelRating": 4.5,
        "hotelPrice":  "₹14,000/night",
       "hotelType":  "Luxury Resort",


       "restarentsName": "Pousada by the Beach",
        "restarentsImages": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop",
       " restarentsRating": 4.3,
        "restarentsCuisine": "Goan, Portuguese",
        "restarentsPrices": "₹₹₹",

    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "city": "goa",
     " categories": ["Beaches", "Nightlife", "Food & Drink", "Adventure Sports", "Heritage"],
       "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
         "amenitie": ["restaurantMenu", "restaurentWaiter", "restaurantEat"],
        "isAvailable": true,
         "__v": 0}, 
    
    {"_id": "67f76393197ac559e4089b73",


   " description ": "East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese heritage",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop",
   " ratingg": 4.5,
    

      from: 'CCU',
      fromCity: 'Kolkata',
      to: 'GOI',
      toCity: 'Goa',
      price: 6030,
      airline: 'Vistara',
      duration: '2h 30m',
      departure: '16:10',
      arrival: '18:40',
      aircraft: 'A320neo',
      type: 'Nonstop',
      category: 'Economy',
      stops: 0,
      isDirect: true,

     "titles": "Calangute Beach",
       "imagess": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
        "ratinggg": 4.2,
       "like":  "Beach",
       "descriptions": "Queen of beaches with golden sands and water sports",

         "hotelName": "Casa Anjuna",
       "hotelImage":  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop",
        "hotelRating": 4.2,
        "hotelPrice":  "₹3,500/night",
       "hotelType":  "Boutique Hotel",

       "restarentsName": "Fisherman's Wharf",
        "restarentsImages": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop",
       " restarentsRating": 4.3,
        "restarentsCuisine": "Goan, Continental",
        "restarentsPrices": "₹₹",

    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "city": "goa",
     " categories": ["Beaches", "Nightlife", "Food & Drink", "Adventure Sports", "Heritage"],
          "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
         "amenitie": ["restaurantMenu", "restaurentWaiter", "restaurantEat"],
        "isAvailable": true,       
    "__v": 0},
    
    {"_id": "67f76393197ac559e4089b73",
    " description ": "East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese heritage",
     "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop",
    " ratingg": 4.5,


      from: 'HYD',
      fromCity: 'Hyderabad',
      to: 'GOI',
      toCity: 'Goa',
      price: 6433,
      airline: 'GoAir',
      duration: '1h 55m',
      departure: '09:30',
      arrival: '11:25',
      aircraft: 'A320',
      type: 'Nonstop',
      category: 'Economy',
      stops: 0,
      isDirect: true,


     "titles": "Fort Aguada",
       "imagess": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
        "ratinggg": 4.4,
       "like":  "Heritage",
       "descriptions": "17th-century Portuguese fort with lighthouse",

         "hotelName": "Alila Diwa Goa",
       "hotelImage":  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
        "hotelRating": 4.4,
        "hotelPrice":  "₹8,500/night",
       "hotelType":  "Luxury Resort",


       "restarentsName": "Britto's",
        "restarentsImages": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
       "restarentsRating": 4.1,
        "restarentsCuisine": "Goan, Seafood",
        "restarentsPrices": "₹₹",

    "name": "inan Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "city": "goa",
     " categories": ["Beaches", "Nightlife", "Food & Drink", "Adventure Sports", "Heritage"],
          "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
         "amenitie": ["restaurantMenu", "restaurentWaiter", "restaurantEat"],
        "isAvailable": true,
    "__v": 0},
    {"_id": "67f76393197ac559e4089b73",

   " description ": "East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese heritage",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop",
   " ratingg": 4.5,

      from: 'MAA',
      fromCity: 'Chennai',
      to: 'GOI',
      toCity: 'Goa',
      price: 7001,
      airline: 'IndiGo',
      duration: '2h 15m',
      departure: '12:45',
      arrival: '15:00',
      aircraft: 'A321',
      type: 'Nonstop',
      category: 'Economy',
      stops: 0,
      isDirect: true,

     "titles": "Palolem Beach",
       "imagess": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
        "ratinggg":  4.5,
       "like":  "Beach",
      "descriptions ": "Crescent-shaped beach perfect for relaxation",
       
         "hotelName": "Casa Anjuna",
       "hotelImage":  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop",
        "hotelRating": 4.2,
        "hotelPrice":  "₹3,500/night",
      "hotelType": "Boutique Hotel",
       
       "restarentsName": "Sublime",
        "restarentsImages": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop",
       " restarentsRating":4.4,
        "restarentsCuisine": "Continental, Asian",
        "restarentsPrices": "₹₹₹",

    "name": "inan Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "city": "goa",
     " categories": ["Beaches", "Nightlife", "Food & Drink", "Adventure Sports", "Heritage"],
          "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
         "amenitie": ["restaurantMenu", "restaurentWaiter", "restaurantEat"],
        "isAvailable": true,
    "__v": 0},


{
    "_id": "67f76393197ac559e3489b75",
   "description": "East meets West in this sun-soaked state, where Indian culture intertwines with Portuguese heritage",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop",
   " ratingg": 4.5,

     "titles": "Baga Beach",
       "imagess": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
        "ratinggg": 4.3,
       "like": "Beach",
       "descriptions": "Popular beach with water sports and nightlife",

         "hotelName": "Taj Exotica Resortt",
       "hotelImage": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
        "hotelRating": 4.8,
        "hotelPrice": "₹15,000/night",
       "hotelType": "Luxury Resort",
      
       "restarentsName": "Thalassa",
        "restarentsImages": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
       " restarentsRating": 4.5,
        "restarentsCuisine": "Greek, Seafood",
        "restarentsPrices": "₹₹₹",

 from: 'BOM',
      fromCity: 'Mumbai',
      to: 'New',
      toCity: 'New York',
      price: 4324,
      airline: 'IndiGo',
      duration: '1h 30m',
      departure: '08:45',
      arrival: '10:15',
      aircraft: 'A320',
      type: 'Nonstop',
      category: 'Economy',
      stops: 0,
      isDirect: true,

    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "flag":[flag2],
    "city": "kerala,india",
    " categories": ["Beaches", "Nightlife", "Food & Drink", "Adventure Sports", "Heritage"],
     "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "amenitie": ["restaurantMenu", "restaurentWaiter", "restaurantNoodle"],
        "isAvailable": true,
    "__v": 0}
,]

 export const popularAirlines = [
    {
      _id: 'AL001',
      name: 'IndiGo',
      logo: '🛩️',
      rating: 4.2,
      reviews: 1542,
      routes: 'Multiple Airlines',
      description: 'India\'s largest airline by passengers carried and fleet size.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      _id: 'AL002',
      name: 'Air India',
      logo: '✈️',
      rating: 4.0,
      reviews: 1205,
      routes: 'Multiple Airlines',
      description: 'The flag carrier airline of India with extensive network.',
      color: 'from-red-500 to-orange-600'
    },
    {
      _id: 'AL003',
      name: 'SpiceJet',
      logo: '🛫',
      rating: 4.1,
      reviews: 980,
      routes: 'Multiple Airlines',
      description: 'Low-cost airline known for affordable fares and good service.',
      color: 'from-yellow-500 to-red-600'
    },
    {
      _id: 'AL004',
      name: 'Vistara',
      logo: '🛬',
      rating: 4.4,
      reviews: 856,
      routes: 'Multiple Airlines',
      description: 'Premium airline offering superior service and comfort.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

































