import React from "react";
import styles from "./Table.module.css";

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  if (!props.calculatedData) {
    return (
      <div>
        <p style={{textAlign:'center'}}>No records to show</p>
      </div>
    );
  }
  return (
    <div>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.calculatedData.map((yearlyData) => (
            <tr key={yearlyData.year}>
              <td>{formatter.format(yearlyData.year)}</td>
              <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearlyData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearlyData.savingsEndOfYear -
                    props.initialInvestment -
                    yearlyData.yearlyContribution * yearlyData.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                    yearlyData.yearlyContribution * yearlyData.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
