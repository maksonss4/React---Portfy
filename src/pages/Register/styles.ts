import styled from "styled-components"

export const Container = styled.div`
background: linear-gradient(115.77deg, #47DAC5 10.59%, #19CAE5 87.7%);
width: 100vw;
height: 100vh;
display: flex;
` 
export const DivPai = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
margin-left: 100px;
justify-content: space-between;
  button {
    margin-bottom: 40px;
  }
`
export const DivLogo = styled.div`
display: flex;
align-items: center;
margin-top: 30px;
  h1 {
    margin-left: 0px;
    margin-right: 20px;
    color: #005C57;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

`
export const DivInformations = styled.div`
margin-bottom: 460px;
color: white;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    font-size: 28px;
  }
  p {
    font-size: 20px;
    width: 332px;
  }
`
export const DivForm = styled.div`
width: 400px;
height: 95%;
background: #F1F3F5;
border-radius: 20px ;
margin-top: 10px;
border: solid white 8px;
display: flex;
flex-direction: column;
align-items: center;
  .divBigode {
    background: white;
    height: 20px;
    width: 200px;
    border-radius: 0px 0px 6px 6px ;
  }
  label {
    display: block;
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

  }
  form button {
    margin-top: 60px;
    font-size: 20px;
  }

`