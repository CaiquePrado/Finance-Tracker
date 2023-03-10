import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 4rem auto;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1120px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;

  tr {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 3.375rem;
    margin: 0.9rem 0;

    td {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      background-color: ${(props) => props.theme["blue-600"]};

      &:first-child {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
    }
  }
`;

interface ItemPriceProps {
  variant: "income" | "outcome";
}

export const ItemPrice = styled.span<ItemPriceProps>`
  color: ${(props) =>
    props.variant === "outcome"
      ? props.theme["money-negative"]
      : props.theme.money};
`;
