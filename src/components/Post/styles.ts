import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: white;
  border-radius: 8px;
  width: 343px;
  height: 137px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  .PostContent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .userLogo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 10px;
  }
  .PostText {
    width: 80%;
    height: 80%;
  }
  .contentPost {
    width: 250px;
    font-style: normal;
    font-weight: 400;
    font-size: 0.938rem;
    line-height: 1.375rem;
    max-width: 26ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default PostContainer;
