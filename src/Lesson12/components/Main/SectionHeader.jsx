export const SectionHeader = ({ heading2, text, bold }) => {
  return (
    <div className="container sectionHeader">
      <h2 style={{ textAlign: "center" }}>
        {heading2}
        <span>{bold}</span>
      </h2>
      <p className="line">{text}</p>
    </div>
  );
};
