import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../services/api";

type createExpenses = {
  name: string;
  price: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
};

type expenses = {
  id: number;
  name: string;
  price: number;
  type: "income" | "outcome";
  createdAt: string;
};

interface TrackerContextData {
  expenses: expenses[];
  createExpenses: (data: createExpenses) => Promise<void>;
}
interface TrackerProviderProps {
  children: ReactNode;
}

export const TrackerContext = createContext({} as TrackerContextData);

export const TrackerProvider = ({ children }: TrackerProviderProps) => {
  const [expenses, setExpense] = useState<expenses[]>([]);

  const createExpenses = useCallback(async (data: createExpenses) => {
    const { name, type, category, price } = data;
    const response = await api.post("/business", {
      name,
      type,
      category,
      price,
      createdAt: new Date(),
    });

    setExpense((state) => [response.data, ...state]);
  }, []);

  return (
    <TrackerContext.Provider value={{ expenses, createExpenses }}>
      {children}
    </TrackerContext.Provider>
  );
};
