import styled from "styled-components";

export const SearchBoxContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  display: flex;
  height: 3.375rem;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["blue-900"]};
    border: 0;
    padding: 1rem;
    color: ${(props) => props.theme["gray-100"]};

    &::placeholder {
      color: ${(props) => props.theme["blue-400"]};
    }
  }

  button {
    cursor: pointer;
    border-radius: 0.5rem;
    width: 150px;
    background-color: ${(props) => props.theme.blue};
    border: 0;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 1rem;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;
