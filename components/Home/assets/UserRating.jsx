import { Rating } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';

const UserRating = () => {

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-[152px] text-center lg:text-left ">
      
        <div className="py-6">
          <h1 className="text-[#1D293F] font-bold text-[40px]">10k</h1>
          <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
          <p>Active Downloads</p>
          <p className="text-[#258AFF]">On Websites</p>
        </div>
        <div className="py-6">
          <h1 className="text-[#1D293F] font-bold text-[40px]">4.7</h1>
          <Rating name="half-rating" defaultValue={5} precision={0.5} />
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
