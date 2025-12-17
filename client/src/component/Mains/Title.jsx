import React from 'react'

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
      <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] ${font || "font-playfair"}`}>
        {title}
      </h1>
      {subTitle && (
        <p className='text-sm sm:text-base text-gray-500/90 mt-2 max-w-full sm:max-w-2xl lg:max-w-3xl px-4 sm:px-0'>
          {subTitle}
        </p>
      )}
    </div>
  )
}

export default Title