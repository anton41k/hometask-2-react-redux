import styled from "@emotion/styled";

export const TdStyled = styled.td`
  background-color: var(--color-bgc-td);
  padding: 3px 10px;

  font-weight: ${({ tdIsBold }) => (tdIsBold ? "bold" : "normal")};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// export const WrrapSvgCategory = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 32px;
//   height: 32px;

//   border-radius: 50%;

//   background-color: var(--color-fill-icon);
//   color: var(--color-text-white);
// `;

// export const WrrapSvgIcon = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 20px;
//   height: 20px;

//   cursor: pointer;
// `;
