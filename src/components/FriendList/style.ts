import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 310px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;

  h2 {
    color: var(--medium-grey);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 45px;
    border-radius: 50%;
  }
`;
