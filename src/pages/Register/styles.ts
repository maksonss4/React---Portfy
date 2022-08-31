import styled from "styled-components";

export const Container = styled.div`
  background: var(--gradient);
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 100px;
  justify-content: space-between;

  button {
    margin-bottom: 40px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  h1 {
    margin-left: 0px;
    margin-right: 20px;
    color: var(--green-black);
    text-shadow: var(--boxshadow);
    font-size: 40px;
    font-family: "Goldman";
  }
`;

export const DivInformations = styled.div`
  color: white;
  display: flex;
  padding-bottom: 15rem;
  flex-direction: column;
  gap: 40px;

  h2 {
    text-shadow: var(--boxshadow);
    font-size: 28px;
    font-family: "Poppins";
    font-weight: 700;
  }

  p {
    font-size: 20px;
    width: 332px;
    font-weight: 500;
    line-height: 30px;
    font-style: normal;
  }
`;

export const DivForm = styled.div`
  width: 25rem;
  max-height: 95vh;
  background-color: var(--whitesmoke);
  border-radius: 20px;
  margin-top: 10px;
  border: solid var(--white) 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--medium-grey);
    border-radius: 20px;
  }

  h2 {
    margin-top: 2rem;
  }

  .divBigode {
    position: fixed;
    background: var(--white);
    height: 1.25rem;
    width: 12.5rem;
    border-radius: 0px 0px 6px 6px;
  }

  label {
    font-size: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  form select {
    height: 36px;
    border-radius: 8px;
    border: none;
    padding-left: 5px;
    width: 21.31rem;
    font-family: "Poppins";
  }

  form button {
    margin: 1rem 0 1.5rem 0;
    font-size: 20px;
  }

  @media (max-width: 1000px) {
    width: 20rem;
    height: 100%;
    margin: 0px;
    form input {
      width: 16.87rem;
    }
    form select {
      width: 17.5rem;
    }
    form button {
      margin-top: 20px;
      width: 17.5rem;
    }
  }
`;
