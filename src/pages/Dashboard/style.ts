import styled from "styled-components"

export const Container = styled.div`
padding-top: 100px;
padding-left: 10px;
display: flex;
gap:10px;
width: 100%;
justify-content: space-around;
  .main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 309px;
    @media(min-width: 1000px){
      width: 700px;
    }
  }
`