export const Button = ({
  social,
  link,
  content,
  src,
  type,
  alt,
  className,
  func,
  target,
}) => {
  return (
    <>
      {social ? (
        <a href={link} className={className} target={target}>
          {content ? content : <img src={src} alt={alt} />}
        </a>
      ) : (
        <button type={type} className={className} onClick={func}>
          {content}
        </button>
      )}
    </>
  );
};
