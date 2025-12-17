
import React, { useEffect, useMemo, useState } from 'react'
import StarRating from '../component/Hotels/StarRating'
import { useParams } from 'react-router-dom'
import { allData, assets, faciIcons, facilityIcons, rDetails, restaurantData, roomCommonData } from '../assets/assets'
import { useSelector } from 'react-redux'


const RestaurentDetails = () => {
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {

        const idParts = id.split('-');
        const originalId = idParts[0];
        const index = parseInt(idParts[idParts.length - 1]);

        const matchingRestaurants = allData.filter(restaurant => restaurant._id === originalId);
        const selectedRestaurant = matchingRestaurants[index] || matchingRestaurants[0];

        if (selectedRestaurant) {
            setRestaurant(selectedRestaurant);
            setMainImage(selectedRestaurant.rimage?.[0])
        }
    }, [id])
    const currency = useSelector((state) => state.currency)
    return restaurant && (

        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>{restaurant.restarentsName}<span className='font-inter text-sm'>
                    ({restaurant.diningType})  </span></h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>30% oFF</p>
            </div>

            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>

            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt='location-icon' />
                <span>{restaurant.address}</span>
            </div>

            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt='Restaurant Image'
                        className='w-full rounded-xl shadow-lg object-cover' />
                </div>

                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {restaurant?.rimage?.length > 1 && restaurant.rimage.map((image, index) => (
                        <img onClick={() => setMainImage(image)}
                            key={index} src={image} alt='Restaurant Image'
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                    ))}
                </div>
            </div>


            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Taste the destination, one bite at a time
                    </h1>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {restaurant.amenitie.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                                <img src={faciIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='texs-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className='text-2xl font-medium'> 5{currency}/dish</p>
            </div>

            <form className='bg-gradient-to-r  bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)]  p-6 md:p-8 rounded-xl mx-auto mt-16 max-w-6xl border border-gray-100'  >
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
                    <div className="mt-3  flex flex-wrap gap-6 ">
                        <img src={assets.logo2} alt="logo2" className={`h-9 `} />
                        {rDetails.map((spec, index) => (
                            <div key={index} className="flex items-start gap-3">

                                <img
                                    src={spec.icon}
                                    alt={`${spec.title}-icon`}
                                    className="w-6.5 mt-1 "
                                />

                                <div>
                                    <p className="text-base font-medium">
                                        {spec.title}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {spec.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col mr-20 gap-3 w-full md:w-auto' >
                        <button type='button' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-lg px-8 py-3.5 text-base font-medium cursor-pointer shadow-md w-full md:w-auto whitespace-nowrap'>
                            Reserve a Table
                        </button>
                        <button type='button' className='bg-white hover:bg-gray-50 active:scale-95 transition-all text-primary border-2 border-primary rounded-lg px-8 py-3.5 text-base font-medium cursor-pointer w-full md:w-auto whitespace-nowrap'
                            onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? 'Hide Menu' : 'View Menu'}
                        </button>
                    </div>
                </div>
            </form>

            {showMenu && (
                <div className='bg-white shadow-lg rounded-xl p-6 md:p-8 mx-auto mt-8 max-w-6xl border border-gray-200'>
                    <h2 className='text-2xl md:text-3xl font-playfair mb-6 text-center'>Our Menu</h2>

                    <div className='mb-8'>
                        <h3 className='text-xl font-semibold text-gray-950 mb-4 pb-2 border-b-2 border-gray-200'>Starters</h3>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Caesar Salad</p>
                                    <p className='text-sm text-gray-500'>Fresh romaine, parmesan, croutons</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$12</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Bruschetta</p>
                                    <p className='text-sm text-gray-500'>Toasted bread, tomatoes, basil</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$10</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Soup of the Day</p>
                                    <p className='text-sm text-gray-500'>Chef's special creation</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$8</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Spring Rolls</p>
                                    <p className='text-sm text-gray-500'>Crispy vegetables with sauce</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$9</span>
                            </div>
                        </div>
                    </div>

                    <div className='mb-8'>
                        <h3 className='text-xl font-semibold text-gray-950 mb-4 pb-2 border-b-2 border-gray-200'>Main Course</h3>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Grilled Salmon</p>
                                    <p className='text-sm text-gray-500'>With lemon butter sauce & vegetables</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$28</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Beef Tenderloin</p>
                                    <p className='text-sm text-gray-500'>Premium cut with mashed potatoes</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$35</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Pasta Carbonara</p>
                                    <p className='text-sm text-gray-500'>Creamy sauce with bacon</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$22</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Vegetable Risotto</p>
                                    <p className='text-sm text-gray-500'>Seasonal vegetables, parmesan</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$20</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Chicken Tikka Masala</p>
                                    <p className='text-sm text-gray-500'>Spicy curry with naan bread</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$24</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Pizza Margherita</p>
                                    <p className='text-sm text-gray-500'>Fresh mozzarella, tomato, basil</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$18</span>
                            </div>
                        </div>
                    </div>

                    <div className='mb-8'>
                        <h3 className='text-xl font-semibold text-gray-950  mb-4 pb-2 border-b-2 border-gray-200'>Desserts</h3>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Tiramisu</p>
                                    <p className='text-sm text-gray-500'>Classic Italian dessert</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$10</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Chocolate Lava Cake</p>
                                    <p className='text-sm text-gray-500'>With vanilla ice cream</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$12</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Cheesecake</p>
                                    <p className='text-sm text-gray-500'>New York style with berry sauce</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$11</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Ice Cream Sundae</p>
                                    <p className='text-sm text-gray-500'>Three scoops with toppings</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$8</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold text-gray-950  mb-4 pb-2 border-b-2 border-gray-200'>Beverages</h3>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Fresh Juice</p>
                                    <p className='text-sm text-gray-500'>Orange, apple, or mixed fruit</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$6</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Smoothies</p>
                                    <p className='text-sm text-gray-500'>Seasonal fruit blends</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$8</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Coffee/Tea</p>
                                    <p className='text-sm text-gray-500'>Espresso, cappuccino, or herbal tea</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$5</span>
                            </div>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='font-medium text-gray-800'>Soft Drinks</p>
                                    <p className='text-sm text-gray-500'>Cola, lemonade, iced tea</p>
                                </div>
                                <span className='text-gray-600 font-semibold'>$4</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-25 flex flex-col lg:flex-row gap-46 mb-20">
                <div className="space-y-4">
                    {restaurantData.map((spec, index) => (
                        <div key={index}>
                            <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6.5" />
                            <div>
                                <p className="text-base">{spec.title}</p>
                                <p className="text-gray-500">{spec.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl border-y border-gray-300 py-10 text-gray-500">
                    <p>Discover a thoughtfully crafted dining destination where great food, comfort, and a welcoming atmosphere come together to create a truly enjoyable experience for every guest. This restaurant is designed to offer a balance of taste, quality, and relaxation, making it an ideal choice for casual meals, family outings, friendly gatherings, or peaceful solo dining. The interiors are clean, modern, and inviting, with comfortable seating that encourages you to slow down and enjoy your time. The menu is carefully curated to cater to diverse preferences, featuring a range of flavorful dishes prepared using fresh, high-quality ingredients and consistent cooking standards. Every plate is served with attention to detail, focusing on taste, presentation, and portion satisfaction. Conveniently located near popular attractions and lively surroundings, the restaurant is easy to reach and fits perfectly into your day, whether you’re exploring the area or planning a dedicated dining stop. The ambiance remains calm and pleasant throughout the day, allowing guests to relax without feeling rushed.</p>
                </div>

            </div>

            <div className='flex flex-col lg:flex-row items-start gap-125'>
                <div className='flex flex-col items-start mt-4 gap-4 lg:w-1/2' >
                    <div className='flex gap-4'>
                        <img src={restaurant.owner} alt="host" className='h-14 w-14 md:h-14 md:w-14 rounded-full' />
                        <div>
                            <p className='text-lg md:text-xl'>Hosted by {restaurant.restarentsName}</p>
                            <div className='flex items-center mt-1'>
                                <StarRating />
                                <p className='ml-2'>200+ Reviews</p>
                            </div>
                        </div>
                    </div>
                    <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <iframe
                        className='w-60 h-40 rounded-xl shadow-lg border border-gray-200'
                        title={`Map of ${restaurant.restarentsName}`}
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(`${restaurant.restarentsName}`)}&output=embed`}
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>


        </div>
    )

}

export default RestaurentDetails