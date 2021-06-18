import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/logo-nobackground-1000-no-words.png"}
          alt="big logo of zenoword"
          width="240px"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div>
        <h1
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Welcome to
        </h1>
      </div>
      <div>
        <p
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          A free platform for wordaholics to organize their quotes and extracts
        </p>
      </div>
      <div>
        <p
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          How it works
        </p>
      </div>
      <div
        style={{
          width: "fit-content",
          border: "solid 3px #54CC82",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "6px",
          paddingLeft: "6px",
          paddingRight: "6px",
        }}
      >
        <iframe
          width="560"
          height="315"
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
