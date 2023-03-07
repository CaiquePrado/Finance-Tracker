import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const ProfitOutlayButton = styled.button`
  background-color: ${(props) => props.theme.blue};
  border: 0;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  transition: filter 0.2s ease;
`;

export const Overlay = styled(Dialog.DialogOverlay)`
  background-color: black;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 99;
`;

export const Content = styled(Dialog.DialogContent)`
  background-color: ${(props) => props.theme["blue-800"]};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  width: 33.438rem;
  height: 33rem;
  padding: 3rem;
  z-index: 999;
  color: ${(props) => props.theme.white};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 27.438rem;
    min-height: 12.125rem;
    margin-top: 2rem;
    width: 100%;

    input {
      background-color: ${(props) => props.theme["blue-900"]};
      border: 0;
      height: 3.375rem;
      padding: 0 1rem;
      border-radius: 0.5rem;
      color: ${(props) => props.theme["gray-100"]};

      &::placeholder {
        color: ${(props) => props.theme["blue-400"]};
      }
    }

    button[type="submit"] {
      cursor: pointer;
      height: 3.625rem;
      font-weight: 700;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.blue};
      border-radius: 0.5rem;
      margin-top: 1.5rem;
      padding: 0 1.25rem;
    }
  }
`;

export const CloseButton = styled(Dialog.DialogClose)`
  display: inline-flex;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme.blue};
`;

export const Options = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const OptionButton = styled(RadioGroup.Item)`
  background-color: ${(props) => props.theme["blue-600"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme["gray-100"]};

  svg {
    color: ${(props) => props.theme["blue-400"]};
  }
`;
