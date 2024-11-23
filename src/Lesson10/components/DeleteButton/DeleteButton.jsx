import Icon from "@mdi/react";
import { mdiDeleteCircle } from "@mdi/js";

import "./DeleteButton.scss";

const DeleteButton = ({ remove }) => {
  return (
    <Icon
      onClick={remove}
      className="deleteIcon"
      path={mdiDeleteCircle}
      size={1.2}
    />
  );
};

export default DeleteButton;
