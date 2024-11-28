import AboutSection from "../../components/AboutSection/AboutSection";
import CourseSection from "../../components/CourseSection/CourseSection";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Header from "../../components/Header/Header";
import StaffSection from "../../components/StaffSection/StaffSection";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <CourseSection courseSec="courseSec" courseSection="courseSection" />
      <FeatureSection />
      <StaffSection className="bgsilver" />
      <AboutSection />
    </div>
  );
};
