export const UserInput = ({ type, placeholder, readOnly, required, name }) => {
  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
};
