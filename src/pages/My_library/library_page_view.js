import React from "react";
import "./library_page_view.css";

export default function Myextracts(props) {
  // function Rendertags(extractTags) {
  //   extractTags.map((tag) => <p>{tag.type}</p>);
  // }

  return (
    <div className="allpage">
      <div className="container">
        <div className="image">
          <img src={props.Image} alt={props.Alt} />
        </div>
        <div className="text">
          <div className="mainExtract">
            <p>{props.Extract}</p>
          </div>
          <div className="extractInfo">
            <p>
              <span className="spans">Media type:</span> {props.Media}
            </p>
            <p>
              <span className="spans">Title:</span> {props.Title}
              {props.Sep} {props.Sub}
            </p>
            <p>
              <span className="spans">Author:</span> {props.Author}
            </p>
            {props.Page !== null ? (
              <p>
                <span className="spans">Page:</span> {props.Page}
              </p>
            ) : null}
            <p>
              <a href={props.Link} target="blank">
                {props.Link !== null ? (
                  <span className="spans">Link</span>
                ) : null}
              </a>
            </p>
          </div>
          {/* <Rendertags /> */}
          <div className="extractTag">{props.Tag}</div>
        </div>
      </div>
    </div>
  );
}
