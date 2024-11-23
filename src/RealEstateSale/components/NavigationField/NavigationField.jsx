import NavigationDatas from "../Constants/NavigationDatas";
import ForSortButtons from "../Constants/ForSortButtons";

import "./NavigationField.css";

const NavigationField = ({ AddDiv }) => {
  return (
    <div className="navigation-container">
      <form onChange={AddDiv}>
        {Array.from({ length: NavigationDatas.length }, (_, index) => (
          <input
            name={ForSortButtons[index]}
            key={index}
            placeholder={index}
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
