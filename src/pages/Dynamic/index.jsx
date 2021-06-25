
import React from "react";
import { useEffect,useState } from "react";
import "./Create.css";
import { useSelector,useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { BoxContainer, FormContainer, Input, SubmitButton,Select } from "./common";
import { Marginer } from "../../components/marginer";
import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';
import { visionAPI,addExtract } from "../../store/user/actions";
// import Brave from "./brave.png"
// import vision from "@google-cloud/vision"
// const Myjason =require("./apikey.json")


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




export default function Dynamic_create() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();  

  useEffect(() => {
  if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  // async function quickstart() {
  //   // const vision = require("@google-cloud/vision");
  
  //   // Creates a client
  //   const client = new vision.ImageAnnotatorClient({
  //     "type": "service_account",
  //     "project_id": "senior-project-1623608431612",
  //     "private_key_id": "316148f5c54ae39d7f6d9be673ee5ed580823414",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCnB3fvKtR07xQP\nasx9LkF41MX33V/nYxSQuDFQwgANGOJxdslEkdDaFclsvqLNvOXrnlZYelIK8/R/\nx+PQEROHaccIO/wqjZh7t7OOQSQFGS0zDACAGT9yWxQU4ktWAHnf9sjtZalkUYU5\nn0FiIyX9oJttDPYgoI8uHQODv1QBSzFX2B8GHoMf5BBnY2pdpZoLTfhzDsIWVBZL\nG/74hxF9u9K2NVWRbCZJ+m3Bo5YeBwtutUedJ8DPPN6kyLfO3t/9obXM/NsM2Xjo\nRaoQs5rDPiI/ZAgUTRSD8bWjjSjrt8UxkNytMR7/lkERWoPWxR3ajLnm0W/TQ4nC\nD6ifBLyhAgMBAAECggEASI41epaj0KHUGHhfmNchiLAAyRGIafZ/xffFMFv9crMH\nFpuvhVJEI6AILe1HwlBWnfnbbza/cdOUN3eozcbFMXLxCvInsYJtpPxhCp/gWjic\nCksh4oNVLMNEn2fHqvWs+21zza/2G8ZPtX6pA8zZ4WlFauMQ/Y5RdAoVb0MK5j5E\nJztFP3TUZcyaWp3Q+m/Z3T9lVDOMpszuiclU2hzdWvjo6b32+oSc3p6loPfCCwqt\nC0ufPUb4LkyNBqkzGqEyiweVNV77zjo7n5QHwh+iAC6cJJZ8RgKK6sPO+xk8S8SG\nNhigXFFv7BXT0wUsYUW5r+KEfcjalN5oLVeVD+zScwKBgQDaYDj7x/x4wXsmilK3\nvsgboB1KMCeE53EHJxP4SgG9489EqxlMeuuFcJaBHAhVRL4GhDJcXGsxnEogVj7l\ndmRpxCSwKsq0bLHPh+hQa6ypoCp3tQwF1zKow+bGBwrq+EVv8hk45hAdIDwxxYll\nLzEj3L8JyVw17iflc5XbUKkzfwKBgQDDzobuKb302nNu6b0MtEArTjyfNjGRJFoD\nEixy1EqaHdldudQO8lRowvMc0XDfP0Ly1SYCXBgTSlcATNGcLU2cVjfKurP0WzEg\noXopzJlgoqjxBog33WhlBWYnEqKqPxC2NRP9rOHHlWQ/uwadzG6y7Gx/z0iu+6Ep\nFgTqSduf3wKBgQDJ1rIUla2Xd016O9NkneObFQy9a3C7eKeRst7UWKLvfkYu8+34\nMIzL01pojx5soZL5tupNT+aL/ibNaKnNsPXyhCZc5dBhny1h4f4phrwaND3MUvx/\n0X2zWw5L7mp672pOo/gIDSzLnuXEIw5xBYNn4Dp6szCVcEBT5deW1CDvxQKBgBSN\ndg5DpWOxFlK7CBPwS5gAE07m4lcIyMXvv2iiLd51aZ5z5fVXrFJ+vAP3W/Ci9EUG\n6IFw5zoHIJCwf4P0IWRajGqkJEVu2P5C1M7UYfkJuc/qzpuGivGnmmxZgWd7TSbC\n9YE4B07quGYUHIKttaTkOhNET63GTclBPWzWKc5jAoGAJydIE5mVcc/UnjGvj4+W\nmWVP+mzCdYUxz5QlXEuK1F+FRr8emnFp8E8KOCH/awl4QtgJN5/VxSSqwaZ9h/MV\nhJxXt1MYJq+KABWufeG9+eicKoPtXjMN8rmjCaYjToEPNBmFhiqQO9mvbIOp2ENl\ncnUH/IxnK/kGbUYAtlc8pos=\n-----END PRIVATE KEY-----\n",
  //     "client_email": "seniorprojectservice@senior-project-1623608431612.iam.gserviceaccount.com",
  //     "client_id": "102311645769868035798",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/seniorprojectservice%40senior-project-1623608431612.iam.gserviceaccount.com"
  //   });
  
  //   // const fileName = "brave.png";
  
  //   // Performs text detection on the local file
  //   const [result] = await client.textDetection({Brave});
  //   const detections = result.textAnnotations;
  //   console.log("Text:");
  //   //   detections.forEach((text) => console.log(text));
  //   console.log(detections[0].description);
  // }
  // // quickstart();

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")
  
  const uploadImage = async(e) => {
    console.log("triggered")
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append('upload_preset', "voa0l8os")
    //first parameter is always upload_preset, second is the
    setLoading(true)

    const res = await fetch("https://api.cloudinary.com/v1_1/demblpikj/image/upload", {
      method: "POST",
      body: data
    })

    const file = await res.json()
    console.log("file", file)
    setImage(file.url)
  }


  
  const [editExtractText, setEditExtractText] = useState("");
  const [editMediaType, setEditMediaType] = useState("Book");
  const [editTitle, setEditTitle] = useState("");
  const [editSubtitle, setEditSubtitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editPage, setEditPage] = useState("");
  const [editTags, setEditTags] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");
  const [editLink, setEditLink] = useState("");

  const[imgFile,setImgFile]=useState("")
console.log(imgFile)
  const stringy=imgFile.toString();
console.log(stringy);

  function vision(){
    console.log("Dispatched for vision")
    dispatch(visionAPI(imgFile));
  }


  function Cancel(event){
    event.preventDefault();
    console.log("I am Canceling");
    history.push("/mylibrary");
  }

  function submitForm(event) {
    event.preventDefault();
    
if(editExtractText.length<1){
  return alert("Text field must have at least one character");
}
if(editTitle.length<1){
  return alert("Title field must have at least one character");
}
if(editAuthor.length<1){
  return alert("Author field must have at least one character");
}

// console.log("edits submitted")
    // setPassword("");
    // setConfirmPassword("");
    // console.log({text:editExtractText,mediaType:editMediaType,title:editTitle,subtitle:editSubtitle,author:editAuthor,page:editPage,
    //   tags:editTags,
    //   imageUrl:editImageUrl,link:editLink})
    dispatch(addExtract(editExtractText,editAuthor,editTitle,editSubtitle,editPage,editLink,editMediaType,editImageUrl,
      editTags
      ));
    history.push("/mylibrary");
  }


  return (
    <div>
      <div className="editfrom">
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
          onChange={(event) => setEditPage(event.target.value)}
          required
        />
        </Divlabelinput>
            : null}
        <Divlabelinput>
        <Divlabel>
        <FormLabel>
          <span style={{color:"#54CC82"}}>*</span>Tags:
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
          onChange={(event) => setEditLink(event.target.value)}
          required
        />
        </Divlabelinput>
        
        : null}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitForm}>
        + New Addition
      </SubmitButton>
      <button onClick={Cancel} className="CreateCancelButton">Cancel</button>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
    </InnerContainer>
    <p style={{fontSize:"14px",textAlign:"center", color:"#54CC82",fontStyle:"italic"}}>*Note: please separate your tags by commas "," or semicolons ";".</p>
  </AllContainer> 
    </div>
    <button onClick={vision}>Vision</button>
    <div>
    <input type="file" name="file" placeholder="drag it here" onChange={uploadImage}/>
      <img src={image} alt="hey image"/>
    </div>
    </div>
  );
}
