import React from "react";
import { useEffect,useState } from "react";
import "./library_page_view.css";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import Onlinearticle from "./Online_Article.png";
import {Form} from "react-bootstrap";
import Book from "./book.png"

export default function Mylibrary() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const[searchCriteria,setSearchCriteria]=useState("All")
  const [search,set_search]=useState("");
 
  const user = useSelector(selectUser);
  console.log("from library page",user.extracts);

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);
  
  const [filteredData,setFilteredData]=useState([""]);
 
  function redirectToCreate(){
    history.push("/create");
  }


  function handel(event) {
    event.preventDefault();

    const filtering=user.extracts.filter(
      (ext) =>
        ext.text.toLowerCase().includes(search.toLowerCase()) ||
        ext.author.toLowerCase().includes(search.toLowerCase()) ||
        ext.title.toLowerCase().includes(search.toLowerCase())||ext.subtitle.toLowerCase().includes(search.toLowerCase())||ext.tags.toLowerCase().includes(search.toLowerCase())
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
  <button className="newaddition" onClick={redirectToCreate}>+ New Addition</button>
   </div>
   <div className="searchinfo">
     <p className="infoP"> <span style={{color:"#54CC82"}}>Search criteria: </span>{searchCriteria}</p>
     <p className="infoP"> <span style={{color:"#54CC82"}}>Search results: </span>{render.length}</p>
     <button onClick={reset} style={{width:"150px"}} className="resetButton">Reset search</button>
   </div>
   <div>{user.extracts.length>0 && render.length===0?<p className="noresults">Sorry no results match your search criteria</p> :user.extracts.length===0?<p className="noresults">You have no extracts yet!</p>: null}</div>
      <div>
        {render.map((anExtract) => {
          return (
            <div key={Math.random()} className="allpage">
              <div className="container1">
                <div className="image">
                  {anExtract.mediaType === "Book" && anExtract.imageUrl !=="" ?
                    <img
                      src={anExtract.imageUrl}
                      alt={`cover of ${anExtract.title}`}
                    />
                  : anExtract.mediaType === "Book" && anExtract.imageUrl ==="" ?
                      <img
                      src={Book}
                      alt={"Book placeholder"}
                    /> :
                    <img
                      src={Onlinearticle}
                      alt={"Online Article placeholder"}
                    />
                  }
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
                      {anExtract.subtitle !== "" ? " (" : null}
                      {anExtract.subtitle !== "" ? anExtract.subtitle:null}
                      {anExtract.subtitle !== "" ? ")" : null}
                    </p>
                    <p>
                      <span className="spans">Author:</span> {anExtract.author}
                    </p>
                    {anExtract.page !== "" && anExtract.mediaType ==="Book"? (
                      <p>
                        <span className="spans">Page:</span> {anExtract.page}
                      </p>
                    ) : null}
                    <p>
                      <a href={anExtract.link} target="blank">
                        {anExtract.link !== "" ? (
                          <span className="spans">Link</span>
                        ) : null}
                      </a>
                    </p>
                  </div>
                  <div className="tagscont">
                    {anExtract.tags.length > 0
                      ? anExtract.tags.split(/[,;.]+/).map((tag) => (
                          <div className="extractTag" key={Math.random()}>#{tag}</div>
                        ))
                      : null}
                  </div>
                  <div>
                    <a href={`/edit/${anExtract.id}`} className="edit"><i className="far fa-edit"></i></a>
                    <a href={`/delete/${anExtract.id}`} className="delete"><i className="far fa-trash-alt"></i></a>
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
