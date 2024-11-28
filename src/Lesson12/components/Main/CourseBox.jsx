export const CourseBox = ({ src, alt, title, duration, price }) => {
  return (
    <div className="courseBox">
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>Դասընթաց</p>
      <button>Դիտել</button>
      <div className="c-b-bottom">
        <span>{duration}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};
