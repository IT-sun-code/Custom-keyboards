import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import Header from "../../ui/header";
import Footer from "../../ui/footer";
import styles from "./aboutUs.module.css";
import Loading from "../../ui/loading";
import TextBlock from "../../ui/textBlock/textBlock";
import { EmployeesService } from "../../services/employeesService";

const AboutUs = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await EmployeesService.getAll();
      setEmployees(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Heading>
        <FirstHeading>О НАС</FirstHeading>
        <SecondHeading>Рады знакомству!</SecondHeading>
      </Heading>

      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {employees.map((employee) => (
            <div className={styles.info} key={employee.id}>
              {employee.id % 2 === 0 ? (
                <>
                  <TextBlock key={employee.id} {...employee} />

                  <div className={styles.image} key={`image-${employee.id}`}>
                    <img src={employee.image} alt="avatar" />
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.image} key={`image-${employee.id}`}>
                    <img src={employee.image} alt="avatar" />
                  </div>
                  <TextBlock key={employee.id} {...employee} />
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <Footer />
    </>
  );
};

export default AboutUs;
