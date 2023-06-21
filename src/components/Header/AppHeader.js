import React from "react";
import styles from "./AppHeader.module.css";
import logo from "../../assets/investment-calculator-logo.png";

const AppHeader = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default AppHeader;
