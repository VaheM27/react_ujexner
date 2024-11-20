import "./FormBox.scss";

const FormBox = ({ foo }) => {
  return (
    <div className="formBox">
      <form onSubmit={foo}>
        <input required id="fname" type="text" placeholder="First Name" />
        <input required id="lname" type="text" placeholder="Last Name" />
        <input required id="email" type="email" placeholder="Email" />
        <input required id="pass" type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormBox;
