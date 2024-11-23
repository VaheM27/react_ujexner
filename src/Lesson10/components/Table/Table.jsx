import DeleteButton from "../DeleteButton/DeleteButton";
import Icon from "@mdi/react";
import {
  mdiEye,
  mdiEyeOff,
  mdiSortAlphabeticalAscendingVariant,
  mdiSortAlphabeticalDescendingVariant,
} from "@mdi/js";

import "./Table.scss";

const Table = ({ arr, sortFunction, passwordState, deleteUser, sortIcon }) => {
  return (
    <div className="tableDiv">
      <table>
        <thead>
          <tr>
            <th className="sortTh" onClick={sortFunction}>
              Username
              {sortIcon ? (
                <Icon
                  className="sortIcon"
                  path={mdiSortAlphabeticalDescendingVariant}
                  size={1}
                />
              ) : (
                <Icon
                  className="sortIcon"
                  path={mdiSortAlphabeticalAscendingVariant}
                  size={1}
                />
              )}
            </th>
            <th>Password</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((elm) => (
            <tr key={elm.id}>
              <td>{elm.name}</td>
              <td>
                {elm.showPass ? (
                  <div className="passDiv">
                    <Icon
                      className="icons"
                      path={mdiEyeOff}
                      size={1.2}
                      onClick={() => passwordState(elm.id)}
                    />
                    {elm.pass}
                  </div>
                ) : (
                  <div className="passDiv">
                    <Icon
                      className="icons"
                      path={mdiEye}
                      size={1.2}
                      onClick={() => passwordState(elm.id)}
                    />
                    {elm.pass.split("").map((el) => {
                      return (el = "●");
                    })}
                  </div>
                )}
              </td>
              <td>
                <DeleteButton remove={() => deleteUser(elm.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
