
'use client'
import React, { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";


 const Slider : React.FC = () => {
    const images = [
        "https://www.booz.cl/_next/image?url=https%3A%2F%2Fd3w3u0f6pasxxu.cloudfront.net%2Foptimized%2F1456d24c0043138f0358882426c2b39c-3x.jpeg&w=2048&q=75",
        "https://www.booz.cl/_next/image?url=https%3A%2F%2Fd3w3u0f6pasxxu.cloudfront.net%2Foptimized%2F2f0f36dffe62f47955d3b28c280274e4-3x.jpeg&w=2048&q=75",
        "https://www.booz.cl/_next/image?url=https%3A%2F%2Fd3w3u0f6pasxxu.cloudfront.net%2Foptimized%2F5c591286603e42877bf37c6cb72d7db7-3x.jpeg&w=2048&q=75",
        "https://www.booz.cl/_next/image?url=https%3A%2F%2Fd3w3u0f6pasxxu.cloudfront.net%2Foptimized%2F193e2f41e9d40bf427228d72d84012ef-3x.jpeg&w=2048&q=75",
    ];

    const [currentIndex, setCurrentIndex] = useState(1);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="h-[90%] w-[100%] flex mx-auto rounded-lg overflow-hidden">
            {/* slider de 4 imagenes */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
                <button
                onClick={handlePrevClick}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white hover:text-blue-300 font-bold py-2 px-4 rounded-l"
                    
                >
                    <BsFillArrowLeftCircleFill size={30} />
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white hover:text-blue-300 font-bold py-2 px-4 rounded-r"
                    onClick={handleNextClick}
                >
                    <BsFillArrowRightCircleFill size={30} />
                </button>
            </div>
        </div>
    );
}

export default Slider;