import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const ToastBox = styled(ToastContainer)`
  --toastify-icon-color-success: var(--success);
  --toastify-color-progress-success: var(--success);
  --toastify-icon-color-error: var(--color-negative);
  --toastify-color-progress-error: var(--color-negative);
  /* --toastify-color-dark: var(--black); */

  .Toastify__toast-theme--dark {
    border: 1px solid var(--color-grey-20);
    font-weight: 600;
    font-size: 0.8rem;
  }
`;
