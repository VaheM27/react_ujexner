import "./Register.css";

const Register = () => {
  return (
    <div className="formMain">
      <div className="formBox">
        <h2>What can us do for you?</h2>
        <p>We are ready to work on a project of any complexity, whether it's commercial or residential.</p>
        <form action="submit">
          <input type="text" placeholder="Your Name" />
          <input type="mail" placeholder="Email" />
          <input type="text" placeholder="Reason for Contacting" />
          <input type="text" placeholder="Phone" />
          <textarea name="message" id="message" placeholder="Message"></textarea>
        </form>
        <p className="txt">
          <span>*</span> indicates a required field
        </p>
        <button className="subBtn">Submit</button>
      </div>
    </div>
  );
};

export default Register;