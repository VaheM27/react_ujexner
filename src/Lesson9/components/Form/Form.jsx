import "./Form.scss";

const Form = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <input type="text" id="name" required placeholder="Name" />
      <input type="text" id="surname" required placeholder="Surname" />
      <input type="text" id="username" required placeholder="Username" />
      <input type="password" id="password" required placeholder="Password" />
      <input type="submit" className="button" />
    </form>
  );
};

export default Form;
