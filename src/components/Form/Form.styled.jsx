import styled from "@emotion/styled";

export const Container = styled.div``;

export const WrrapForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrrapField = styled.div`
  margin: 0 0 20px 0;

  width: 200px;
`;

export const Label = styled.div`
  font-size: 15px;
  margin: 5px 0 3px 5px;
`;

export const SelectForm = styled.select`
  width: 100%;
  outline: none;
  padding: 3px 5px;
  border-radius: 5px;
  border: 1px solid var(--color-fill-icon);
`;

export const Option = styled.option``;

export const InputForm = styled.input`
  width: 100%;
  outline: none;
  padding: 3px 5px;
  border-radius: 5px;
  border: 1px solid var(--color-fill-icon);
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 3px 5px;
  border-radius: 5px;
  border: 1px solid var(--color-fill-icon);
`;

export const ErrorWrrap = styled.div`
  font-size: 12px;
  color: red;
  text-align: right;
`;
