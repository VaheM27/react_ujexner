const ReputationBox = ({ src, alt, title, text }) => {
  return (
    <div className="reputationBox">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ReputationBox;
