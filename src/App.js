import { useState } from "react";
import Header from "./components/Header/AppHeader";
import Table from "./components/ResultsTable/Table";
import Form from "./components/UserForm/Form";

function App() {
  const [finalData, setUserInput] = useState(null);
  let INITIAL_INVESTMENT=0;
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results
    INITIAL_INVESTMENT=userInput["current-savings"];
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setUserInput(yearlyData);
    console.log(finalData); 
    // do something with yearlyData ...
  };

  const dataResetHandler =() =>{
    setUserInput(null);
  }
  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} resetHandler={dataResetHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table calculatedData={finalData} initialInvestment={INITIAL_INVESTMENT}/>
    </div>
  );
}

export default App;
