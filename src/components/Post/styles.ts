import styled from "styled-components";

const PostContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 100%;
  min-height: 137px;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;

  box-shadow: var(--boxshadow);

  .PostContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin: 5px;
  }
  .userDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .PostText {
    width: 100%;
  }

  .contentPost {
    max-width: 90%;
    font-style: normal;
    font-weight: 400;
    font-size: 0.938rem;

    text-overflow: ellipsis;
    margin: 0 10px 0 0;
    white-space: normal;
    color: var(--dark-grey);
  }
  .userName {
    width: 80%;
  }
`;

export default PostContainer;
