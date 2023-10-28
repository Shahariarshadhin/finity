import Image from "next/image";
import HEROIMG from "../@media/heroimg.png"

const HomeHero = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row mt-[80px]">
      <div>
        <h1 className="text-[#1D293F] text-[40px] lg:text-[70px]  font-bold leading-[70px] ">
          Get valuable <br /> leads inside
          <br /> WordPress.
        </h1>
        <p className="my-[26px] text-[21px]">
          We’ve helped over 2,500 job seekers to get <br /> into the most
          popular tech teams.
        </p>

        <button className="flex items-center bg-[#258AFF] px-[16px] py-[22px] rounded-[5px] text-white text-[16px] font-medium">
          Get Started for Free
        </button>

        <p className="mt-[30px]">
          Still confused?{" "}
          <span className="text-[#258AFF] text-[16px] ">
            Check our 1 min video
          </span>
        </p>
      </div>

      <div className="relative">
      <Image src={HEROIMG} alt="logo"  width={610} height={400}/>
      </div>
    </div>
  );
};

export default HomeHero;
