import styled from "styled-components";

export const ContainerFeed = styled.div`
  padding: 0 0.7rem;
  padding-top: 6.2rem;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .display-nome_mobile {
    display: none;
    @media (min-width: 1000px) {
      display: unset;
    }
  }
`;

export const DivLeft = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
  }
`;

export const DivMidle = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    min-width: 350px;
  }
`;

export const DivRight = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    gap: 1rem;
  }
`;

export const UlPosts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  li {
    display: flex;
    gap: 2rem;
    background-color: var(--white);
    box-shadow: var(--boxshadow);
    padding: 1rem;
    border-radius: 10px;
  }

  img {
    width: 5rem;
    border-radius: 50%;
  }

  .div-description {
    display: flex;
    flex-direction: column;
  }
`;
