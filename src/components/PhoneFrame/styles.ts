import styled from "styled-components";
import { IPhoneFrameProps } from "../../interfaces/components";

export const Phone = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png");
  background-position: center;
  background-size: 95% 100%;
  height: 20rem;
  width: 12rem;
  border: 7px solid var(--white);
  border-radius: 10px;
  animation: ${({ slide, delay }: IPhoneFrameProps) =>
    `slide-from-${slide} 1 ${delay}ms linear`};

  .phone__detail {
    position: fixed;
    top: 0;
    background-color: red;
    margin: -1px;
    width: 50px;
    height: 30px;
    border-radius: 0 0 4px 4px;
  }

  @keyframes slide-from-top {
    0% {
      transform: translateY(-100rem);
    }

    90% {
      transform: translateY(0rem);
    }

    95% {
      transform: translateY(0.5rem);
    }

    100% {
      transform: translateY(0rem);
    }
  }

  @keyframes slide-from-bottom {
    0% {
      transform: translateY(100rem);
    }

    20% {
      transform: translateY(90rem);
    }

    80% {
      transform: translateY(10rem);
    }

    90% {
      transform: translateY(0rem);
    }

    95% {
      transform: translateY(-0.5rem);
    }

    100% {
      transform: translateY(0rem);
    }
  }
`;
