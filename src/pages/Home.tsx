import { Header } from "../components/Header";
import { SearchBox } from "../components/SearchBox";
import { Tracker } from "../components/Tracker";
import { HomeContainer, Table } from "./styles";

export const Home = () => {
  return (
    <>
      <Header />
      <Tracker />
      <SearchBox />
      <HomeContainer>
        <Table>
          <tbody>
            <tr>
              <td>Venda de landing Page</td>
              <td>Venda</td>
              <td>R$ 100.00</td>
              <td>06/03/2023</td>
            </tr>
            <tr>
              <td>Venda de landing Page</td>
              <td>Venda</td>
              <td>R$ 100.00</td>
              <td>06/03/2023</td>
            </tr>
            <tr>
              <td>Venda de landing Page</td>
              <td>Venda</td>
              <td>R$ 100.00</td>
              <td>06/03/2023</td>
            </tr>
            <tr>
              <td>Venda de landing Page</td>
              <td>Venda</td>
              <td>R$ 100.00</td>
              <td>06/03/2023</td>
            </tr>
            <tr>
              <td>Venda de landing Page</td>
              <td>Venda</td>
              <td>R$ 100.00</td>
              <td>06/03/2023</td>
            </tr>
          </tbody>
        </Table>
      </HomeContainer>
    </>
  );
};
