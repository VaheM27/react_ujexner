import ServiceCard from "../ServiceCard/ServiceCard";
import { serviceData } from "../../constants/serviceCardsData";

import "./ServiceSection.scss";

const ServiceSection = () => {
  return (
    <div className="serviceSection">
      <h2 className="serviceHeading">Services</h2>
      <div className="serviceCards">
        {serviceData.map((element, index) => {
          return <ServiceCard key={index} icon={element.img} serviceName={element.name} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
