import React from "react";
import { useEffect } from "react";
import "./library_page_view.css";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import Onlinearticle from "./Online_Article.png";

export default function Mylibrary() {
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  const user = useSelector(selectUser);
  console.log("myuser", user);

  const userTags = user.extracts.map((extract) => extract.tags);

  console.log(userTags[0]);

  // console.log(testingtwo);

  return (
    <div>
      <div>
        {user.extracts.map((anExtract) => {
          return (
            <div className="allpage">
              <div className="container1">
                <div className="image">
                  {anExtract.mediaType === "Book" ? (
                    <img
                      src={anExtract.imageUrl}
                      alt={`cover of ${anExtract.title}`}
                    />
                  ) : (
                    <img
                      src={Onlinearticle}
                      alt={"Online Article placeholder"}
                    />
                  )}
                </div>
                <div className="text">
                  <div className="mainExtract">
                    <p>{anExtract.text}</p>
                  </div>
                  <div className="extractInfo">
                    <p>
                      <span className="spans">Media type:</span>{" "}
                      {anExtract.mediaType}
                    </p>
                    <p>
                      <span className="spans">Title:</span> {anExtract.title}
                      {anExtract.subtitle !== null ? " (" : null}
                      {anExtract.subtitle}
                      {anExtract.subtitle !== null ? ")" : null}
                    </p>
                    <p>
                      <span className="spans">Author:</span> {anExtract.author}
                    </p>
                    {anExtract.page !== null ? (
                      <p>
                        <span className="spans">Page:</span> {anExtract.page}
                      </p>
                    ) : null}
                    <p>
                      <a href={anExtract.link} target="blank">
                        {anExtract.link !== null ? (
                          <span className="spans">Link</span>
                        ) : null}
                      </a>
                    </p>
                  </div>
                  <div className="tagscont">
                    {anExtract.tags.length > 0
                      ? anExtract.tags.map((tag) => (
                          <div className="extractTag">#{tag.type}</div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
