import ControlPlace from "./assets/ControlPlace";
import CustomerReview from "./assets/CustomerReview";
import GrowBusiness from "./assets/GrowBusiness";
import HomeHero from "./assets/HomeHero";
import MeetClients from "./assets/MeetClients";
import UserRating from "./assets/UserRating";
import WorkingInstappoint from "./assets/WorkingInstappoint";

const HomeContainer = () => {
  return (
    <div className="">
      <div className="container mx-auto  ">
        <HomeHero />
        <UserRating />
        <WorkingInstappoint />
        <ControlPlace />
        <GrowBusiness />
        <MeetClients />
        <CustomerReview />
      </div>
    </div>
  );
};

export default HomeContainer;
