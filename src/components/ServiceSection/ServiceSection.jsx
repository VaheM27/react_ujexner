import ServiceCard from "../ServiceCard/ServiceCard";
import { serviceData } from "../../constants/ServiceData";

import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <div className="serviceSection">
      <h2 className="serviceHeading">Services</h2>
      <div className="serviceCards">
        {serviceData.map((element) => {
          return <ServiceCard icon={element.img} serviceName={element.name} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
