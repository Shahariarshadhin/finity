import Image from "next/image";

const ControlPlace = () => {
  return (
    <div>
      <h1 className="text-[#1D293F] text-[40px] lg:text-[58px] font-bold text-center">
        Control everything <br /> in a single place.
      </h1>

      <div className="flex justify-center relative">
        <Image src="/control/Bitmap.png" alt="logo" width={610} height={400} />
        <div className="absolute right-0 lg:right-56 top-24">
        <Image src="/control/Bitmap2.png" alt="logo" width={219} height={95} />
        </div>
        <div className="w-[193px] absolute bg-white bottom-20 left-0 lg:left-64 rounded-sm">
            <h1>Meeting with John</h1>
            <p>11:15am, Sep 10, Sunday</p>
            <p>Agenda:</p>
            <p>How to get more customers for your ecommerce business</p>
            
        </div>
      </div>
    </div>
  );
};

export default ControlPlace;
