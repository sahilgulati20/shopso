import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import ServiceInfo from "./components/ServiceInfo";
import CategorySlider from "./components/CategorySlider";
import TrendingNow from "./components/TrendingNow";
import PromoCards from "./components/PromoCards";

function App() {
  return (
    <>
      <Navbar />
      <HomeHero />

      <CategorySlider />
      <TrendingNow />
      <PromoCards />
      <ServiceInfo />
    </>
  );
}

export default App;
