import styled from "styled-components";
import Bg from "../../assets/Bg.svg";

export const HeaderContainer = styled.header`
  background-size: cover;
  background: url(${Bg}) no-repeat center;
  width: 100%;
  height: 13.75rem;
  position: relative;

  div {
    height: 100%;
    width: 100%;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    top: -3.125rem;

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
