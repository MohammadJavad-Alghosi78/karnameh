"use client";
// node_modules
import { useState } from "react";
// Components
import Header from ".";

interface IHeaderProps {
  title: string;
}

const HeaderContainer = (props: IHeaderProps) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <Header
      title={props.title}
      isAddModalOpen={isAddModalOpen}
      onCloseModal={() => setIsAddModalOpen(false)}
      onOpenModal={() => setIsAddModalOpen(true)}
    />
  );
};

export default HeaderContainer;
