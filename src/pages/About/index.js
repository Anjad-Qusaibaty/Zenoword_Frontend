import React from "react";
import "./index.css";
import Myoldbooks from "./damas_lib.png";
import Contributors from "./contributors.png";
import Zenodotus from "./zenodotus.png";

export default function About() {
  return (
    <div className="allpage">
      <div className="container">
        <div className="image">
          <img src={Myoldbooks} alt="old books of the developer" />
        </div>
        <div className="text">
          <h3>How it started</h3>
          <p style={{ marginLeft: "10px", marginRight: "20px" }}>
            Post no so what deal evil rent by real in. But her ready least set
            lived spite solid. September how men saw tolerably two behaviour
            arranging. She offices for highest and replied one venture pasture.
            Applauded no discovery in newspaper allowance am northward.
            Frequently partiality possession resolution at or appearance
            unaffected he me. Engaged its was evident pleased husband. Ye
            goodness felicity do disposal dwelling no. First am plate jokes to
            began of cause an scale. Subjects he prospect elegance followed no
            overcame possible it on.{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={Zenodotus} alt="zenodotus" />
        </div>
        <div className="text">
          <h3 style={{ textAlign: "center" }}>Why Zenoword?</h3>
          <p style={{ marginLeft: "10px", marginRight: "20px" }}>
            Post no so what deal evil rent by real in. But her ready least set
            lived spite solid. September how men saw tolerably two behaviour
            arranging. She offices for highest and replied one venture pasture.
            Applauded no discovery in newspaper allowance am northward.
            Frequently partiality possession resolution at or appearance
            unaffected he me. Engaged its was evident pleased husband. Ye
            goodness felicity do disposal dwelling no. First am plate jokes to
            began of cause an scale. Subjects he prospect elegance followed no
            overcame possible it on.{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={Contributors} alt="Helping hands" />
        </div>
        <div className="text">
          <h3>Contributors</h3>
          <p>
            Post no so what deal evil rent by real in. But her ready least set
            lived spite solid. September how men saw tolerably two behaviour
            arranging. She offices for highest and replied one venture pasture.
            Applauded no discovery in newspaper allowance am northward.
            Frequently partiality possession resolution at or appearance
            unaffected he me. Engaged its was evident pleased husband. Ye
            goodness felicity do disposal dwelling no. First am plate jokes to
            began of cause an scale. Subjects he prospect elegance followed no
            overcame possible it on.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
