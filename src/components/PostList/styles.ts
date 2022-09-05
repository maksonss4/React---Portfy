import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 90%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45vw;
  
  background-color: var(--white);
  @media screen and (min-width: 200px) and (max-width: 1000px) {
    width: 100vw;
  }
`;

export const Textarea = styled.textarea`
  display: flex;
  width: 90%;
  height: 100px;
  border: none;
  outline: none;
  overflow: auto;
  margin: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const TextareaContainer = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 90%;
  height: 130px;
  border-radius: 10px;
  box-shadow: 0px 5px 34px -17px rgba(0, 0, 0, 0.58);
  margin: 10px;
  button {
    background-color: var(--ligth-blue);
    color: var(--white);
    border-radius: 10px;
    border: none;
    margin: 0 10px 10px;
    :hover {
      background-color: var(--ligth-green);
    }
  }
`;
