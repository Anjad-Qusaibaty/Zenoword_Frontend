import React from "react";
import "./index.css";
import Library from "./myLib.png";
import Contributors from "./myCont.png";
import Zenodotus from "./myZen.png";
import { Table } from "react-bootstrap";
import GitHub from "./GitHub.png";
import Linkedin from "./Lin.png";

export default function About() {
  return (
    <div className="allpage">
      <div className="container">
        <div className="image">
          <img src={Library} alt="old books of the developer" />
        </div>
        <div className="text">
          <h1 className="aboutheaders">Background Story</h1>
          <p style={{ marginLeft: "10px", marginRight: "20px" }}>
            I love reading and when I read a book (especially non-fiction) I
            leave a lot of notes and highlights to revisit and contemplate every
            now and then. At the beginning of 2012, I had to flee my country
            Syria due to the civil war and my books were among the many things I
            left behind. That meant that I also lost access to my old notes and
            highlights which is very unpleasant, to say the least. <br />
            Learning from this bad experience I started collecting my new
            extracts in a digital format (pics and docs), yet, being the messy
            person that I am, that practice soon got out of hand and my data got
            scattered everywhere. <br />I looked for apps to handle that for me
            but most of them were either not very user-friendly or jammed with a
            lot of unnecessary features. I wanted something simple, and
            straightforward. <br />
            In April 2021 I joined a coding Bootcamp in an attempt to switch my
            career towards Web Development. To graduate, I had to make, among
            many things, a portfolio app to showcase my newfound coding skill.
            When that opportunity arrived I didn't think twice, and I decided to
            build the app myself.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={Zenodotus} alt="Zenodotus re-imagined" />
        </div>
        <div className="text">
          <h1 className="aboutheaders">Why Zenoword?</h1>
          <p style={{ marginLeft: "10px", marginRight: "20px" }}>
            The name Zenoword has two parts. The first one is{" "}
            <span style={{ color: "#54CC82" }}>Zeno</span> which is a reference
            to{" "}
            <a
              style={{ color: "#54CC82" }}
              href="https://en.wikipedia.org/wiki/Zenodotus"
              target="blank"
            >
              Zenodotus of Ephesus
            </a>{" "}
            (330-260 BC), the first head of the{" "}
            <a
              style={{ color: "#54CC82" }}
              href="https://en.wikipedia.org/wiki/Library_of_Alexandria"
              target="blank"
            >
              Great Library of Alexandria
            </a>{" "}
            one of the largest and most significant libraries of the ancient
            world. The second part (i.e.{" "}
            <span style={{ color: "#54CC82" }}>word</span>) is mainly to make a
            reference to the domain of this app which deals with text, extracts,
            and quotes. In a nutshell, Zenoword is a trial to reimagine
            Zenodotus the ancient librarian in modern times.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={Contributors} alt="Helping hands" />
        </div>
        <div className="text">
          <h1 className="aboutheaders">Contributors </h1>
          <p>
            I am very grateful to everyone who helped with this app. Without
            their support and advice, it wouldn't have been possible. Below is
            the list of contributors in alphabetical order:
          </p>
          <Table bordered className="contTable">
            <thead>
              <tr style={{ backgroundColor: "#54CC82", color: "#fff" }}>
                <th>Name</th>
                <th>Role</th>
                <th>GitHub/Linkedin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Karla Evelize</td>
                <td>General Advisor</td>
                <td>
                  <a href="https://github.com/karlaevelize" target="blank">
                    <img
                      className="connectLogos"
                      src={GitHub}
                      alt="Github logo"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karla-evelize/"
                    target="blank"
                  >
                    <img
                      className="connectLogos"
                      src={Linkedin}
                      alt="Linkedin logo"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>Matias Garcia</td>
                <td>General Advisor</td>
                <td>
                  <a href="https://github.com/matiasgarcia91" target="blank">
                    <img
                      className="connectLogos"
                      src={GitHub}
                      alt="Github logo"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/matias-garcia-79b6aa108/"
                    target="blank"
                  >
                    <img
                      className="connectLogos"
                      src={Linkedin}
                      alt="Linkedin logo"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td>Rakan Douli</td>
                <td>Styling Advisor</td>
                <td>
                  <a href="https://github.com/Rairakzak" target="blank">
                    <img
                      className="connectLogos"
                      src={GitHub}
                      alt="Github logo"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rakan-douli-006416aa/"
                    target="blank"
                  >
                    <img
                      className="connectLogos"
                      src={Linkedin}
                      alt="Linkedin logo"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
