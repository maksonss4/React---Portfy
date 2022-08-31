import styled from "styled-components";
export const Container = styled.div`
  background: linear-gradient(115.77deg, #47dac5 10.59%, #19cae5 87.7%);
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const FormSTLD = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 400px;

  height: 95%;
  border-radius: 20px;
  background-color: #f1f3f5;
  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 80%;

    height: auto;
  }
  legend {
    font: bold 2rem "Poppins";
    margin: auto;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 0;
  }
  @media screen and (min-width: 320px) and (max-width: 600px) {
    width: 90px;
  }
`;

export const PageDivision = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const SubDivision = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 95%;
  h1 {
    font: bold 2rem "Poppins";
    color: #fff;
  }
  p {
    color: white;
    max-width: 300px;
    text-align: left;
    margin-top: 20px;
  }
`;
export const LogoContainer = styled.div`
  margin-top: 10px;
`;
