import { PrismicDocument } from "@prismicio/types";
import { ReactNode } from "react";
import { Header } from "../../components/layout/header/Header";

export const Default = ({
  children,
  navigation,
}: {
  children: ReactNode;
  navigation: PrismicDocument[];
}) => {
  return (
    <>
      <Header navigation={navigation} />
      <main className="container flex min-h-screen flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
};
