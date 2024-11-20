import "./Card.scss";

const Card = ({ arr, deleteCard, hideCard, showPass }) => {
  return (
    <div className="card">
      {arr.map((elm) => {
        return (
          <div className="cardBox" key={elm.id}>
            <div className="checkDiv">
              <input
                type="checkbox"
                onChange={() => {
                  hideCard(elm.id);
                }}
              />
            </div>
            <div
              className="inputData"
              style={
                elm.isChecked
                  ? { filter: "blur(4px)", visibility: "hidden" }
                  : null
              }
            >
              <p className="inputPar">{elm.fname}</p>
              <p className="inputPar">{elm.lname}</p>
              <p className="inputPar">{elm.email}</p>
              <div
                className="inputPar"
                onClick={() => {
                  showPass(elm.id);
                }}
              >
                {elm.isOpen ? (
                  <div className="passwordBox">
                    <span>{elm.pass}</span> <i className="fa fa-eye-slash"></i>
                  </div>
                ) : (
                  <div className="passwordBox">
                    <span>●●●●●●●●</span> <i className="fa fa-eye"></i>
                  </div>
                )}
              </div>
            </div>
            <button
              style={
                elm.isChecked
                  ? { filter: "blur(4px)", visibility: "hidden" }
                  : null
              }
              onClick={() => {
                deleteCard(elm.id);
              }}
            >
              <i className="material-icons">delete</i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
