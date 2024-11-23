import "./Inputs.scss";

const Inputs = ({
  sendData,
  buttonState,
  firstState,
  secondState,
  firstInput,
  secondInput,
}) => {
  return (
    <div className="formDiv">
      <h1>Sign Up</h1>
      <form onSubmit={sendData}>
        <input
          type="text"
          id="userName"
          value={firstInput}
          onChange={firstState}
          maxLength={20}
          placeholder="Username..."
        />
        <input
          type="password"
          id="password"
          value={secondInput}
          onChange={secondState}
          maxLength={20}
          placeholder="Password..."
        />
        <input type="submit" className="submitBtn" disabled={buttonState} />
      </form>
    </div>
  );
};

export default Inputs;
