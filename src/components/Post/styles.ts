import styled from "styled-components";

const LiContainer = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  margin: 0 2rem;
  gap: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

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
