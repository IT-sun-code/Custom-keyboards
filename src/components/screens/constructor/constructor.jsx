import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Header from "../../ui/header";
import Footer from "../../ui/footer";

const Constructor = () => {
  return (
    <>
      <Header />
      <Heading>
        <FirstHeading>КОНСТРУКТОР КЛАВИАТУРЫ</FirstHeading>
        <SecondHeading>Мы еще работаем над этой услугой</SecondHeading>
      </Heading>
      <Footer />
    </>
  );
};

export default Constructor;
