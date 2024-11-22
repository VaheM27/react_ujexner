import "./DataCreate.scss";

const DataCreate = ({ dataInput }) => {
  return (
    <>
      <div className="container">
        <div>
          <form onSubmit={dataInput} className="input">
            <input type="text" placeholder="Name" id="name" required />
            <input type="email" placeholder="Email" id="email" required />
            <input type="text" placeholder="UserName" id="userName" required />
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
            />
            <input className="login" type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </>
  );
};

export default DataCreate;
