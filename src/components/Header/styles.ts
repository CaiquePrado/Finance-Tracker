import styled from "styled-components";
import Bg from "../../assets/Bg.svg";

export const HeaderContainer = styled.header`
  background-size: cover;
  background: url(${Bg}) no-repeat center;
  width: 100%;
  height: 18.5rem;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["blue-400"]};
    }

    h1 {
      font-weight: 700;

      span {
        color: ${(props) => props.theme["blue-400"]};
      }
    }
  }
`;
