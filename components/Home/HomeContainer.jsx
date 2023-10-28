import GrowBusiness from "./assets/GrowBusiness";
import HomeHero from "./assets/HomeHero";
import MeetClients from "./assets/MeetClients";
import UserRating from "./assets/UserRating";
import WorkingInstappoint from "./assets/WorkingInstappoint";

const HomeContainer = () => {
  return (
    <div className="container mx-auto ">
      <HomeHero />
      <UserRating />
      <WorkingInstappoint/>
      <GrowBusiness/>
      <MeetClients/>
    </div>
  );
};

export default HomeContainer;
