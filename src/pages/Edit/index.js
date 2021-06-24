import React from "react";
import { useEffect,useState } from "react";
import "./library_page_view.css";
import { selectUser } from "../../store/user/selectors";
import { useSelector,useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import Onlinearticle from "./Online_Article.png";
import { useParams } from "react-router-dom";
import { deleteExtract } from "../../store/user/actions";


export default function Edit() {
  const { id } = useParams();
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const filteredExtract=user.extracts.filter((ext)=> ext.id===Number(id))
  const obj=filteredExtract[0];
console.log(obj);

  useEffect(() => {
  if (token === null) {
      history.push("/login");
    }
  }, [token, history]);
  
  const[text, setText]=useState("")

  function Confirm(event) {
    event.preventDefault();
    console.log("I am confirming");
    setText(obj.text)
  }

  function Cancel(event){
    event.preventDefault();
    console.log("I am Canceling");
    history.push("/mylibrary");
  }

  

  return (
    <div>
      <button onClick={Confirm}>edit</button>
      <input style={{width:"50%",height:"200px"}} value={text} onChange={(event) => setText(event.target.value)}/>
    </div>
  );
}
