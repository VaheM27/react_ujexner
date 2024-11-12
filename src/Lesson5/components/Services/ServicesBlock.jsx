const ServicesBlock = ({ name, icon }) => {
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/icons/${icon}`}
        alt="Service Icon"
        title="Service Title"
      />
      <hr></hr>
      <h1>{name}</h1>
    </>
  );
};

export default ServicesBlock;
