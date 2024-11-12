import "./Wecando.scss"

const Wecando = () => {
    return (
        <>
            <nav className="wecando">
                <div className="wecando_container">
                    <h1>What can us do for you?</h1>
                    <p>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
                    <form className="form_div">

                        <div className="input_div">
                        <input type="text" placeholder="Your Name" required></input>
                        <input type="email" placeholder="Email" required></input>
                        </div>

                        <div className="input_div">
                        <input type="text" placeholder="Reason for Contacting" required></input>
                        <input type="phone" placeholder="Phone" required></input>
                        </div>

                        <div className="input_div">
                        <textarea placeholder="Message" rows="4" cols="50" required></textarea>
                        </div>

                        <p><span>*</span> indicates a required field</p>

                        <button type="submit">Submit</button>

                    </form>
                </div>
            </nav>
        </>
    )
};

export default Wecando;