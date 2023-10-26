import Image from "next/image";

const GrowBusiness = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-[#1D293F] text-[48px] font-bold mb-12">
          Grow your <br /> business fast.
        </h1>

        <div className=" space-y-8">
          <div className="flex items-center gap-7">
            icon
            <div>
              <h1 className="text-[#1D293F] text-[21px] font-bold mb-2">
                Find better leads
              </h1>
              <p className="text-[16px] text-[#7C8087]">
                We receive over 50 new job <br /> submission at our website.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-7">
            icon
            <div>
              <h1 className="text-[#1D293F] text-[21px] font-bold mb-2">
                Set instant meeting
              </h1>
              <p className="text-[16px] text-[#7C8087]">
                We receive over 50 new job <br /> submission at our website.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-7">
            icon
            <div>
              <h1 className="text-[#1D293F] text-[21px] font-bold mb-2">
                Get paid seemlessly
              </h1>
              <p className="text-[16px] text-[#7C8087]">
                We receive over 50 new job <br /> submission at our website.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Image className="" src="/growbusniess.png" alt="logo" width={500} height={100} />
      </div>
    </div>
  );
};

export default GrowBusiness;
