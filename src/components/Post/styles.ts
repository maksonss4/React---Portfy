import styled from "styled-components";

const LiContainer = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  .PostContent {
  }

  img {
    width: 80px;
  }

  .PostText {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default LiContainer;
