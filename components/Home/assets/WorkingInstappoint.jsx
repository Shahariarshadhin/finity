import Image from "next/image";

const WorkingInstappoint = () => {
  return (
    <div>
      <h1 className="text-[#1D293F] text-[40px] lg:text-[58px] font-bold text-center">Working with <br/> Instappoint is simple.</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-[100px] ">
        <div className="mx-10">
          <div className="flex ">
            <div>
              <Image
                className=""
                src="/workinginsta/ICON.png"
                alt="logo"
                width={97}
                height={97}
              />
            </div>
            <div>
              <Image
                className="mt-[25px]"
                src="/workinginsta/Arrow.png"
                alt="logo"
                width={273}
                height={273}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#1D293F] text-2xl font-bold">Find Leads</h1>
            <p className="text-[#7C8087] text-base">
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </p>
          </div>
        </div>

        <div>
          <div className="flex">
            <div>
              <Image
                className="mt-[75px]"
                src="/workinginsta/Group 7.png"
                alt="logo"
                width={97}
                height={97}
              />
            </div>
            <div>
              <Image
                className=""
                src="/workinginsta/Arrow copy.png"
                alt="logo"
                width={273}
                height={273}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#1D293F] text-2xl font-bold">
              Book Appointments
            </h1>
            <p className="text-[#7C8087] text-base">
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </p>
          </div>
        </div>

        <div>
          <div className="flex ">
            <div>
              <Image
                className="mt-[144px]"
                src="/workinginsta/Group 8.png"
                alt="logo"
                width={83}
                height={89}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#1D293F] text-2xl font-bold">Get Paid</h1>
            <p className="text-[#7C8087] text-base">
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingInstappoint;
