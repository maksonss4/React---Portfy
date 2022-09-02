import styled from "styled-components";
import { IPhoneFrameProps } from "../../interfaces/components";

export const Phone = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20rem;
  width: 12rem;
  border: 7px solid var(--white);
  border-radius: 10px;
  animation: ${({ slide, delay }: IPhoneFrameProps) =>
    `slide-from-${slide} 1 ${delay}ms linear`};

  span {
    position: absolute;
    top: -1px;
    background-color: var(--white);
    margin: -1px;
    width: 50%;
    height: 3%;
    z-index: 3;
    border-radius: 0 0 4px 4px;
  }

  @keyframes slide-from-top {
    0% {transform: translateY(-100rem)}
    90% {transform: translateY(0rem)}
    95% {transform: translateY(0.5rem)}
    100% {transform: translateY(0rem)}
  }

  @keyframes slide-from-bottom {
    0% {transform: translateY(100rem)}
    90% {transform: translateY(0rem)}
    95% {transform: translateY(-0.5rem)}
    100% {transform: translateY(0rem)}
  }
`;
