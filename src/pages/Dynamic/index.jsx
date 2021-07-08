import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Create.css";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  Select,
} from "./common";
import { Marginer } from "../../components/marginer";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { addExtract } from "../../store/user/actions";
import { apiUrl } from "../../config/constants";
import Placeholder from "./image_placeholder.png";

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

const FormLabel = styled.label`
  color: #1c8abe;
  margin: 0px;
`;
const Divlabel = styled.div`
  width: 22%;

  height: fit-content;
  padding: 0;
  margin-bottom: 5px;
  text-align: center;
`;

const Divlabelinput = styled.div`
  display: flex;

  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  flex-direction: row;
  vertical-align: middle;
`;

export default function Dynamic_create() {
  const { REACT_APP_PRESET, REACT_APP_IMG_API } = process.env;

  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  const [image, setImage] = useState(Placeholder);

  const uploadImage = async (e) => {
    console.log("triggered");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", REACT_APP_PRESET);

    const res = await fetch(REACT_APP_IMG_API, {
      method: "POST",
      body: data,
    });

    const file = await res.json();
    console.log("file", file);
    setImage(file.url);
  };

  const [editExtractText, setEditExtractText] = useState("");
  const [editMediaType, setEditMediaType] = useState("Book");
  const [editTitle, setEditTitle] = useState("");
  const [editSubtitle, setEditSubtitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editPage, setEditPage] = useState("");
  const [editTags, setEditTags] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");
  const [editLink, setEditLink] = useState("");

  async function fetchImageText() {
    try {
      if (image === Placeholder) {
        return alert("You have to select an image file first!");
      }
      const response = await axios.post(`${apiUrl}/extracts/vision`, { image });
      setEditExtractText(response.data);
    } catch (error) {
      console.log("error test:", error.message);
    }
  }

  function Cancel(event) {
    event.preventDefault();
    console.log("I am Canceling");
    history.push("/mylibrary");
  }

  function submitForm(event) {
    event.preventDefault();

    if (editExtractText.length < 1) {
      return alert("Text field must have at least one character");
    }
    if (editTitle.length < 1) {
      return alert("Title field must have at least one character");
    }
    if (editAuthor.length < 1) {
      return alert("Author field must have at least one character");
    }

    // console.log("edits submitted")
    // setPassword("");
    // setConfirmPassword("");
    // console.log({text:editExtractText,mediaType:editMediaType,title:editTitle,subtitle:editSubtitle,author:editAuthor,page:editPage,
    //   tags:editTags,
    //   imageUrl:editImageUrl,link:editLink})
    dispatch(
      addExtract(
        editExtractText,
        editAuthor,
        editTitle,
        editSubtitle,
        editPage,
        editLink,
        editMediaType,
        editImageUrl,
        editTags
      )
    );
    history.push("/mylibrary");
  }

  return (
    <div>
      <div className="editfrom">
        <AllContainer>
          <TopContainer>
            <BackDrop />
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Extract</HeaderText>
              <SmallText>Please add the extract details</SmallText>
            </HeaderContainer>
          </TopContainer>
          <InnerContainer>
            <BoxContainer>
              <div className="Aisection">
                <p className="aiText">Get the extract text from an image:</p>
                <img className="extimage" src={image} alt="extract" />
                <Divlabel>
                  <input
                    className="Uploadimage"
                    type="file"
                    onChange={uploadImage}
                  />
                </Divlabel>
                <Marginer direction="vertical" margin={10} />
                <button className="imagetotext" onClick={fetchImageText}>
                  Image to Text
                </button>
                <Marginer direction="vertical" margin="1em" />
                <p className="aiText">Or type the extract manually:</p>
                <FormContainer>
                  <Divlabelinput>
                    <Divlabel>
                      <FormLabel>Text:</FormLabel>
                    </Divlabel>
                    <TextareaAutosize
                      className="areas"
                      placeholder="Extract Text"
                      value={editExtractText}
                      // value={props.editExtractText}
                      onChange={(event) =>
                        setEditExtractText(event.target.value)
                      }
                      required
                      wrap="hard"
                    />
                  </Divlabelinput>
                </FormContainer>
              </div>
              <p style={{ color: "#1C8ABE", fontSize: "18px" }}>Media Info:</p>
              <FormContainer
                style={{
                  border: "solid .5px rgb(28, 138, 190,0.4)",
                  padding: "10px",
                }}
              >
                {/* <Divlabelinput>
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

        </Divlabelinput> */}
                <Divlabelinput>
                  <Divlabel>
                    <FormLabel>Type:</FormLabel>
                  </Divlabel>
                  <Select
                    onChange={(event) => setEditMediaType(event.target.value)}
                    value={editMediaType}
                  >
                    <option value="Book">Book</option>
                    <option value="Online Article">Online Article</option>
                  </Select>
                </Divlabelinput>
                <Divlabelinput>
                  <Divlabel>
                    <FormLabel>Title:</FormLabel>
                  </Divlabel>
                  <Input
                    type="text"
                    placeholder="Title"
                    value={editTitle}
                    onChange={(event) => setEditTitle(event.target.value)}
                    required
                  />
                </Divlabelinput>
                <Divlabelinput>
                  <Divlabel>
                    <FormLabel>subtitle:</FormLabel>
                  </Divlabel>
                  <Input
                    type="text"
                    placeholder="subtitle"
                    value={editSubtitle}
                    onChange={(event) => setEditSubtitle(event.target.value)}
                    required
                  />
                </Divlabelinput>
                <Divlabelinput>
                  <Divlabel>
                    <FormLabel>Author:</FormLabel>
                  </Divlabel>
                  <Input
                    type="text"
                    placeholder="Author"
                    value={editAuthor}
                    onChange={(event) => setEditAuthor(event.target.value)}
                    required
                  />
                </Divlabelinput>
                {editMediaType === "Book" ? (
                  <Divlabelinput>
                    <Divlabel>
                      <FormLabel>Page:</FormLabel>
                    </Divlabel>
                    <Input
                      type="text"
                      placeholder="Page"
                      value={editPage}
                      onChange={(event) => setEditPage(event.target.value)}
                      required
                    />
                  </Divlabelinput>
                ) : null}
                <Divlabelinput>
                  <Divlabel>
                    <FormLabel>
                      <span style={{ color: "#54CC82" }}>*</span>Tags:
                    </FormLabel>
                  </Divlabel>
                  <Input
                    type="text"
                    placeholder="tag1,tag2,tag3..."
                    value={editTags}
                    onChange={(event) => setEditTags(event.target.value)}
                    required
                  />
                </Divlabelinput>

                {editMediaType === "Book" ? (
                  <Divlabelinput>
                    <Divlabel>
                      <FormLabel>ImageUrl:</FormLabel>
                    </Divlabel>
                    <Input
                      type="text"
                      placeholder="ImageUrl"
                      value={editImageUrl}
                      onChange={(event) => setEditImageUrl(event.target.value)}
                      required
                    />
                  </Divlabelinput>
                ) : null}
                {editMediaType === "Online Article" ? (
                  <Divlabelinput>
                    <Divlabel>
                      <FormLabel>Link:</FormLabel>
                    </Divlabel>

                    <Input
                      type="text"
                      placeholder="Link"
                      value={editLink}
                      onChange={(event) => setEditLink(event.target.value)}
                      required
                    />
                  </Divlabelinput>
                ) : null}
              </FormContainer>
              <Marginer direction="vertical" margin={10} />
              <SubmitButton type="submit" onClick={submitForm}>
                + New Addition
              </SubmitButton>
              <button onClick={Cancel} className="CreateCancelButton">
                Cancel
              </button>
              <Marginer direction="vertical" margin="1em" />
            </BoxContainer>
          </InnerContainer>
          <p
            style={{
              fontSize: "14px",
              textAlign: "center",
              color: "#54CC82",
              fontStyle: "italic",
            }}
          >
            *Note: please separate your tags by commas "," or semicolons ";".
          </p>
        </AllContainer>
      </div>
    </div>
  );
}
