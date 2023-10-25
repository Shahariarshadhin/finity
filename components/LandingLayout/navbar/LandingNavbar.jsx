import Image from "next/image"
import Link from "next/link"

const LandingNavbar = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between items-center">
        <div>
           
          <Image src="/logo.png" alt="logo" width={103} height={28}/>
        </div>
        <div className="flex justify-between gap-10">
            <Link href="#">Demos</Link>
            <Link href="#">Pages</Link>
            <Link href="#">Support</Link>
        </div>
        <div className="flex items-center bg-[#258AFF] px-[15px] py-[16px] rounded-[5px] text-white text-[16px] font-medium">Get Started for Free</div>
      </div>
    </div>
  )
}

export default LandingNavbar