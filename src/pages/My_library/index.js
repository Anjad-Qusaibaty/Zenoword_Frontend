import React from "react";
import { useEffect,useState } from "react";
import "./library_page_view.css";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import Onlinearticle from "./Online_Article.png";
import {Form} from "react-bootstrap";

export default function Mylibrary() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const[searchCriteria,setSearchCriteria]=useState("All")
  const [search,set_search]=useState("");
 
  const user = useSelector(selectUser);
  console.log(user.extracts);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);
  
  const [filteredData,setFilteredData]=useState([""]);
 


  function handel(event) {
    event.preventDefault();

    const filtering=user.extracts.filter(
      (ext) =>
        ext.text.toLowerCase().includes(search.toLowerCase()) ||
        ext.author.toLowerCase().includes(search.toLowerCase()) ||
        ext.title.toLowerCase().includes(search.toLowerCase())||ext.subtitle.toLowerCase().includes(search.toLowerCase())||
        JSON.stringify(ext.tags.map((t) => t.type)).toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtering);
    setSearchCriteria(search);
    set_search("");
  }

  function reset(event){
    event.preventDefault();
    setSearchCriteria("All")
  }

  const render=searchCriteria === "All"? user.extracts:filteredData;

  return (
    <div>
    
    
   <div className="search">
    
       <form className="Bar" onSubmit={handel}> 
      <input type="search" className="searchTerm" placeholder="Search my library..." value={search}
        onChange={(event)=> set_search(event.target.value)}/>
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
     </button>
     </form>
    
  <div className="bootstrapcheck">
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check  className="trycheck" type="checkbox" label="Book title" />
  </Form.Group>
  </div>
     <button className="newaddition">+ New Addition</button>
   </div>
   <div className="searchinfo">
     <p className="infoP"> <span style={{color:"#54CC82"}}>Search criteria: </span>{searchCriteria}</p>
     <p className="infoP"> <span style={{color:"#54CC82"}}>Search results: </span>{render.length}</p>
     <button onClick={reset} className="resetButton">Reset search</button>
   </div>
   <div>{render.length===0?<p>Sorry no results match your search criteria</p> :null}</div>
      <div>
        {render.map((anExtract) => {
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
                    <a href="/" className="edit"><i className="far fa-edit"></i></a>
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
