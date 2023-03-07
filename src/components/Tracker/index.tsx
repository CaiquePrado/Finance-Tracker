import { TrackContainer, TrackContent } from "./styles";
import { ArrowDown, ArrowUp, CurrencyCircleDollar } from "phosphor-react";
import { useContextSelector } from "use-context-selector";
import { TrackerContext } from "../../contexts/TrackerContext";
import { useMemo } from "react";

export const Tracker = () => {
  const expenses = useContextSelector(TrackerContext, (context) => {
    return context.expenses;
  });

  const summary = useMemo(() => {
    return expenses.reduce(
      (acc, expense) => {
        if (expense.type === "income") {
          acc.income += expense.price;
          acc.total += expense.price;
        } else {
          acc.outcome += expense.price;
          acc.total -= expense.price;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [expenses]);

  return (
    <TrackContainer>
      <TrackContent>
        <div>
          <p>Income</p>
          <ArrowUp size={32} />
        </div>
        <h2>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.income)}
        </h2>
      </TrackContent>
      <TrackContent>
        <div>
          <p>Outcome </p>
          <ArrowDown size={32} />
        </div>
        <h2>
          {summary.outcome > 0 && "- "}
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.outcome)}
        </h2>
      </TrackContent>
      <TrackContent>
        <div>
          <p>Total</p>
          <CurrencyCircleDollar size={32} />
        </div>
        <h2>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </h2>
      </TrackContent>
    </TrackContainer>
  );
};
