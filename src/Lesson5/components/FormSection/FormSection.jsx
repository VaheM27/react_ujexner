import Form from "../Form/Form";
import { Title } from "../Main";

import "./FormSection.scss";

const FormSection = () => {
  return (
    <section className="formSection">
      <div className="container">
        <div className="formContainer">
          <Title title="What can us do for you?" />
          <p>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
