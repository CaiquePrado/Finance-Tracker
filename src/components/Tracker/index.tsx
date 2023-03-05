import { TrackContainer, TrackContent } from "./styles";
import { ArrowDown, ArrowUp, CurrencyCircleDollar } from "phosphor-react";

export const Tracker = () => {
  return (
    <TrackContainer>
      <TrackContent>
        <div>
          <p>Income</p>
          <ArrowUp size={32} />
        </div>
        <h2>R$ 10.000.00</h2>
      </TrackContent>
      <TrackContent>
        <div>
          <p>Outcome </p>
          <ArrowDown size={32} />
        </div>
        <h2>R$ 10.000.00</h2>
      </TrackContent>
      <TrackContent>
        <div>
          <p>Total</p>
          <CurrencyCircleDollar size={32} />
        </div>
        <h2>R$ 10.000.00</h2>
      </TrackContent>
    </TrackContainer>
  );
};
