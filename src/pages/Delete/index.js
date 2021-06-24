import React from "react";
import { useEffect } from "react";
import "./library_page_view.css";
import { selectUser } from "../../store/user/selectors";
import { useSelector,useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import Onlinearticle from "./Online_Article.png";
import { useParams } from "react-router-dom";
import { deleteExtract } from "../../store/user/actions";


export default function Delete() {
  const { id } = useParams();
 
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();
 
  
 
  const user = useSelector(selectUser);
  const filteredExtract=user.extracts.filter((ext)=> ext.id===Number(id))
  


  useEffect(() => {
  if (token === null) {
      history.push("/login");
    }


  }, [token, history]);
  
  

  function Confirm(event) {
    event.preventDefault();
    console.log("I am confirming");
    dispatch(deleteExtract(id));
    history.push("/mylibrary")
  }

  function Cancel(event){
    event.preventDefault();
    console.log("I am Canceling");
    history.push("/mylibrary");
  }

  

  return (
    <div>
 <div>
        {filteredExtract.map((anExtract) => {
          return (
            <div key={Math.random()} className="allpage">
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
                      {anExtract.subtitle !== "n/a" ? " (" : null}
                      {anExtract.subtitle !== "n/a" ? anExtract.subtitle:null}
                      {anExtract.subtitle !== "n/a" ? ")" : null}
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
                          <div className="extractTag" key={Math.random()}>#{tag.type}</div>
                        ))
                      : null}
                  </div>
                  <div>
                  <a href={`/edit/${anExtract.id}`} className="edit"><i className="far fa-edit"></i></a>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <div><p className="noresults">Are you sure you want to delete this extract?</p></div>

        <div className="searchinfo">
     <button onClick={Confirm} className="confirmButton">Confirm</button>
     <button onClick={Cancel} className="CancelButton">Cancel</button>
   </div>

      
    </div>
  );
}
