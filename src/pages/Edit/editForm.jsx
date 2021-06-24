import React, { useState } from "react";
import { patchpw } from "../../store/user/actions";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { BoxContainer, FormContainer, Input, SubmitButton,Select,InputBigText } from "./common";
import { Marginer } from "../../components/marginer";
import styled from "styled-components";

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

export function EditForm(props) {
  const history = useHistory();

  const [editExtractText, setEditExtractText] = useState("");
  const [editMediaType, setEditMediaType] = useState("Book");
  const [editTitle, setEditTitle] = useState("");
  const [editSubtitle, setEditSubtitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editPage, setEditPage] = useState("");
  const [editTags, setEditTags] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");
  const [editLink, setEditLink] = useState("");

console.log(editExtractText,editMediaType,editTitle,editSubtitle,editAuthor,editPage,editTags,editImageUrl,editLink)

  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    // dispatch(patchpw(password, token));
console.log("edits submitted")
    // setPassword("");
    // setConfirmPassword("");
    // history.push("/mylibrary");
  }

  return (
    <AllContainer>
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
        <InputBigText
          type="text"
          placeholder="Extract Text"
          // value={editExtractText}
          value={props.editExtractText}
          onChange={(event) => setEditExtractText(event.target.value)}
          required
        />
        <Select onChange={(event) => setEditMediaType(event.target.value)} 
        // value={editMediaType}
        value={props.editMediaType}
        >
                <option value="Book">Book</option>
                <option value="Online Article" >Online Article</option>
        </Select>
        <Input
          type="text"
          placeholder="Title"
          // value={editTitle}
          value={props.editTitle}
          onChange={(event) => setEditTitle(event.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="subtitle"
          // value={editSubtitle}
          value={props.editSubtitle}
          onChange={(event) => setEditSubtitle(event.target.value)}
          required
        />
              <Input
          type="text"
          placeholder="Author"
          // value={editAuthor}
          value={props.editAuthor}
          onChange={(event) => setEditAuthor(event.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Page"
          // value={editPage}
          value={props.editPage}
          onChange={(event) => setEditPage(event.target.value)}
          required
        />
            <Input
          type="text"
          placeholder="tag,tag,..."
          // value={editTags}
          value={props.editTags}
          onChange={(event) => setEditTags(event.target.value)}
          required
        />
        {editMediaType==="Book"?<Input
          type="text"
          placeholder="ImageUrl"
          // value={editImageUrl}
          value={props.editImageUrl}
          onChange={(event) => setEditImageUrl(event.target.value)}
          required
        /> : null}
         {editMediaType==="Online Article"?<Input
          type="text"
          placeholder="Link"
          // value={editLink}
          value={props.editLink}
          onChange={(event) => setEditLink(event.target.value)}
          required
        /> : null}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitForm}>
        Submit Edits
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
    </InnerContainer>
  </AllContainer>
    
  );
}
