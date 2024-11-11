import "./Form.scss";

const Form = () => {
  return (
    <div className="formMain">
      <div className="formBox">
        <h4 className="formTitle">What can us do for you?</h4>
        <p className="formDesc">
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
        <form action="submit">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Reason for Contacting" />
          <input type="text" placeholder="Phone" />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
        </form>
        <p className="info">
          <span>*</span> indicates a required field
        </p>
        <div className="btnDiv">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
