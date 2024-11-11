const ServiceBox = ({ src, alt, title, style }) => {
  return (
    <div className="serviceBox" style={style}>
      <img src={src} alt={alt} />
      <div></div>
      <h3>{title}</h3>
    </div>
  );
};

export default ServiceBox;
