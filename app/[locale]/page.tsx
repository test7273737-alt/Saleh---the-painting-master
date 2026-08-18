import React from "react";
import Sections from "./components/main/Sections";
import Bg from "./components/main/Bg";
import QuickContact from "./components/ui/QuickContact";
import PageWrapper from "./components/ui/PageWrapper";
import MobileMenu from "../[locale]/components/ui/MobileMenu";
import Header from "./components/main/Header";
import Corsur from "./components/ui/Corsur";
import dynamic from "next/dynamic";

const Page = () => {
  const BaseSlider = dynamic(() => import("./components/ui/BaseSlider"), {
    ssr: true,
    loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  });
  return (
    <>
      <Header />
      <PageWrapper>
        <Bg />
        <Sections />
        <QuickContact />
      </PageWrapper>
      <MobileMenu />
      <Corsur />
    </>
  );
};

export default Page;
