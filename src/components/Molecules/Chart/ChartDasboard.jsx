import React, { useEffect, useState } from "react";
import CanvasJSReact from "./canvasjs.react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "./Style.css";
import StaticDateRangePickerDemo from "./mencoba";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const buildClassNames = (touched, isInvalid) =>
  touched && isInvalid ? "form-control is-invalid" : "form-control";

var dataPoints = [
  { label: 2018, y: 1000 },
  { label: 2019, y: 1500 },
  { label: 2020, y: 2500 },
  { label: 2021, y: 300 },
  { label: 2022, y: 2800 },
];
var dataPointsmont = [
  { label: "January", y: 100 },
  { label: "February", y: 150 },
  { label: "March", y: 250 },
  { label: "April", y: 30 },
  { label: "May", y: 289 },
  { label: "June", y: 310 },
  { label: "July", y: 130 },
  { label: "August", y: 320 },
  { label: "September", y: 330 },
  { label: "October", y: 303 },
  { label: "November", y: 230 },
  { label: "December", y: 630 },
];
var dataPointsday = [
  { label: "Monday", y: 10 },
  { label: "Tuesday", y: 15 },
  { label: "Wednesday", y: 25 },
  { label: "Thursday", y: 30 },
  { label: "Friday", y: 28 },
  { label: "Saturday", y: 28 },
  { label: "Sunday", y: 28 },
];
const ChartDasboard = () => {
  const [date, setDate] = useState(dataPointsday);
  const [valueval, setvalueval] = useState("day");
  const [in1, setin1] = useState(true);
  const [in2, setin2] = useState(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleDateYears = (e) => {
    setDate(dataPoints);
    setvalueval("year");
  };
  const handleDateMont = (e) => {
    setDate(dataPointsmont);
    setvalueval("mont");
  };
  const handleDateDay = (e) => {
    setDate(dataPointsday);
    setvalueval("day");
  };
  const options = {
    data: [
      {
        type: "line",
        dataPoints: date,
      },
    ],
  };
  const inputdatestart = (e) => {
    setStartDate(null);
    setStartDate(e.target.value);
    setin1(false);
    setin2(false);
  };
  const inputdateEnd = (e) => {
    setEndDate(e.target.value);
    setin1(false);
    setin2(true);
  };
  const handleCOndition = () => {
    if (valueval === "day") {
      setvalueval("mont");
    } else if (valueval === "mont") {
      setvalueval("year");
    } else {
      setvalueval("day");
    }
  };
  const [mencoba, setMencoba] = useState();
  const contion = localStorage.getItem("condition");

  useEffect(() => {
    setTimeout(() => {
      handleCOndition();
    }, 400);
  }, [contion]);

  return (
    <div
      className="shadow  p-3 mb-5 bg-body rounded-5 mt-5 justify-content-between px-5 rounded-3"
      style={{ width: "1050px" }}
    >
      <div className="text-start mb-5">
        <h1 className="fw-bold ">Patient Statistics</h1>
      </div>
      <div className="d-flex row">
        <div className="col-10">
          <div className="d-flex col-12 justify-content-between rounded-2">
            <div>
              <div className="fromto d-flex">
                <div className="from">
                  {" "}
                  <b>From</b>{" "}
                </div>
                <div>
                  {" "}
                  <b>To</b>{" "}
                </div>
              </div>
              <input
                className="date1"
                type="date"
                value={startDate}
                onChange={inputdatestart}
              />
              <input type="date" value={endDate} onChange={inputdateEnd} />
            </div>
            <div className="d-flex">
              <p
                role="button"
                onClick={handleDateYears}
                className={`text-start px-2 rounded-2 fw-bold me-3 d-flex align-items-center px-[20px] ${
                  valueval === "year" ? "bgwaktu text-white" : ""
                }`}
              >
                Years
              </p>
              <p
                role="button"
                onClick={handleDateMont}
                className={`text-start px-2 rounded-2 fw-bold me-3 d-flex align-items-center ${
                  valueval === "mont" ? "bgwaktu text-white" : ""
                }`}
              >
                Month
              </p>
              <p
                role="button"
                onClick={handleDateDay}
                className={`text-start px-2 rounded-2 fw-bold me-3 d-flex align-items-center ${
                  valueval === "day" ? "bgwaktu text-white" : ""
                }`}
              >
                Day
              </p>
            </div>
          </div>
          <div style={{ minWidth: "100vh" }}>
            <CanvasJSChart options={options} />
          </div>
        </div>
        {/* total patien today */}
        <div className="bg-primary position-relative col-2 p-4 align-items-center d-flex flex-column justify-content-between my-5 shadow p-3 mb-5 bg-body rounded-4 py-5">
          <h1 className="fs-2 fw-bold">Total Patient Today</h1>
          <div className="">
            <FaUserAlt
              style={{ height: "50px", width: "50px" }}
              className="p-3 bg-black rounded-circle text-white"
            />
          </div>
          <h1 className="fw-bold">9</h1>
        </div>
      </div>
    </div>
  );
};

export default ChartDasboard;
