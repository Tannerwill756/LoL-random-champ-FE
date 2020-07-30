import React, { useState } from "react";
import "./App.css";

import defaultImg from "./images/default_img.png";

import axios from "axios";

function App() {
  const [solo, setSolo] = useState({
    champion_name: "",
    champion_pic: "",
  });

  const [top, setTop] = useState({
    champion_name: "",
    champion_pic: "",
  });
  const [jg, setJg] = useState({
    champion_name: "",
    champion_pic: "",
  });
  const [mid, setMid] = useState({
    champion_name: "",
    champion_pic: "",
  });
  const [adc, setAdc] = useState({
    champion_name: "",
    champion_pic: "",
  });
  const [sup, setSup] = useState({
    champion_name: "",
    champion_pic: "",
  });
  //  function
  const getTop = () => {
    axios.get("http://localhost:5000/api/champs/top").then((res) => {
      setSolo({
        champion_name: res.data.champion_name,
        champion_pic: res.data.champion_pic,
      });
    });
  };

  const getJng = () => {
    axios.get("http://localhost:5000/api/champs/jungle").then((res) => {
      setSolo({
        champion_name: res.data.champion_name,
        champion_pic: res.data.champion_pic,
      });
    });
  };

  const getMid = () => {
    axios.get("http://localhost:5000/api/champs/mid").then((res) => {
      setSolo({
        champion_name: res.data.champion_name,
        champion_pic: res.data.champion_pic,
      });
    });
  };

  const getAdc = () => {
    axios.get("http://localhost:5000/api/champs/adc").then((res) => {
      setSolo({
        champion_name: res.data.champion_name,
        champion_pic: res.data.champion_pic,
      });
    });
  };

  const getSup = () => {
    axios.get("http://localhost:5000/api/champs/sup").then((res) => {
      setSolo({
        champion_name: res.data.champion_name,
        champion_pic: res.data.champion_pic,
      });
    });
  };

  const getTeam = () => {
    axios.get("http://localhost:5000/api/champs/team").then((res) => {
      setTop(res.data[0]);
      setJg(res.data[1]);
      setMid(res.data[2]);
      setAdc(res.data[3]);
      setSup(res.data[4]);
    });
  };
  return (
    <div className="App">
      <div className="soloQ">
        <div className="soloButtons">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => getTop()}
          >
            Top
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => getJng()}
          >
            Jungle
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => getMid()}
          >
            Mid
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => getAdc()}
          >
            ADC
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => getSup()}
          >
            Support
          </button>
        </div>
        <div className="soloImg">
          <h2>
            {solo.champion_name === ""
              ? "Choose your lane"
              : solo.champion_name}
          </h2>
          <img
            alt=""
            src={solo.champion_pic === "" ? defaultImg : solo.champion_pic}
          />
        </div>
      </div>

      <div className="teamMain">
        <h1>Generate Random Team</h1>
        {top.champion_name === "" ? null : (
          <div className="teamChamps">
            <div className="lane">
              <h4> Top lane: {top.champion_name} </h4>
              <img alt="" src={top.champion_pic} />
            </div>
            <div className="lane">
              <h4> Jungle: {jg.champion_name} </h4>
              <img alt="" src={jg.champion_pic} />
            </div>
            <div className="lane">
              <h4> Mid lane: {mid.champion_name} </h4>
              <img alt="" src={mid.champion_pic} />
            </div>
            <div className="lane">
              <h4> ADC: {adc.champion_name} </h4>
              <img alt="" src={adc.champion_pic} />
            </div>

            <div className="lane">
              <h4> Support: {sup.champion_name} </h4>
              <img alt="" src={sup.champion_pic} />
            </div>
          </div>
        )}

        <button
          type="button"
          className="btn btn-dark"
          onClick={() => getTeam()}
        >
          Create Team
        </button>
      </div>
    </div>
  );
}

export default App;
