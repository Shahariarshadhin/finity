// import Image from "next/image"
// import Link from "next/link"

// const LandingNavbar = () => {
//   return (
//     <div className="container mx-auto py-4">
//       <div className="flex justify-between items-center">
//         <div>

//           <Image src="/logo.png" alt="logo" width={103} height={28}/>
//         </div>
//         <div className="flex justify-between gap-10">
//             <Link href="#">Demos</Link>
//             <Link href="#">Pages</Link>
//             <Link href="#">Support</Link>
//         </div>
//         <div className="flex items-center bg-[#258AFF] px-[15px] py-[16px] rounded-[5px] text-white text-[16px] font-medium">Get Started for Free</div>
//       </div>
//     </div>
//   )
// }

// export default LandingNavbar

import Image from "next/image";
import Link from "next/link";
import MobileDrawer from "./LandingMobileDrawer";
import { useRouter } from "next/router";

const TopNavbar = () => {
  return (
    <>
      <nav className="top-0  w-full   border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
          <div className="flex justify-between  ">
            {/* <div className="">
              <Link href="/" className=" ">
                <Image
                  className="w-28"
                  src={LOGO}
                  alt="main_logo"
                  priority
                />
              </Link>
            </div> */}

            <div className="ml-3 flex items-center">
              <MobileDrawer />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export const NevagationLink = ({ url, text }) => {
  return <Link href={url}>{text}</Link>;
};

const LandingTopNavbar = () => {
  const router = useRouter();
  return (
    <nav className=" bg-white sticky top-0 z-10 ">
      <div className="container mx-auto">
        <div>
          <div
            className="lg:hidden flex  
         pt-5 pb-7 justify-between items-center 
          w-full px-2 "
          >
            <div>
              <Image src="/logo.png" alt="logo" width={103} height={28} />
            </div>
            <div className="text-3xl">
              <TopNavbar />
            </div>
          </div>

          <div
            className="hidden lg:block   px-2 
       py-[20px] container justify-between w-full top-0 bg-white z-10"
          >
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={103} height={28} />
              </Link>

              <div className=" ">
                <ul className=" lg:flex gap-[58px] font-medium">
                  <Link href="#">Demos</Link>
                  <Link href="#">Pages</Link>
                  <Link href="#">Support</Link>
                </ul>
              </div>
              <div className="flex gap-[14px]">
                <div className="flex items-center bg-[#258AFF] px-[15px] py-[16px] rounded-[5px] text-white text-[16px] font-medium">
                  Get Started for Free
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingTopNavbar;
