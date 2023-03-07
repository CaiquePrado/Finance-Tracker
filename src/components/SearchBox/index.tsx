import { SearchBoxContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { TrackerContext } from "../../contexts/TrackerContext";

type validatorSearchSchemaData = zod.infer<typeof validatorSearchSchema>;

const validatorSearchSchema = zod.object({
  query: zod.string(),
});

export const SearchBox = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<validatorSearchSchemaData>({
    resolver: zodResolver(validatorSearchSchema),
    defaultValues: {
      query: "",
    },
  });

  const handleSearchSubmit = async (data: validatorSearchSchemaData) => {
    await loadExpenses(data.query);
  };

  const loadExpenses = useContextSelector(TrackerContext, (context) => {
    return context.loadExpenses;
  });

  return (
    <SearchBoxContainer onSubmit={handleSubmit(handleSearchSubmit)}>
      <input
        type="search"
        {...register("query")}
        id="query"
        placeholder="Search a Profit or Outlay"
      />
      <button disabled={isSubmitting}>Search</button>
    </SearchBoxContainer>
  );
};
