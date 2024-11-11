import "./Form.scss";

const inputs = [
  {
    type: "text",
    placeholder: "Your Name*",
  },
  {
    type: "email",
    placeholder: "Email*",
  },
  {
    type: "text",
    placeholder: "Reason for Contacting*",
  },
  {
    type: "text",
    placeholder: "Phone*",
  },
];

const Form = () => {
  return (
    <form>
      {inputs.map((input, i) => {
        return (
          <input
            key={input.type + i}
            type={input.type}
            placeholder={input.placeholder}
            required
            id={input.type + i}
          />
        );
      })}
      <div>
        <textarea id="txtarea" placeholder="Message"></textarea>
        <div>
          <span>* indicates a required field</span>
        </div>
      </div>
      <div className="btnDiv">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
