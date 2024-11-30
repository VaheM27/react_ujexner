import NavigationDatas from "../Constants/NavigationDatas";
import ForSortButtons from "../Constants/ForSortButtons";

import "./NavigationField.css";

const NavigationField = ({ AddDiv }) => {
  return (
    <div className="navigation-container">
      <form onChange={AddDiv}>
        {NavigationDatas.map((item, index) => (
          <input
            name={item}
            key={index}
            placeholder={item}
            type="text"
            required
          />
        ))}

        <input type="submit" />
      </form>
      {NavigationDatas.map((data, index) => (
        <div className="navigation-field" key={index}>
          <p>{data}</p>
          <button className="sort-button">
            Sort by {ForSortButtons[index]}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NavigationField;
