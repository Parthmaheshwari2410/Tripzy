import React from 'react'
import { testimonials } from '../../assets/assets.js'
import StarRating from '../Hotels/StarRating.jsx'
import Title from './Title.jsx'

const Testimonial = () => {
    return (
        <div className='flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-slate-50 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24'>
            <Title
                title='What Our Guests Say'
                subTitle='Discover why discerning travelers choose Tripzy for their luxury accommodations around the world.'
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20 w-full">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <div className="min-w-0">
                                <p className="font-playfair text-lg sm:text-xl truncate">{testimonial.name}</p>
                                <p className="text-sm text-gray-500 truncate">{testimonial.address}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 mt-3 sm:mt-4">
                            <StarRating />
                        </div>

                        <p className="text-sm sm:text-base text-gray-500 mt-3 sm:mt-4 line-clamp-4">
                            "{testimonial.review}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Testimonial