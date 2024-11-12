const ReputationBlock = ({ name, icon, desc }) => {
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/icons/${icon}`}
        alt="Reputation Icon"
        title="Reputation Title"
      />
      <h1>{name}</h1>
      <p>{desc}</p>
    </>
  );
};

export default ReputationBlock;
