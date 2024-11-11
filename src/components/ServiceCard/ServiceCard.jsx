import "./ServiceCard.css";

const ServiceCard = ({ icon, serviceName }) => {
  return (
    <div className="serviceCard">
      <img src={icon} alt="Service Icon" className="serviceCardImg" />
      <hr />
      <h3 className="serviceName">{serviceName}</h3>
    </div>
  )
}

export default ServiceCard;