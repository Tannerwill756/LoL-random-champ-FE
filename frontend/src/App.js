import React, { useState } from "react";
import "./App.css";

import bgImg from "./images/Bg_img.jpg";
import topIcon from "./images/topImg.png";
import jgIcon from "./images/jungle_icon.png";
import midIcon from "./images/mid_icon.png";
import botIcon from "./images/bot_icon.png";
import supIcon from "./images/support_icon.png";

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

  const getTop = () => {
    axios
      .get("https://lol-random-champ.herokuapp.com/api/champs/top")
      .then((res) => {
        setSolo({
          champion_name: res.data.champion_name,
          champion_pic: res.data.champion_pic,
        });
      });
  };

  const getJng = () => {
    axios
      .get("https://lol-random-champ.herokuapp.com/api/champs/jungle")
      .then((res) => {
        setSolo({
          champion_name: res.data.champion_name,
          champion_pic: res.data.champion_pic,
        });
      });
  };

  const getMid = () => {
    axios
      .get("https://lol-random-champ.herokuapp.com/api/champs/mid")
      .then((res) => {
        setSolo({
          champion_name: res.data.champion_name,
          champion_pic: res.data.champion_pic,
        });
      });
  };

  const getAdc = () => {
    axios
      .get("https://lol-random-champ.herokuapp.com/api/champs/adc")
      .then((res) => {
        setSolo({
          champion_name: res.data.champion_name,
          champion_pic: res.data.champion_pic,
        });
      });
  };

  const getSup = () => {
    axios
      .get("https://lol-random-champ.herokuapp.com/api/champs/sup")
      .then((res) => {
        setSolo({
          champion_name: res.data.champion_name,
          champion_pic: res.data.champion_pic,
        });
      });
  };

  const getTeam = () => {
    axios
      .get("https://lol-random-champ.herokuapp.com/api/champs/team")
      .then((res) => {
        setTop(res.data[0]);
        setJg(res.data[1]);
        setMid(res.data[2]);
        setAdc(res.data[3]);
        setSup(res.data[4]);
      });
  };
  return (
    <div className="superParent">
      <div className="App">
        <div className="mainHeader">
          <h1>
            League of Legends <br /> Random Champion Generator
          </h1>
        </div>
        <div className="soloQ">
          <div className="soloButtons">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => getTop()}
            >
              <img src={topIcon} />
              Top
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => getJng()}
            >
              <img src={jgIcon} />
              Jungle
            </button>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => getMid()}
            >
              <img src={midIcon} />
              Mid
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => getAdc()}
            >
              <img src={botIcon} />
              Adc
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => getSup()}
            >
              <img src={supIcon} />
              Support
            </button>
          </div>
          <div className="soloImg">
            <h2>
              {solo.champion_name === ""
                ? "Choose Your Lane"
                : solo.champion_name}
            </h2>
            <img
              alt=""
              src={solo.champion_pic === "" ? bgImg : solo.champion_pic}
            />
          </div>
        </div>

        <div className="teamMain">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => getTeam()}
          >
            Randomly Generate Team
          </button>

          {top.champion_name === "" ? null : (
            <div className="teamChamps">
              <div className="lane">
                <h4> Top</h4>
                <img alt="" src={top.champion_pic} />
                <h5> {top.champion_name} </h5>
              </div>
              <div className="lane">
                <h4> Jungle</h4>
                <img alt="" src={jg.champion_pic} />
                <h5> {jg.champion_name} </h5>
              </div>
              <div className="lane">
                <h4> Mid</h4>
                <img alt="" src={mid.champion_pic} />
                <h5> {mid.champion_name} </h5>
              </div>
              <div className="lane">
                <h4> Adc</h4>
                <img alt="" src={adc.champion_pic} />
                <h5> {adc.champion_name} </h5>
              </div>

              <div className="lane">
                <h4> Support</h4>
                <img alt="" src={sup.champion_pic} />
                <h5> {sup.champion_name} </h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
