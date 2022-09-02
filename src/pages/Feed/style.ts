import styled from "styled-components";

export const ContainerFeed = styled.div`
  padding-top: 6rem;
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;

  .container-post {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    overflow-y: auto;
    height: 81.3vh;
    ::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 1000px) {
      overflow-y: unset;
    }
  }
`;

export const MainFeed = styled.main`
  display: flex;
  gap: 20px;

  @media (min-width: 1000px) {
    padding: 0 50px;
  }
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DivMidle = styled.div``;

export const DivRight = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
