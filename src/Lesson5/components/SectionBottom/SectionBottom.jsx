import "./SectionBottom.scss";

const SectionBottom = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="section3">
            <h2>What can us do for you?</h2>
            <p>
              We are ready to work on a project of any complexity, whether it’s
              commercial or residential.
            </p>
            <form>
              <div className="input">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Reason for Contacting" />
                <input type="tel" placeholder="Phone" />
                <textarea name="text" id="1" placeholder="Message"></textarea>
                <p>
                  <span>*</span> indicates a required field
                </p>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBottom;
