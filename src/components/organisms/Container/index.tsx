// node_modules
import { ReactNode } from "react";
// Styles
import { StyledMain } from "./styled";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Container;
