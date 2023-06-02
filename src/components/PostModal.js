import styled from "styled-components";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";
import { postArticleAPI } from "../actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`Not an image,the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };
  const postArticle = (e) => {
    console.log("running");
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              {/* <h2>Create a post</h2> */}
              <SharedContent>
                <UserInfo>
                  {props.user.photoURL ? (
                    <img src={props.user.photoURL} />
                  ) : (
                    <img src="/images/user.svg" alt="" />
                  )}
                  <div>
                    <span>{props.user.displayName}</span>
                    <p>Post to anyone</p>
                    {/* <img src="images/down-icon.svg" alt="" /> */}
                  </div>
                </UserInfo>
              </SharedContent>
              <button onClick={(event) => reset(event)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <Editor>
              <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                placeholder="What do you want to talk about?"
                autoFocus={true}
              />
              {assetArea === "image" ? (
                <UploadImage>
                  <input
                    type="file"
                    accept="image/gif,image/jpeg,image/jpg image/png"
                    name="image"
                    id="file"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                  <p>
                    <label htmlFor="file">Select a image to share</label>
                  </p>
                  {shareImage && <img src={URL.createObjectURL(shareImage)} />}
                </UploadImage>
              ) : (
                assetArea === "media" && (
                  <>
                    <input
                      type="text"
                      placeholder="Please input a video link"
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                    />
                    {videoLink && (
                      <ReactPlayer width={"100%"} url={videoLink} />
                    )}
                  </>
                )
              )}
            </Editor>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src="/images/share_post/photo-icon.svg" alt="" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img src="/images/share_post/add-video-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/share_post/calendar-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/ellipsis.svg" alt="" />
                </AssetButton>
              </AttachAssets>
            </ShareCreation>
            <PostButton>
              <div>
                <img src="/images/share_post/schedule.svg" alt="" />
                <button
                  disabled={!editorText ? true : false}
                  style={{
                    backgroundColor: !editorText
                      ? "rgba(0,0,0,0.15"
                      : "#0a66c2",
                  }}
                  onClick={(event) => postArticle(event)}
                >
                  Post
                </button>
              </div>
            </PostButton>
          </Content>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Header = styled.div`
  display: block;
  /* padding: 16px 20px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  button {
    margin: 5px;
    height: 50px;
    width: 50px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.16);
      border-radius: 50%;
    }
    svg,
    img {
      pointer-events: none;
    }
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 0px 0px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    img {
      width: 18px;
      height: 18px;
    }
    p {
      font-weight: 500;
      font-size: 13px;
      margin-left: 5px;
    }
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 55px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  background-color: white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.09);
  border-radius: 50%;

  &:hover {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;

  ${AssetButton} {
    width: 55px;
    margin: 0 0 0 20px;
    @media (max-width: 768px) {
      margin: 0px 0 0 14px;
    }
  }
`;
const PostButton = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  div {
    display: flex;
    justify-content: space-between;
    button {
      min-width: 60px;
      height: 30px;
      border-radius: 20px;
      padding-left: 16px;
      padding-right: 16px;
      /* background-color: #0a66c2; */
      color: white;
      cursor: pointer;
    }
    img {
      margin: 0 10px 0 10px;
      cursor: pointer;
    }
  }
`;

const Editor = styled.div`
  padding: 12px 24px;

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    border: none;
    outline: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  //   signIn: () => dispatch(signInAPI()),
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
