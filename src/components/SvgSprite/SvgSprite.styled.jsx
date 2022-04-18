import styled from "@emotion/styled";

export const Svg = styled.svg`
  width: 17px;
  height: 17px;

  fill: currentColor;
`;

export const WrrapSvgIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export const WrrapSvgCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: var(--color-fill-icon);
  color: var(--color-text-white);
`;
