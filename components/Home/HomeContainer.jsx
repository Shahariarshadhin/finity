import GrowBusiness from "./assets/GrowBusiness";
import HomeHero from "./assets/HomeHero";
import MeetClients from "./assets/MeetClients";
import UserRating from "./assets/UserRating";

const HomeContainer = () => {
  return (
    <div className="container mx-auto ">
      <HomeHero />
      <UserRating />
      <GrowBusiness/>
      <MeetClients/>
    </div>
  );
};

export default HomeContainer;
