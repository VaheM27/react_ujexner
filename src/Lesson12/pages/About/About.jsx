import AboutSection from "../../components/AboutSection/AboutSection";
import { PageHeader } from "../../components/Main";

export const About = () => {
  return (
    <div>
      <PageHeader heading="Մեր մասին" page="Մեր մասին" path="/about-us" />
      <AboutSection />
    </div>
  );
};
