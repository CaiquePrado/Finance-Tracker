import { SearchBoxContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type validatorSearchSchemaData = zod.infer<typeof validatorSearchSchema>;

const validatorSearchSchema = zod.object({
  query: zod.string(),
});

export const SearchBox = () => {
  const { register, handleSubmit, watch } = useForm<validatorSearchSchemaData>({
    resolver: zodResolver(validatorSearchSchema),
    defaultValues: {
      query: "",
    },
  });

  const handleSearchSubmit = async (data: validatorSearchSchemaData) => {};

  return (
    <SearchBoxContainer onSubmit={handleSubmit(handleSearchSubmit)}>
      <input
        type="search"
        {...register("query")}
        id="query"
        placeholder="Search a Profit or Outlay"
      />
      <button>Search</button>
    </SearchBoxContainer>
  );
};
