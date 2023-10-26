import Image from "next/image";

const MeetClients = () => {
  return (
    <div className="my-[100px]">
      <div className="space-y-[-20px] mb-[60px]">
        <h1 className="text-[#1D293F] text-[48px] font-bold">
          Meet with clients
        </h1>
        <h1 className="text-[#1D293F] text-[48px] font-bold">
          anytime, anywhere.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-10 lg:mb-0 h-full w-full">
          <Image className="" src="/meetClients.png" alt="logo" width={500} height={100} />
        </div>
        <div className="w-[425px]">
          <p className="mb-4">
            Computer users and programmers have become so accustomed to using
            Windows, even for the changing capabilities and the appearances of
            the graphical interface of the versions, therefore it has remained
            Microsoft’s product.
          </p>

          <p>
            These companies release their own versions of the operating systems
            with minor changes, and yet always with the same bottom line.
          </p>

          <button className="flex items-center my-[35px] bg-[#258AFF] px-[24px] py-[18px] rounded-[5px] text-white text-[16px] font-medium">
            Get Started for Free
          </button>

          <p className="text-[#7C8087] text-[13px]">“The following article covers a topic that has recently moved to center stage–at least it seems that way. If you’ve been thinking you need to know more about unconditional love, here’s your opportunity.”</p>
          <p className="mt-5 text-[1D293F] text-[13px]">
          John Doe, Founder of Matrix
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetClients;
