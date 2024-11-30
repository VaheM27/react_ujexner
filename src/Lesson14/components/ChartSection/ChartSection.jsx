import { useState, useEffect } from "react";
import LineChart from "../LineChart/LineChart";
import heartImage from "../../assets/png/HeartBPM.svg";
import respImage from "../../assets/png/respiratory_rate.svg";
import tempImage from "../../assets/png/temperature.svg";

import "./ChartSection.scss";
import { DiagnosBox } from "../Main";

const ChartSection = ({ selectedClient }) => {
  const [month, setMonth] = useState([]);
  const [diastolic, setDiastolic] = useState([]);
  const [systolic, setSystolic] = useState([]);
  const [diastolicLevels, setDiastolicLevels] = useState([]);
  const [systolicLevels, setSystolicLevels] = useState([]);
  const [heart, setHeart] = useState([]);
  const [heartLevel, setHeartLevel] = useState([]);
  const [resp, setResp] = useState([]);
  const [respLevel, setRespLevel] = useState([]);
  const [temp, setTemp] = useState([]);
  const [tempLevel, setTempLevel] = useState([]);
  const [filterLastSix, setFilterLastSix] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState({
    diastolic: null,
    systolic: null,
    diastolicLevel: null,
    systolicLevel: null,
    heartValue: null,
    heartLevel: null,
    respValue: null,
    respLevel: null,
    tempValue: null,
    tempLevel: null,
  });

  useEffect(() => {
    const months = selectedClient?.diagnosis_history?.map(
      (history) => `${history.month.slice(0, 3)}, ${history.year}`
    );
    const diastolics = selectedClient?.diagnosis_history?.map(
      (history) => history?.blood_pressure?.diastolic.value
    );
    const systolics = selectedClient?.diagnosis_history?.map(
      (history) => history?.blood_pressure?.systolic.value
    );
    const diastolicLevels = selectedClient?.diagnosis_history?.map(
      (history) => history?.blood_pressure?.diastolic.levels
    );
    const systolicLevels = selectedClient?.diagnosis_history?.map(
      (history) => history?.blood_pressure?.systolic.levels
    );
    const heartValues = selectedClient?.diagnosis_history?.map(
      (history) => history?.heart_rate?.levels
    );
    const heartLevels = selectedClient?.diagnosis_history?.map(
      (history) => history?.heart_rate?.value
    );
    const respLevels = selectedClient?.diagnosis_history?.map(
      (history) => history?.respiratory_rate?.levels
    );
    const respValues = selectedClient?.diagnosis_history?.map(
      (history) => history?.respiratory_rate?.value
    );
    const tempLevels = selectedClient?.diagnosis_history?.map(
      (history) => history?.temperature?.levels
    );
    const tempValues = selectedClient?.diagnosis_history?.map(
      (history) => history?.temperature?.value
    );

    const reversedMonths = months?.reverse() || [];
    const reversedDiastolics = diastolics?.reverse() || [];
    const reversedSystolics = systolics?.reverse() || [];
    const reversedDiastolicLevels = diastolicLevels?.reverse() || [];
    const reversedSystolicLevels = systolicLevels?.reverse() || [];
    const reversedHeartValues = heartValues?.reverse() || [];
    const reversedHeartLevels = heartLevels?.reverse() || [];
    const reversedRespLevels = respLevels?.reverse() || [];
    const reversedrespValues = respValues?.reverse() || [];
    const reversedTempLevels = tempLevels?.reverse() || [];
    const reversedTempValues = tempValues?.reverse() || [];

    setMonth(reversedMonths);
    setDiastolic(reversedDiastolics);
    setSystolic(reversedSystolics);
    setDiastolicLevels(reversedDiastolicLevels);
    setSystolicLevels(reversedSystolicLevels);
    setHeart(reversedHeartValues);
    setHeartLevel(reversedHeartLevels);
    setResp(reversedrespValues);
    setRespLevel(reversedRespLevels);
    setTemp(reversedTempValues);
    setTempLevel(reversedTempLevels);

    if (reversedDiastolics.length > 0 && reversedSystolics.length > 0) {
      setSelectedPoint({
        diastolic: reversedDiastolics[0],
        systolic: reversedSystolics[0],
        diastolicLevel: reversedDiastolicLevels[0],
        systolicLevel: reversedSystolicLevels[0],
        heartValue: reversedHeartValues[0],
        heartLevel: reversedHeartLevels[0],
        respValue: reversedrespValues[0],
        respLevel: reversedRespLevels[0],
        tempValue: reversedTempValues[0],
        tempLevel: reversedTempLevels[0],
      });
    }
  }, [selectedClient]);

  const filteredData = (dataArray) =>
    filterLastSix
      ? dataArray.slice(dataArray.length - 6, dataArray.length)
      : dataArray;

  const data = {
    labels: filteredData(month),
    datasets: [
      {
        data: filteredData(diastolic),
        borderColor: "#8C6FE6",
        tension: 0.5,
        pointRadius: 6,
        pointBackgroundColor: "#8C6FE6",
      },
      {
        data: filteredData(systolic),
        borderColor: "#E66FD2",
        tension: 0.5,
        pointRadius: 6,
        pointBackgroundColor: "#E66FD2",
      },
    ],
  };

  const getChevronIcon = (level) => {
    if (!level) return null;
    return level === "Lower than Average"
      ? "▾"
      : level === "Higher than Average"
      ? "▴"
      : "";
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const dataIndex = elements[0].index;
        setSelectedPoint({
          diastolic: filteredData(diastolic)[dataIndex],
          systolic: filteredData(systolic)[dataIndex],
          diastolicLevel: filteredData(diastolicLevels)[dataIndex],
          systolicLevel: filteredData(systolicLevels)[dataIndex],
          heartValue: filteredData(heart)[dataIndex],
          heartLevel: filteredData(heartLevel)[dataIndex],
          respValue: filteredData(resp)[dataIndex],
          respLevel: filteredData(respLevel)[dataIndex],
          tempValue: filteredData(temp)[dataIndex],
          tempLevel: filteredData(tempLevel)[dataIndex],
        });
      }
    },
  };

  return (
    <div className="chartSection">
      <h2>Diagnosis History</h2>
      <div>
        <LineChart
          selectedClient={selectedClient}
          className="chart"
          lastSix={filterLastSix}
          setFilterLastSix={setFilterLastSix}
          options={options}
          data={data}
          selectedPoint={selectedPoint}
        />
        <div className="boxes">
          <DiagnosBox
            className="resp-box"
            src={respImage}
            alt="Respiratory Rate"
            title="Respiratory Rate"
            value={`${selectedPoint?.respValue || ""}bpm`}
            status={`${getChevronIcon(selectedPoint?.respLevel) || ""}${
              selectedPoint?.respLevel || ""
            }`}
          />
          <DiagnosBox
            className="temp-box"
            src={tempImage}
            alt="Temperature"
            title="Temperature"
            value={`${selectedPoint?.tempValue || ""}°F`}
            status={`${getChevronIcon(selectedPoint?.tempLevel) || ""}${
              selectedPoint?.tempLevel || ""
            }`}
          />
          <DiagnosBox
            className="heart-box"
            src={heartImage}
            alt="Heart Rate"
            title="Heart Rate"
            value={`${selectedPoint?.heartLevel || ""}bpm`}
            status={`${getChevronIcon(selectedPoint?.heartValue) || ""}${
              selectedPoint?.heartValue || ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
