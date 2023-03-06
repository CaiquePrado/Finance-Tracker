import { HeaderContainer } from "./styles";
import { Wallet } from "phosphor-react";
import { Modal } from "../Modal";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Wallet size={32} />
        <h1>
          <span>F</span>inance<span> T</span>racker
        </h1>
        <Modal />
      </div>
    </HeaderContainer>
  );
};
