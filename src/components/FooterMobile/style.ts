import styled from "styled-components";

export const ContainerFooterMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(91.66deg, #47dac5 9.15%, #4a90e2 90.02%);
  color: var(--white);
  position: fixed;
  bottom: 0;
  width: 100vw;

  @media (min-width: 1000px) {
    display: none;
  }

  .container-icons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 450px;
  }
`;
