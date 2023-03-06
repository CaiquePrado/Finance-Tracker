import { SearchBoxContainer } from "./styles";

export const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <input
        // type="search"
        name="query"
        id="query"
        placeholder="Search a Profit or Outlay"
      />
      <button>Search</button>
    </SearchBoxContainer>
  );
};
