import Footer from "./footer/Footer";
import LandingNavbar from "./navbar/LandingNavbar";


const LandingLayout = (props) => {
  return (
    <div className="min-h-screen">
      <LandingNavbar/>
      <main>{props.children}</main>
      <Footer/>
    </div>
  );
};

export default LandingLayout;