import React from "react";
import "./index.css";

export default function Home() {
  return (
    <div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/logo-nobackground-1000-no-words.png"}
          alt="big logo of zenoword"
          width="10%"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2%",
          }}
        />
      </div>
      <div>
        <h1 className="sac">
          Welcome to{" "}
          <span
            style={{
              color: "#54CC82",
            }}
          >
            Zenoword
          </span>
        </h1>
      </div>
      <div>
        <p className="welcomesub">
          A free platform for <span className="pHomePage">wordaholics</span> to
          organize their <br></br>
          <span className="pHomePage">quotes</span> &{" "}
          <span className="pHomePage">extracts</span>
        </p>
      </div>
      <div>
        <p
          className="sac"
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "calc(18px + 1vw)",
            color: "#1C8ABE",
          }}
        >
          How it works
        </p>
      </div>
      <div className="containterIfram">
        <iframe
          className="responsive-iframe"
          // width="560"
          // height="315"
          src="https://www.youtube-nocookie.com/embed/pLgJ7pk0X-s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
