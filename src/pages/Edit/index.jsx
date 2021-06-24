
import React from "react";
import { useEffect,useState } from "react";
import "./library_page_view.css";
import { selectUser } from "../../store/user/selectors";
import { useSelector,useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import Onlinearticle from "./Online_Article.png";
import { useParams } from "react-router-dom";
import { BoxContainer, FormContainer, Input, SubmitButton,Select } from "./common";
import { Marginer } from "../../components/marginer";
import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';

const AllContainer = styled.div`
  width: 520px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(28, 138, 190, 0.7);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 130%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -350px;
  left: -100px;
  background: rgb(28, 139, 190);
  background: linear-gradient(
    58deg,
    rgba(28, 139, 190, 1) 40%,
    rgba(74, 177, 224, 1) 100%
  );
  @media screen and (max-width: 900px) {
      width: 160%;
      top: -330px;
      left: -100px;
  }
`;


const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  text-align: center;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const FormLabel=styled.label`
color: #1C8ABE;
margin:0px;


`
const Divlabel=styled.div`
width:22%;

height: fit-content;
padding:0;
margin-bottom:5px;
text-align: center;
`

const Divlabelinput=styled.div`
display: flex;

align-items: center;
justify-content: left;
flex-wrap: wrap;
flex-direction: row;
vertical-align: middle;
`




export default function Edit() {
  const { id } = useParams();
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const filteredExtract=user.extracts.filter((ext)=> ext.id===Number(id))
  const obj=filteredExtract[0];
  

  useEffect(() => {
  if (token === null) {
      history.push("/login");
    }
  }, [token, history]);
  
  const[confirmEdit, setConfirmEdit]=useState(false)
  const [editExtractText, setEditExtractText] = useState("");
  const [editMediaType, setEditMediaType] = useState("Book");
  const [editTitle, setEditTitle] = useState("");
  const [editSubtitle, setEditSubtitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editPage, setEditPage] = useState(null);
  const [editTags, setEditTags] = useState([]);
  const [editImageUrl, setEditImageUrl] = useState(null);
  const [editLink, setEditLink] = useState(null);

  function Confirm(event) {
    event.preventDefault();
    console.log("I am confirming");
    const alltags=obj.tags.length!==0? obj.tags.map(t=>t.type).toString():"";
    setConfirmEdit(true)
    setEditExtractText(obj.text)
    setEditMediaType(obj.mediaType)
    setEditTitle(obj.title)
    if(obj.subtitle !==null){
      setEditSubtitle(obj.subtitle)
    }
    setEditAuthor(obj.author)
    if(obj.page){
      setEditPage(obj.page)
    }
    setEditTags(alltags)

    if(obj.imageUrl!==null){
      setEditImageUrl(obj.imageUrl)
    }
    if(obj.link !==null){
    setEditLink(obj.link)
    }
  }

  function Cancel(event){
    event.preventDefault();
    console.log("I am Canceling");
    history.push("/mylibrary");
  }

  function submitForm(event) {
    event.preventDefault();
    // dispatch(patchpw(password, token));
console.log("edits submitted")
    // setPassword("");
    // setConfirmPassword("");
    // history.push("/mylibrary");
    console.log({text:editExtractText,mediaType:editMediaType,title:editTitle,subtitle:editSubtitle,author:editAuthor,page:editPage,tags:editTags,imageUrl:editImageUrl,link:editLink})
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
                  <a href={`/delete/${anExtract.id}`} className="delete"><i className="far fa-trash-alt"></i></a>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
        <div className="searchinfo">
     <button onClick={Confirm} className="confirmButton">Edit</button>
     <button onClick={Cancel} className="CancelButton">Cancel</button>
   </div>
      <div className="editfrom">
      {confirmEdit===true?<AllContainer>
    <TopContainer>
      <BackDrop />
      <HeaderContainer>
        <HeaderText>Edit</HeaderText>
        <HeaderText>Extract</HeaderText>
        <SmallText>Please type in your edits</SmallText>
      </HeaderContainer>
    </TopContainer>
    <InnerContainer>
    <BoxContainer>
      <FormContainer>
      <Divlabelinput>
        <Divlabel>
        <FormLabel>
          Text:
          </FormLabel>
          </Divlabel>
        <TextareaAutosize
       className="areas"
          
          placeholder="Extract Text"
          value={editExtractText}
          // value={props.editExtractText}
          onChange={(event) => setEditExtractText(event.target.value)}
          required
          wrap="hard"
        />

        </Divlabelinput>
        <Divlabelinput>
        <Divlabel>
        <FormLabel>
          Type:
          </FormLabel>
          </Divlabel>
        <Select onChange={(event) => setEditMediaType(event.target.value)} 
        value={editMediaType}
        // value={props.editMediaType}
        >
                <option value="Book">Book</option>
                <option value="Online Article" >Online Article</option>
        </Select>
        </Divlabelinput>
        <Divlabelinput>
        <Divlabel>
        <FormLabel>
          Title:
          </FormLabel>
          </Divlabel>
        <Input
          type="text"
          placeholder="Title"
          value={editTitle}
          // value={props.editTitle}
          onChange={(event) => setEditTitle(event.target.value)}
          required
        />
        </Divlabelinput>
        <Divlabelinput>
        <Divlabel>
        <FormLabel>
          subtitle:
          </FormLabel>
          </Divlabel>
        <Input
          type="text"
          placeholder="subtitle"
          value={editSubtitle}
          // value={props.editSubtitle}
          onChange={(event) => setEditSubtitle(event.target.value)}
          required
        />
        </Divlabelinput>
        <Divlabelinput>
        <Divlabel>
        <FormLabel>
          Author:
          </FormLabel>
          </Divlabel>
              <Input
          type="text"
          placeholder="Author"
          value={editAuthor}
          // value={props.editAuthor}
          onChange={(event) => setEditAuthor(event.target.value)}
          required
        />
      </Divlabelinput>
      {editMediaType==="Book"?
      <Divlabelinput>
      <Divlabel>
        <FormLabel>
          Page:
          </FormLabel>
          </Divlabel>
        <Input
          type="text"
          placeholder="Page"
          value={editPage}
          // value={props.editPage}
          onChange={(event) => setEditPage(event.target.value)}
          required
        />
        </Divlabelinput>
:null}
        <Divlabelinput>
        <Divlabel>
        <FormLabel>
          Tags:
          </FormLabel>
          </Divlabel>
            <Input
          type="text"
          placeholder="tags separated by commas"
          value={editTags}
          // value={props.editTags}
          onChange={(event) => setEditTags(event.target.value)}
          required
        />
        </Divlabelinput>

        {editMediaType==="Book"?
        <Divlabelinput>
        <Divlabel>
        <FormLabel>
          ImageUrl:
          </FormLabel>
          </Divlabel>
        <Input
          type="text"
          placeholder="ImageUrl"
          value={editImageUrl}
          // value={props.editImageUrl}
          onChange={(event) => setEditImageUrl(event.target.value)}
          required
        />
        </Divlabelinput>
        : null}
         {editMediaType==="Online Article"?
         <Divlabelinput>
         <Divlabel>
         <FormLabel>
           Link:
           </FormLabel>
           </Divlabel>
         
         <Input
          type="text"
          placeholder="Link"
          value={editLink}
          // value={props.editLink}
          onChange={(event) => setEditLink(event.target.value)}
          required
        />
        </Divlabelinput>
        
        : null}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitForm}>
        Submit Edits
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
    </InnerContainer>
  </AllContainer> : null}
    </div>
    </div>
  );
}
