import BrowseCarSlider from "../sliders/BrowseCar";
import BrowseLocationSlider from "../sliders/BrowseLocation";
import BrowseMakeSlider from "../sliders/BrowseMake";
import HomeHero from "./Hero";

const HomeBody: React.FC = () => {
  return (
    <>
      <HomeHero />
      <BrowseCarSlider />
      <br />
      <BrowseMakeSlider />
      <br />
      <BrowseLocationSlider />
    </>
  );
};

export default HomeBody;
