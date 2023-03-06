import {
  Overlay,
  ProfitOutlayButton,
  Content,
  CloseButton,
  Options,
} from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import { ArrowDown, ArrowUp, X } from "phosphor-react";

export const Modal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ProfitOutlayButton>New Profit | Otlay</ProfitOutlayButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <Dialog.Title>New Profit | Otlay</Dialog.Title>
          <form>
            <input type="text" placeholder="Description" />
            <input type="number" placeholder="Price" />
            <input type="text" placeholder="Category" />
            <Options>
              <button>
                Income <ArrowUp />
              </button>
              <button>
                Outcome <ArrowDown />
              </button>
            </Options>
            <button type="submit">Register</button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
