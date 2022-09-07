import styled from "styled-components";

const PostContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--boxshadow);
  width: 100%;
  max-width: 100%;
  min-height: 137px;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;

  .PostContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin: 5px;
    width: 100%;
  }
  .userDetails {
    display: flex;
    flex-direction: column;
  }

  .PostText {
    width: 100%;
  }

  .contentPost {
    max-width: 90%;
    height: auto;
    text-justify: initial;
    font-style: normal;
    font-weight: 400;
    font-size: 0.938rem;

    margin: 0 10px 0 0;
    color: var(--dark-grey);
  }
  .user-name-and-techs {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 80%;
    h2 {
      font: bold 1.2rem "Poppins";
    }
    ul {
      display: flex;
      flex-direction: row;
      max-width: 50%;
      overflow: hidden;

      li {
        padding: 2px 6px 2px;
        font: bold 0.8rem "Poppins";
        color: var(--medium-green);
        border-left: 2px solid var(--medium-green);
      }
    }
  }

  button {
    background-color: transparent;
  }
`;

export default PostContainer;
