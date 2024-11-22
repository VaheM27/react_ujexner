import { UserInput } from "../Main";

import "./Form.scss";

export const Form = ({ submit, disable }) => {
  return (
    <form onSubmit={submit}>
      <UserInput type="text" placeholder="Name" readOnly={false} name="name" />
      <UserInput
        type="text"
        placeholder="Surname"
        readOnly={false}
        name="surname"
      />
      <UserInput
        type="text"
        placeholder="Username"
        readOnly={false}
        name="username"
      />
      <UserInput
        type="password"
        placeholder="Password"
        readOnly={false}
        name="password"
      />
      <UserInput
        type="text"
        placeholder="Add an image URL"
        readOnly={false}
        name="link"
      />
      <UserInput
        type="submit"
        value="Submit"
        readOnly={true}
        disabled={disable}
        className="submit"
      />
    </form>
  );
};
