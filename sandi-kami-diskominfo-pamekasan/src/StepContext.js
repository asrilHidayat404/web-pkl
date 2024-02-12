import React, { useState } from "react";
import PendaftaranTTE from "./Pages/PendaftaranTTE";

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <PendaftaranTTE />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
