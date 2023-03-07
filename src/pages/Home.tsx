import { useContextSelector } from "use-context-selector";
import { Header } from "../components/Header";
import { SearchBox } from "../components/SearchBox";
import { Tracker } from "../components/Tracker";
import { TrackerContext } from "../contexts/TrackerContext";
import { HomeContainer, Table } from "./styles";

export const Home = () => {
  const expenses = useContextSelector(TrackerContext, (context) => {
    return context.expenses;
  });

  return (
    <>
      <Header />
      <Tracker />
      <SearchBox />
      <HomeContainer>
        <Table>
          <tbody>
            {expenses.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.price)}
                </td>
                <td>
                  {new Intl.DateTimeFormat("pt-br").format(
                    new Date(item.createdAt)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </HomeContainer>
    </>
  );
};
