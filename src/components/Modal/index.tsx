import { TrackerContext } from "../../contexts/TrackerContext";
import { useContextSelector } from "use-context-selector";

import { useForm, Controller } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Overlay,
  ProfitOutlayButton,
  Content,
  CloseButton,
  Options,
  OptionButton,
} from "./styles";
import { ArrowDown, ArrowUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

type validatorModalSchemaData = zod.infer<typeof validatorModalSchema>;

const validatorModalSchema = zod.object({
  name: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]),
});

export const Modal = () => {
  const { register, handleSubmit, reset, control } =
    useForm<validatorModalSchemaData>({
      resolver: zodResolver(validatorModalSchema),
      defaultValues: {
        name: "",
        category: "",
      },
    });

  const handleModalSubmit = async (data: validatorModalSchemaData) => {
    const { name, type, category, price } = data;
    await createExpenses({
      name,
      type,
      category,
      price,
    });
    reset();
  };

  const createExpenses = useContextSelector(TrackerContext, (context) => {
    return context.createExpenses;
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ProfitOutlayButton>New Profit | Expense</ProfitOutlayButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <Dialog.Title>New Profit | Expense</Dialog.Title>
          <form onSubmit={handleSubmit(handleModalSubmit)}>
            <input type="text" placeholder="Name" {...register("name")} />
            <input
              type="number"
              placeholder="Price"
              {...register("price", { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Category"
              {...register("category")}
            />
            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <Options onValueChange={field.onChange} value={field.value}>
                    <OptionButton value="income">
                      <ArrowUp size={24} />
                      Entrada
                    </OptionButton>
                    <OptionButton value="outcome">
                      <ArrowDown size={24} />
                      Saída
                    </OptionButton>
                  </Options>
                );
              }}
            />
            <button type="submit">Register</button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
