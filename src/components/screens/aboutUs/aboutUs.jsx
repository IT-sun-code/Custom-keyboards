import React, { useState, useEffect } from "react";
import Heading from "../../ui/heading";
import FirstHeading from "../../ui/heading/firstHeading";
import SecondHeading from "../../ui/heading/secondHeading";
import styles from "./aboutUs.module.css";
import Loading from "../../ui/loading";
import TextBlock from "../../ui/textBlock/textBlock";
import EmployeesService from "../../services/employeesService";

const AboutUs = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { content } = await EmployeesService.getAll();
        setEmployees(content);
        setIsLoading(false);
      } catch (error) {
        errorCatcher(error);
      }
    };
    fetchData();
  }, []);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  return (
    <>
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
    </>
  );
};

export default AboutUs;
