import styled from "@emotion/styled";
import close from "../../images/close.svg";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  position: fixed;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  width: 310px;

  padding: 40px 20px;

  border-radius: 30px;
  background-color: var(--color-text-white);
  box-shadow: 10px 10px 30px #000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 20px;
  height: 20px;

  border: none;
  border-radius: 50%;

  padding: 5px;

  background-color: inherit;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: contain;
  color: var(--color-text-black);

  transition: all 0.1s ease-out;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-icon-black);
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  padding: 0 0 20px;

  color: var(--color-text-black);
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  width: 180px;
`;
