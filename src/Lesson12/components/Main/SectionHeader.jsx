export const SectionHeader = ({ heading2, text, bold, className }) => {
  return (
    <div className={`container ${className}`}>
      <h2>
        {heading2}
        <span>{bold}</span>
      </h2>
      <p className="line">{text}</p>
    </div>
  );
};
