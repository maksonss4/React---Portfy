import styled from "styled-components";

export const Container = styled.div`
height: 85vh;
width: 18.75rem;
background: var(--white);
border-radius: 8px;
margin-top: 20px;
box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
text-align: center;
display: flex;
flex-direction: column;
gap: 20px;
  h2{
    margin-top: 20px;
    font-size: 20px;
  }
  ul {
    width: 100%;
    max-height: 85vh;
    gap: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--ligth-grey);
      border-radius: 20px;
    }
  }
`;
export const Card = styled.li`
  width: 100%;
  border-bottom: 1px solid black;
  height: 30%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  h3 {
    font-size: 16px;
    color: var(--dark-grey);
  }
  span {
    font-size: 14px;
  }
  p {
    font-size: 10px;
    color: var(--medium-grey);
  }
  a {
    font-size: 14px;
    text-decoration: none;
  }
`;
