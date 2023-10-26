import Image from "next/image";

const UserRating = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-[152px] text-center lg:text-left ">
      
        <div className="py-6">
          <h1 className="text-[#1D293F] font-bold text-[40px]">10k</h1>
          <p>Love</p>
          <p>Active Downloads</p>
          <p className="text-[#258AFF]">On Websites</p>
        </div>
        <div className="py-6">
          <h1 className="text-[#1D293F] font-bold text-[40px]">4.7</h1>
          <p>Rating</p>
          <p>1,938 Rating</p>
          <p className="text-[#258AFF]">WordPress Community</p>
        </div>
     
      <div className="flex flex-col">
        <p className="text-[#1D293F] font-bold text-[20px]">
          Trusted by 25,000+ happy <br /> Marketers and WordPress <br /> users
          since 2018.
        </p>
        <p className="my-[40px] text-[#7C8087] text-[18px]">Also featured in</p>
        <div className="grid grid-cols-3">
        <Image src="/userrating/logo-4.png" alt="logo"  width={60} height={60}/>
        <Image src="/userrating/logo-3.png" alt="logo"  width={60} height={60}/>
        <Image src="/userrating/logo-2.png" alt="logo"  width={60} height={60}/>
      
        </div>
      </div>
    </div>
  );
};

export default UserRating;
