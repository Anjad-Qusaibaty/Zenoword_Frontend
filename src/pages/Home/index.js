import React from "react";
import "./index.css";
import Carousel from "react-bootstrap/Carousel";
import "../My_library/library_page_view.css";
import Onlinearticle from "../My_library/Online_Article.png";

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
          A Peek Inside
        </p>
      </div>
      {/* <div className="containterIfram">
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
      </div> */}
      {/* 
style={{ border: "solid 1px black", backgroundColor: "red" }} */}

      <Carousel
        style={{
          marginBottom: "5rem",
        }}
      >
        <Carousel.Item interval={1000}>
          <div className="allpage">
            <div className="container1">
              <div className="image">
                <img
                  src="http://books.google.com/books/content?id=u8w_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                  alt="Extract 1"
                />
              </div>
              <div className="text">
                <div className="mainExtract">
                  <p>
                    Our minds are built on the hunting-and-gathering platforms
                    of our bodies.
                  </p>
                </div>
                <div className="extractInfo">
                  <p>
                    <span className="spans">Media type:</span>Book
                  </p>
                  <p>
                    <span className="spans">Title:</span> 12 Rules for life (An
                    Antidote to Chaos)
                  </p>
                  <p>
                    <span className="spans">Author:</span> Jordan B. Peterson
                  </p>

                  <p>
                    <span className="spans">Page:</span> 92
                  </p>
                </div>
                <div className="tagscont">
                  <div className="extractTag"># Hunters & Gatherers</div>
                  <div className="extractTag"># Mind & Body</div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="allpage">
            <div className="container1">
              <div className="image">
                <img
                  src="https://books.google.nl/books/content?id=SEsIPQAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73hSAP6agfOZHMujth1zZwLuCWd0TgETmvbPIEf_kx7leAh5qry8pGWsthgTsL4rV3R-RA6jR0wZVdVqhnSyGX7P-X8POzmGuf9232q8caqCAbuKXpTZxcdFNRs8Cm8zNl6u-EY"
                  alt="Extract 2"
                />
              </div>
              <div className="text">
                <div className="mainExtract">
                  <p>
                    ...it did not really matter what we expected from life, but
                    rather what life expected from us.
                  </p>
                </div>
                <div className="extractInfo">
                  <p>
                    <span className="spans">Media type:</span>Book
                  </p>
                  <p>
                    <span className="spans">Title:</span> Man's Search For
                    Meaning
                  </p>
                  <p>
                    <span className="spans">Author:</span> Viktor E. Frankl
                  </p>

                  <p>
                    <span className="spans">Page:</span> 85
                  </p>
                </div>
                <div className="tagscont">
                  <div className="extractTag"># Attitude</div>
                  <div className="extractTag"># Life</div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="allpage">
            <div className="container1">
              <div className="image">
                <img src={Onlinearticle} alt="Extract 3" />
              </div>
              <div className="text">
                <div className="mainExtract">
                  <p>
                    Food is a persistent nuanced balance between short term
                    enjoyment & long term reward.
                  </p>
                </div>
                <div className="extractInfo">
                  <p>
                    <span className="spans">Media type:</span>Online Article
                  </p>
                  <p>
                    <span className="spans">Title:</span>Low-carb thinking for
                    regular people
                  </p>
                  <p>
                    <span className="spans">Author:</span> Philip Marais
                  </p>

                  <p>
                    <a
                      href="https://medium.com/@finmn/low-carb-thinking-for-regular-people-c82354266beb"
                      target="blank"
                    >
                      <span className="spans">Link</span>
                    </a>
                  </p>
                </div>
                <div className="tagscont">
                  <div className="extractTag"># Keto Diet</div>
                  <div className="extractTag"># Food</div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
