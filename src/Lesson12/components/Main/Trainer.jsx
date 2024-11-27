export const Trainer = ({ src, alt, name, course, pos }) => {
  return (
    <div className="trainer">
      <img src={src} alt={alt} />
      <p>{name}</p>
      <h3>{course}</h3>
      <span>{pos}</span>
    </div>
  );
};
