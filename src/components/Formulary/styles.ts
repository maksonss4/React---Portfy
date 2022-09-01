import styled from "styled-components";

const Form = styled.form`
  display: flex;
  background-color: var(--whitesmoke);
  max-height: 100%;
  flex-direction: column;
  width: 100%;
  max-width: 95%;
  gap: 1rem;
  padding: 2rem 1rem;
  border-radius: 4px;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 3rem;

  h3,
  span {
    text-align: center;
  }

  h3 {
    font-size: 0.9rem;
  }

  label {
    font-size: 0.65rem;
  }

  span {
    color: var(--color-grey-1);
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

export default Form;