import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CallToAction from "../Cta/CallToAction";
import Faq from "../FAQ/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CallToAction></CallToAction>
      <Faq></Faq>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
