import React from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Header from "../../ui/header";
import Footer from "../../ui/footer";

const Page404 = () => {
  return (
    <>
      <Header />
      <Heading>
        <FirstHeading>ОШИБКА 404</FirstHeading>
        <SecondHeading>
          Такой страницы не существует, вернитесь на Главную
        </SecondHeading>
      </Heading>
      <Footer />
    </>
  );
};

export default Page404;
