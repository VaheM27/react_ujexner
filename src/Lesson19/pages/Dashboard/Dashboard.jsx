import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Board from "../../components/Board/Board";
import instance from "../../axios";
import Modal from "../../components/Modal/Modal";

import "./Dashboard.scss";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    instance({
      method: "GET",
      url: name,
    }).then((res) => setData(res.data));
  }, [name]);

  function openCloseModal(itemId) {
    setOpenModal((prevState) => !prevState);
    setId(itemId);
  }

  function deleteSmth() {
    const newData = data.filter((item) => {
      return item.id !== id;
    });
    setData(newData);
    openCloseModal();
  }

  return (
    <div>
      <Board sendData={data} modalOpener={openCloseModal} />
      {openModal && (
        <Modal performAction={deleteSmth} cancelAction={openCloseModal} />
      )}
    </div>
  );
};
