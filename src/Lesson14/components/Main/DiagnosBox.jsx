export const DiagnosBox = ({ src, alt, className, title, value, status }) => {
  return (
    <div className={`diagnosBox ${className}`}>
      <img src={src} alt={alt} />
      <h5>{title}</h5>
      <p>{value}</p>
      <span>{status}</span>
    </div>
  );
};
