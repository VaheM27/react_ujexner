import FeatureSection from "../../components/FeatureSection/FeatureSection";
import { PageHeader } from "../../components/Main";

export const Features = () => {
  return (
    <div className="Features">
      <PageHeader
        heading="Առավելություններ"
        page="Առավելություններ"
        path="/features"
      />
      <div className="container">
        <FeatureSection />
      </div>
    </div>
  );
};
