import { HeaderContainer, ProfitOutlayButton } from "./styles";

import { Wallet } from "phosphor-react";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Wallet size={32} />
        <h1>
          <span>F</span>inance<span> T</span>racker
        </h1>
        <ProfitOutlayButton>New Profit / Otlay</ProfitOutlayButton>
      </div>
    </HeaderContainer>
  );
};
