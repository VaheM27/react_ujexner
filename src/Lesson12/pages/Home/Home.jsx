import AboutSection from "../../components/AboutSection/AboutSection";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Header from "../../components/Header/Header";
import StaffSection from "../../components/StaffSection/StaffSection";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <FeatureSection />
      <StaffSection className="bgsilver" />
      <AboutSection />
    </div>
  );
};
