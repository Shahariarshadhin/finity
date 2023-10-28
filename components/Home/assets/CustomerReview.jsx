import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { useState, useEffect } from 'react';

const CustomerReview = () => {
  const CustomerReview = [
    {
      img: <Image src="/customerreview/Oval.png" alt="logo"  width={60} height={60}/>,
      review:
        "I owe these guys my life. Already used their landing page templates for my latest two projects.",
        name: "- @thepatwalls"
    },
    {
      img: <Image src="/customerreview/Oval (1).png" alt="logo"  width={60} height={60}/>,
      review:
        "I owe these guys my life. Already used their landing page templates for my latest two projects.",
        name: "- @thepatwalls"
    },
    {
      img: <Image src="/customerreview/Oval (2).png" alt="logo"  width={60} height={60}/>,
      review:
        "I owe these guys my life. Already used their landing page templates for my latest two projects.",
        name: "- @thepatwalls"
    },
    {
      img: <Image src="/customerreview/Oval (3).png" alt="logo"  width={60} height={60}/>,
      review:
        "I owe these guys my life. Already used their landing page templates for my latest two projects.",
        name: "- @thepatwalls"
    },
    {
      img: <Image src="/customerreview/Oval.png" alt="logo"  width={60} height={60}/>,
      review:
        "I owe these guys my life. Already used their landing page templates for my latest two projects.",
        name: "- @thepatwalls"
    },
    {
      img: <Image src="/customerreview/Oval (1).png" alt="logo"  width={60} height={60}/>,
      review:
        "I owe these guys my life. Already used their landing page templates for my latest two projects.",
        name: "- @thepatwalls"
    }
    
  ];

  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    // Check the window width to determine if navigation should be shown
    const handleResize = () => {
      setShowNavigation(window.innerWidth >= 640);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);


  return (
    <div className="my-[100px]">
      <h1 className="text-[#1D293F] text-[40px] lg:text-[58px] font-bold">
        1,000+ customers are <br /> loving Instappoint.
      </h1>
      <Swiper
        cssMode={true}
        navigation={showNavigation}
        slidesPerView={1} // Show one slide at a time on small screens
        spaceBetween={30}
        freeMode={true}
        speed={1500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className="mySwiper "
        breakpoints={{
          // Set breakpoints to change the number of visible slides
          640: {
            slidesPerView: 4, // Show four slides on screens wider than 640px
          },
        }}
      >
        {CustomerReview.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="text-black bg-[#F7F7F8]  mb-8 rounded-md">
              <div className="flex flex-col  p-2 py-8 lg:py-0 xl:p-10">
                
                <div>
                {data.img}
                </div>

                <div className="mt-4">
                  
                  <p className="mt-8">{data.review}</p>
                  <p className="font-bold text-lg">{data.name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};

export default CustomerReview;


