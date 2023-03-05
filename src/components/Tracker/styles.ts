import styled from "styled-components";

export const TrackContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  z-index: 99;
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4.375rem;
`;

export const TrackContent = styled.div`
  max-width: 356px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 0.5rem;
  height: 8.75rem;
  padding: 1.5rem;

  h2 {
    margin-top: 1.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    p {
      color: ${(props) => props.theme["gray-200"]};
    }
    svg {
      color: ${(props) => props.theme["blue-400"]};
    }
  }
`;
