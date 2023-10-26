import { TextField } from "@mui/material";

const Footer = () => {
  return (
    <div className="container mx-auto mb-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="space-y-3">
          <h1 className="text-[18px] font-medium text-[#1D293F]">Community</h1>
          <p className="cursor-pointer">For Talents</p>
          <p className="cursor-pointer">For Companies</p>
          <p className="cursor-pointer">Facebook Group</p>
          <p className="cursor-pointer">FAQ</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-[18px] font-medium text-[#1D293F]">About Us</h1>
          <p className="cursor-pointer">Meet the Team</p>
          <p className="cursor-pointer">Our Story</p>
          <p className="cursor-pointer">Career</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-[18px] font-medium text-[#1D293F]">Useful</h1>
          <p className="cursor-pointer">Free Resume Builder</p>
          <p className="cursor-pointer">Free Graphics</p>
          <p className="cursor-pointer">Career Blog</p>
        </div>

        <div className="space-y-3">
          <h1 className="text-[18px] font-medium text-[#1D293F]">Subscribe to Our Newsletter</h1>
          <p>
            Time is the most precious thing you have when bootstrapping. You
            can`t take time.
          </p>
          <div className="flex gap-4">
          <TextField label="Enter your email" variant="outlined" />
          <button className="flex items-center bg-[#258AFF] px-[24px] py-[16px] rounded-[5px] text-white text-[16px] font-medium">
          Subscribe
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
