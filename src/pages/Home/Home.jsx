import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Pricing from "../../components/Pricing/Pricing";
import Coaches from "../../components/Coaches/Coaches";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Pricing />
      <Coaches />
      <Footer />
    </>
  );
};

export default Home;
